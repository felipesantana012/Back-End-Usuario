import UsuarioRepository from "../UsuarioRepository.js";
import Usuario from "../../models/Usuario.js";

class MongoUsuarioRepository extends UsuarioRepository {
  async criarUsuario(usuario) {
    const user = new Usuario(usuario);
    return await user.save();
  }

  async buscarTodosUsuarios() {
    return await Usuario.find();
  }

  async buscarUsuarioPorId(id) {
    return await Usuario.findById(id);
  }

  async buscarEmailUsuario(email) {
    return await Usuario.findOne({ email });
  }

  async atualizarUsuario(id, usuario) {
    return await Usuario.findByIdAndUpdate(id, usuario, { new: true });
  }

  async deletarUsuario(id) {
    return await Usuario.findByIdAndDelete(id);
  }
}

export default MongoUsuarioRepository;
