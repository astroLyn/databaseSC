const mongoose = require('mongoose');

const cicloEscolarSchema = new mongoose.Schema({
  _id: {
    type: String,
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
  activo: {
    type: Boolean,
    default: true
  }
}, { timestamps: true });

module.exports = mongoose.model('CicloEscolar', cicloEscolarSchema);