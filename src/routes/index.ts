import { Router } from 'express';
import authRoutes from './authRoutes';
import { autenticarJWT } from '../middlewares/autenticarJWT';

const router = Router();

router.use('/auth', authRoutes);

router.get('/protegido', autenticarJWT, (req, res) => {
  res.json({ mensagem: 'Você acessou uma rota protegida!', usuario: req.user });
});

export default router;