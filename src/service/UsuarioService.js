import MongoUsuarioRepository from "../repository/bancosExternos/MongoRepository.js";

const dbRepository = new MongoUsuarioRepository();

class UsuarioService {
  async criarUsuario(usuario) {
    return await dbRepository.criarUsuario(usuario);
  }

  async buscarTodosUsuarios() {
    return await dbRepository.buscarTodosUsuarios();
  }

  async buscarUsuarioPorId(id) {
    return await dbRepository.buscarUsuarioPorId(id);
  }

  async buscarEmailUsuario(email) {
    return await dbRepository.buscarEmailUsuario(email);
  }

  async atualizarUsuario(id, usuario) {
    return await dbRepository.atualizarUsuario(id, usuario);
  }

  async deletarUsuario(id) {
    return await dbRepository.deletarUsuario(id);
  }
}

export default UsuarioService;
