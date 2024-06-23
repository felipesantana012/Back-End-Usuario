// models/usuario.js
import mongoose from 'mongoose';

const UsuarioSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  idade: {
    type: Number,
    required: true,
  },
});


export default mongoose.models.Usuario || mongoose.model("Usuario", UsuarioSchema);
