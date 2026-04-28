import rateLimit from 'express-rate-limit';
import { config } from '../config.js';

export function createContactRateLimit() {
  return rateLimit({
    windowMs: config.rateLimitWindowMs,
    max: config.rateLimitMax,
    standardHeaders: true,
    legacyHeaders: false,
    handler: (req, res) => {
      res.status(429).json({
        success: false,
        error: 'Trop de tentatives. Veuillez patienter quelques minutes.',
        requestId: req.requestId,
      });
    },
  });
}
