import { Router } from 'express';
import { login } from '../controller/authController';
import { registrar } from '../controller/registeController';

const router = Router();

router.post('/login', login);
router.post('/registrar', registrar);

export default router;
