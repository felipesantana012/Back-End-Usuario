import UsuarioService from "../service/UsuarioService";
const usuarioService = new UsuarioService();

class UsuarioController {
  async criarUsuario(req, res) {
    try {
      const user = await usuarioService.criarUsuario(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ message:"Erro ao criar um Usuario",error: error.message });
    }
  }

  async buscarTodosUsuarios(req, res){
    try {
        const usuarios = await usuarioService.buscarTodosUsuarios();
        res.status(200).json(usuarios)
    } catch (error) {
      res.status(500).json({ message:"Erro ao buscar todos os Usuarios", error: error.message });
    }
  }

  async buscarUsuarioPorId(req, res) {
    try {
      const user = await usuarioService.buscarUsuarioPorId(req.params.id);
      if (!user) {
        return res.status(404).json({ message: "ID Usuario não encontrado" });
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message:"Erro ao atualizar Usuario", error: error.message });
    }
  }

  async buscarEmailUsuario(req, res) {
    try {
      const user = await usuarioService.buscarEmailUsuario(req.params.email);
      if (!user) {
        return res.status(404).json({ message: "ID Usuario não encontrado" });
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({  message:"Erro ao buscar Usuario por email", error: error.message });
    }
  }

  async atualizarUsuario(req, res) {
    try {
      const user = await usuarioService.atualizarUsuario(req.params.id, req.body);
      if (!user) {
        return res.status(404).json({ message: "ID Usuario não encontrado" });
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({message:"Erro ao atualizar Usuario",  error: error.message });
    }
  }

  async deletarUsuario(req, res) {
    try {
      const user = await usuarioService.deletarUsuario(req.params.id);
      if (!user) {
        return res.status(404).json({ message: "ID Usuario não encontrado" });
      }
      res.status(200).json({ message: "Usuario deletado com Sucesso" });
    } catch (error) {
      res.status(500).json({message: "Erro ao deletar usuario", error: error.message });
    }
  }
}

export default UsuarioController;
