const mongoose = require('mongoose');

const noticiaSchema = new mongoose.Schema({
  autor_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'usuario',
    required: true
  },
  titulo: {
    type: String,
    required: true,
    trim: true
  },
  contenido: {
    type: String,
    required: true
  },
  fechaCreacion: {
    type: Date,
    default: Date.now
  },
  fechaPublicacion: {
    type: Date // Se puede dejar en null si aún no se publica
  },
  estado: {
    type: String,
    enum: ['borrador', 'publicada'],
    default: 'borrador'
  },
  imagenUrl: {
    type: String, // Puede ser una URL o ruta relativa
    default: null
  }
}, { timestamps: true });

module.exports = mongoose.model('noticia', noticiaSchema);
