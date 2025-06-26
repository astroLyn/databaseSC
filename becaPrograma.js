const mongoose = require('mongoose');

const becaProgramaSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
    trim: true
  },
  descripcion: {
    type: String,
    required: true
  },
  requisitos: {
    type: String, // O puedes usar [String] si deseas lista separada
    required: true
  },
  fechaInicio: {
    type: Date,
    required: true
  },
  fechaFin: {
    type: Date,
    required: true
  },
  tipo: {
    type: String,
    enum: ['beca', 'programa', 'otro'],
    required: true
  },
  estado: {
    type: String,
    enum: ['activo', 'inactivo', 'finalizado'],
    default: 'activo'
  },
  autor_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true
  },
  fechaPublicacion: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

module.exports = mongoose.model('becaPrograma', becaProgramaSchema);
