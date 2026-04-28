import { config } from './config.js';
import { log } from './lib/logger.js';
import { createApp } from './app.js';
import { verifySmtpOnBoot } from './services/mailService.js';

const app = createApp();

const server = app.listen(config.port, async () => {
  log.info('server_listen', {
    port: config.port,
    frontend: config.frontendUrl,
    contactEmail: config.contactEmail,
    driverEmail: config.driverContactEmail,
  });
  await verifySmtpOnBoot();
});

function shutdown(signal) {
  log.info('shutdown_signal', { signal });
  server.close(() => {
    log.info('server_closed');
    process.exit(0);
  });
  setTimeout(() => process.exit(1), 10000).unref();
}

process.on('SIGTERM', () => shutdown('SIGTERM'));
process.on('SIGINT', () => shutdown('SIGINT'));
