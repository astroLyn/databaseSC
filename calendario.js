const mongoose = require('mongoose');

const eventoSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
    trim: true
  },
  descripcion: {
    type: String,
    default: ''
  },
  fecha: {
    type: Date,
    required: true
  },
  tipo: {
    type: String,
    enum: ['festivo', 'evaluación', 'entrega', 'otro'], // puedes ajustar los valores
    required: true
  }
}, { _id: false }); // evita que se genere _id por cada evento

const calendarioEscolarSchema = new mongoose.Schema({
  _id: {
    type: String, // por ejemplo: "2025"
    required: true
  },
  año: {
    type: Number,
    required: true,
    unique: true
  },
  eventos: {
    type: [eventoSchema],
    default: []
  },
  estado: {
    type: String,
    enum: ['activo', 'inactivo'],
    default: 'activo'
  },
  fechaActualizacion: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

module.exports = mongoose.model('calendarioEscolar', calendarioEscolarSchema);
