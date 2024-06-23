
import express from 'express';
import UsuarioController from '../controller/UsuarioController.js';


const router = express.Router();
const usuarioController = new UsuarioController();

router.post('/', (req, res) => usuarioController.criarUsuario(req, res));
router.get('/', (req, res) => usuarioController.buscarTodosUsuarios(req, res));
router.get('/:id', (req, res) => usuarioController.buscarUsuarioPorId(req, res));
router.get('/email/:email', (req, res) => usuarioController.buscarEmailUsuario(req, res));
router.put('/:id', (req, res) => usuarioController.atualizarUsuario(req, res));
router.delete('/:id', (req, res) => usuarioController.deletarUsuario(req, res));

export default router;
