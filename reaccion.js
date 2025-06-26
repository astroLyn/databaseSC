const mongoose = require('mongoose');

const reaccionSchema = new mongoose.Schema({
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
  tipo: {
    type: String,
    enum: ['like', 'dislike'],
    default: 'like',
    required: true
  },
  fecha: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

reaccionSchema.index({ usuario_id: 1, publicacion_id: 1 }, { unique: true });

module.exports = mongoose.model('reaccion', reaccionSchema);
