const mongoose = require('mongoose');

const publicacionSchema = new mongoose.Schema({
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
  grupo: {
    type: String,
    required: false
  },
  tipo: {
    type: String,
    enum: ['aviso', 'noticia', 'pregunta'],
    default: 'aviso',
    required: true
  },
  fecha: {
    type: Date,
    default: Date.now
  },
  estado: {
    type: Boolean,
    default: true,
    require: true
  },
  visibilidad: {
    type: String,
    enum: ['publica', 'privada', 'grupo'],
    default: 'publica'
  }
}, { timestamps: true });

module.exports = mongoose.model('publicacion', publicacionSchema);
