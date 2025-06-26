const mongoose = require('mongoose');

const horarioClaseSchema = new mongoose.Schema({
  grupo_id: {
    type: String, // Ejemplo: "dsm_5a_1"
    ref: 'Grupo',
    required: true
  },
  diaSemana: {
    type: String,
    enum: ['lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'],
    required: true
  },
  horaInicio: {
    type: String, // Formato recomendado: "08:00"
    required: true
  },
  horaFin: {
    type: String, // Formato recomendado: "09:30"
    required: true
  },
  materia: {
    type: String, // O puedes referenciar una colección 'Materias'
    required: true
  },
  docente_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('horarioClase', horarioClaseSchema);
