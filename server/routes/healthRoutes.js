import { Router } from 'express';
import { getTransporter, isSmtpReady } from '../services/mailService.js';

const router = Router();

router.get('/health', (req, res) => {
  const smtp = getTransporter();
  res.json({
    status: 'ok',
    service: 'KOOGWE Mail API',
    smtpConfigured: Boolean(smtp),
    smtpReady: isSmtpReady(),
    requestId: req.requestId,
  });
});

export default router;
