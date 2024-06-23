
import express from 'express';
import UsuarioRoutes from './UsuarioRotas.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Olá, mundo!');
});

router.use('/usuarios', UsuarioRoutes);

export default router;
