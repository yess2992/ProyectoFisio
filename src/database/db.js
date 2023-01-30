const mysql2 = require("mysql2");
const conexion = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "bigfisio",
});
conexion.connect((error) => {
  if (error) {
    console.error("El error de conexión es: " + error);
    return;
  }
  console.log("¡Conectado a la Base de Datos!");
});

module.exports = conexion;
