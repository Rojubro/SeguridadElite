const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const GuardaSeguridad = require("../models/guardaSeguridad");

// Crear un nuevo guarda de seguridad (Create)
router.post("/", async (req, res) => {
  try {
    const guarda = new GuardaSeguridad(req.body);
    await guarda.save();
    res.status(201).send(guarda);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Obtener todos los guardas de seguridad (Read)
router.get("/", async (req, res) => {
  try {
    const guardas = await GuardaSeguridad.find({});
    res.status(200).send(guardas);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Obtener un guarda de seguridad por ID (Read)
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ error: "ID inválido" });
  }

  try {
    const guarda = await GuardaSeguridad.findById(id);
    if (!guarda) {
      return res.status(404).send();
    }
    res.status(200).send(guarda);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Actualizar un guarda de seguridad por ID (Update)
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ error: "ID inválido" });
  }

  try {
    const guarda = await GuardaSeguridad.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
    if (!guarda) {
      return res.status(404).send();
    }
    res.status(200).send(guarda);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Eliminar un guarda de seguridad por ID (Delete)
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ error: "ID inválido" });
  }

  try {
    const guarda = await GuardaSeguridad.findByIdAndDelete(id);
    if (!guarda) {
      return res.status(404).send();
    }
    res.status(200).send(guarda);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;