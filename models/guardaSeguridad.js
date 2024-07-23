const mongoose = require("mongoose");

const guardSchema = mongoose.Schema({
  cedula: { type: String, unique: true, required: true },
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  direccion: { type: String, required: true },
  telefono: { type: String },
  novedad: { type: String, maxlength: 200 },
  llamados_atencion: { type: String },
  sanciones: { type: String },
  vigencia_contrato: { type: Date },
  salario: { type: mongoose.Schema.Types.Decimal128, required: true },
  horas_extras: { type: mongoose.Schema.Types.Decimal128, default: 0.0 },
});

module.exports = mongoose.model("GuardaSeguridad", guardSchema);
