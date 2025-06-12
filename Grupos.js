const mongoose = require('mongoose');

const grupoSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true
  },
  nombreGrupo: {
    type: String,
    required: true
  },
  turno: {
    type: String,
    enum: ['Matutino', 'Vespertino'],
    required: true
  },
  nivel: {
    type: String,
    enum: ['TSU', 'Ingenieria'],
    required: true
  },
  semestre: {
    type: Number,
    required: true,
  },
  ciclo_id: {
    type: String,
    required: true,
    ref: 'CicloEscolar'
  },
  carrera_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Carrera',
    required: true
  },
  activo: {
    type: Boolean,
    default: true
  }
}, { timestamps: true }); // timestamps agrega createdAt y updatedAt automáticamente

module.exports = mongoose.model('Grupo', grupoSchema);

