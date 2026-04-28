import { Router } from 'express';
import { postContact, postDriverContact } from '../controllers/contactController.js';
import { createContactRateLimit } from '../middleware/rateLimits.js';

const router = Router();
const limiter = createContactRateLimit();

router.post('/', limiter, postContact);
router.post('/driver', limiter, postDriverContact);

export default router;
