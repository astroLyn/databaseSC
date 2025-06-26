const mongoose = require('mongoose');

const guardadosSchema = new mongoose.Schema({
  usuario_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'usuario',
    required: true
  },
  publicacion_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'publicacion',
    required: true
  },
  fechaGuardado: {
    type: Date,
    default: Date.now
  },
  estado: {
    type: String,
    enum: ['guardado', 'eliminado'],
    default: 'guardado'
  }
}, { timestamps: true });

// Evita que un usuario guarde la misma publicación más de una vez al mismo tiempo
publicacionGuardadaSchema.index({ usuario_id: 1, publicacion_id: 1 }, { unique: true });

module.exports = mongoose.model('guardados', publicacionGuardadaSchema);
