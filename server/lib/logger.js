import { config } from '../config.js';

function line(level, msg, extra = {}) {
  const payload = {
    t: new Date().toISOString(),
    level,
    msg,
    ...extra,
  };
  if (config.isDev) {
    const out = Object.keys(extra).length ? `${msg} ${JSON.stringify(extra)}` : msg;
    if (level === 'error') console.error(`[${level}]`, out);
    else console.log(`[${level}]`, out);
  } else {
    console.log(JSON.stringify(payload));
  }
}

export const log = {
  info: (msg, extra) => line('info', msg, extra),
  warn: (msg, extra) => line('warn', msg, extra),
  error: (msg, extra) => line('error', msg, extra),
};
