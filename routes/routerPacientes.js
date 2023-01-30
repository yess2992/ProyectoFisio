const express = require("express");
const router = express.Router();
const conexion = require("../src/database/db");

//Mostrar registros
router.get("/indexPacientes", (req, res) => {
  conexion.query(
    'SELECT id, date_format(Fecha,"%d-%m-%y") as Fecha, Hora, NombreCompleto, TipoDocumento, NumIdentificacion, Direccion, date_format(FechaNacimiento,"%d-%m-%y") as FechaNacimiento, Telefono, Edad, Sexo, Ocupacion, CondicionSalud, NombreUsuario, Contraseña, Eps, NombreCategoria, AntFarmacologicos, AntPersonales, AntFamiliares, FKRol, createdAt, updatedAt FROM bigfisio.personas;',
    (error, results) => {
      if (error) {
        throw error;
      } else {
        let cat = "Sin categoría";
        results.forEach((element) => {
          conexion.query(
            "SELECT getCategoryFunction(" + element.id + ")",
            (error, categories) => {
              if (error) {
                throw error;
              } else {
                cat = categories[0]["getCategoryFunction(" + element.id + ")"];
                element.Categoria = cat;
              }
            }
          );
        });
        setTimeout(function () {
          res.render("indexPacientes.ejs", { results: results });
        }, 500);
      }
    }
  );
});

//Ruta para editar Registros

router.get("/editPac/:id", (req, res) => {
  const id = req.params.id;
  conexion.query(
    "SELECT * FROM personas WHERE id=?",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      } else {
        res.render("editPacientes.ejs", { user: results[0] });
      }
    }
  );
});

//Ruta Eliminar

router.get("/deletePac/:id", (req, res) => {
  const id = req.params.id;
  conexion.query(
    "DELETE FROM personas WHERE id = ?",
    [id],
    (error, results) => {
      if (error) {
        console.log(error);
      } else {
        res.redirect("/indexPacientes");
      }
    }
  );
});

//Crear Registros

router.get("/createPacientes", (req, res) => {
  res.render("createPacientes");
});

const crud = require("../src/controllers/crudPacientes");

router.post("/savePac", crud.save);
router.post("/updatePac", crud.update);

module.exports = router;
