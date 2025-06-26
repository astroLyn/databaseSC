const mongoose = require('mongoose');

const comentarioSchema = new mongoose.Schema({
  publicacion_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'publicacion',
    required: true
  },
  autor_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'usuario',
    required: true
  },
  contenido: {
    type: String,
    required: true,
    trim: true
  },
  fecha: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

module.exports = mongoose.model('Comentario', comentarioSchema);
