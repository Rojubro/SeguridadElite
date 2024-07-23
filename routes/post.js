const express = require("express");
const router = express.Router();
const GuardaSeguridad = require("../models/guardaSeguridad");

router.post("/", async (req, res) => {
  try {
    const guardaData = {
      cedula: req.body.cedula,
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      direccion: req.body.direccion,
      telefono: req.body.telefono,
      novedad: req.body.novedad,
      llamados_atencion: req.body.llamados_atencion,
      sanciones: req.body.sanciones,
      vigencia_contrato: req.body.vigencia_contrato,
      salario: req.body.salario,
      horas_extras: req.body.horas_extras,
    };

    const newGuarda = new GuardaSeguridad(guardaData);
    const savedGuarda = await newGuarda.save();
    res.json(savedGuarda);
  } catch (error) {
    console.error("Error insertando documento:", error);
    res.status(500).json({ message: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const guardas = await GuardaSeguridad.find();
    console.log("Guardas", guardas);
    return res.json(guardas);
  } catch (error) {
    console.error("Error al obtener guardas de seguridad:", error);
    res.status(500).json({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const guarda = await GuardaSeguridad.findById(req.params.id);
    if (!guarda) {
      return res
        .status(404)
        .json({ message: "Guarda de seguridad no encontrado" });
    }
    res.json(guarda);
  } catch (error) {
    console.error("Error al obtener guarda de seguridad por ID:", error);
    res.status(500).json({ message: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const guardaUpdate = {
      cedula: req.body.cedula,
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      direccion: req.body.direccion,
      telefono: req.body.telefono,
      novedad: req.body.novedad,
      llamados_atencion: req.body.llamados_atencion,
      sanciones: req.body.sanciones,
      vigencia_contrato: req.body.vigencia_contrato,
      salario: req.body.salario,
      horas_extras: req.body.horas_extras,
    };

    const updatedGuarda = await GuardaSeguridad.findByIdAndUpdate(
      req.params.id,
      guardaUpdate,
      { new: true }
    );
    if (!updatedGuarda) {
      return res
        .status(404)
        .json({ message: "Guarda de seguridad no encontrado" });
    }
    res.json(updatedGuarda);
  } catch (error) {
    console.error("Error al actualizar guarda de seguridad:", error);
    res.status(500).json({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedGuarda = await GuardaSeguridad.findByIdAndDelete(
      req.params.id
    );
    if (!deletedGuarda) {
      return res
        .status(404)
        .json({ message: "Guarda de seguridad no encontrado" });
    }
    res.json({ message: "Guarda de seguridad eliminado correctamente" });
  } catch (error) {
    console.error("Error al eliminar guarda de seguridad:", error);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
