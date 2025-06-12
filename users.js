const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const usuarioSchema = new mongoose.Schema({
  _id: {
    //Esta puede ser correo o username, si es username, hay que agregar el correo como campo
    type: String,
    required: true
  },
  nombre: {
    type: String,
    required: true
  },
  rol: {
    type: String,
    enum: ["alumno", "maestro", "administrador", "personal_administrativo"],
    required: true
  },
  grupo_id: {
    type: String,
    ref: "grupos"
  },
  password: {
    type: String,
    required: true
  },
  activo: {
    type: Boolean,
    default: true
  },
  fechaRegistro: {
    type: Date,
    default: Date.now
  }
});

//Hash automático de la contraseña
usuarioSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

module.exports = mongoose.model("Usuario", usuarioSchema);