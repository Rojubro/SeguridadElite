const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./network/mongoDB");
const { engine } = require("express-handlebars");
const path = require("path");

const app = express();

connectDB();

app.engine(
  "handlebars",
  engine({
    defaultLayout: "main",
    layoutsDir: path.join(__dirname, "views", "layouts"),
    partialsDir: path.join(__dirname, "views", "partials"),
  })
);
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

const guardaSeguridadRoute = require("./routes/guardaSeguridad");
app.use("/api/guardaSeguridad", guardaSeguridadRoute);

const postRoute = require("./routes/post");
app.use("/api/servicios", postRoute);

app.get("/", (req, res) => {
  res.render("index", {
    layout: "index",
    title: "Seguridad ELITE",
    showHeader: true,
  });
});

app.get("/ingreso", (req, res) => {
  res.render("listUsers", {
    layout: "listUsers",
    title: "Seguridad ELITE",
    showHeader: true,
    showGuardasList: true,
    guardas: [
      { nombre: "Nombre1", apellido: "Apellido1", cedula: "12345" },
      { nombre: "Nombre2", apellido: "Apellido2", cedula: "54321" },
    ],
  });
});

app.listen(3000, () => {
  console.log("Servidor escuchando en el puerto 3000");
});
