import dotenv from 'dotenv';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: join(__dirname, '.env') });

export const config = {
  port: Number(process.env.PORT) || 3001,
  frontendUrl: process.env.FRONTEND_URL || 'http://localhost:5173',
  trustProxy: process.env.TRUST_PROXY || '1',
  contactEmail: process.env.CONTACT_EMAIL || 'koogwe@outlook.fr',
  driverContactEmail:
    process.env.DRIVER_CONTACT_EMAIL || process.env.CONTACT_EMAIL || 'koogwe@outlook.fr',
  nodeEnv: process.env.NODE_ENV || 'development',
  isDev: (process.env.NODE_ENV || 'development') === 'development',
  rateLimitWindowMs: 10 * 60 * 1000,
  rateLimitMax: 5,
};
