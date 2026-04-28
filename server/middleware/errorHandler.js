import { log } from '../lib/logger.js';

export function errorHandler(err, req, res, _next) {
  const requestId = req.requestId || 'unknown';
  log.error('unhandled_error', {
    requestId,
    message: err?.message,
    code: err?.code,
  });
  res.status(500).json({
    success: false,
    error: 'Erreur interne serveur.',
    requestId,
  });
}
