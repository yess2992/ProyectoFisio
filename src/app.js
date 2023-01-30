const express = require("express");
const app = express();
//Motor de plantilla
app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/", require("../routes/inicio"));
app.use("/", require("../routes/routerPacientes"));
app.use("/", require("../routes/routerCardio"));
app.use("/", require("../routes/routerMusculo"));
app.use("/", require("../routes/routerNeuro"));
app.use("/", require("../routes/routerTratamientos"));

//Starting the server
app.listen(5001, () => {
  console.log("SERVER listening en http://localhost:5001");
});
