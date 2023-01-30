const express = require("express");
const router = express.Router();
const conexion = require("../src/database/db");
//Mostrar registros
router.get("/indexNeuro", (req, res) => {
  conexion.query(
    "SELECT * FROM neurorehabilitacions",
    (error, registrosNeu) => {
      if (error) {
        throw error;
      } else {
        console.log(registrosNeu);
        conexion.query("SELECT * FROM personas", (error, usuariosNeu) => {
          if (error) {
            throw error;
          } else {
            console.log(usuariosNeu);
            res.render("indexNeuro.ejs", {
              registrosNeu: registrosNeu,
              usuariosNeu: usuariosNeu,
            });
          }
        });
      }
    }
  );
});

//Ruta para editar Registros

router.get("/editNeur/:id", (req, res) => {
  const id = req.params.id;
  conexion.query(
    "SELECT * FROM bigfisio.neurorehabilitacions WHERE id=?",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      } else {
        res.render("editNeuro.ejs", { user: results[0] });
      }
    }
  );
});

//Ruta Eliminar

router.get("/deleteNeur/:id", (req, res) => {
  const id = req.params.id;
  conexion.query(
    "DELETE FROM bigfisio.neurorehabilitacions WHERE id = ?",
    [id],
    (error, results) => {
      if (error) {
        console.log(error);
      } else {
        res.redirect("/indexNeuro");
      }
    }
  );
});

//Crear Registros

router.get("/createNeuro", (req, res) => {
  conexion.query("SELECT * FROM personas", (error, results) => {
    if (error) {
      throw error;
    } else {
      console.log(results);
      res.render("createNeuro.ejs", { results: results });
    }
  });
});

const crud = require("../src/controllers/crudNeuro");

router.post("/saveNeur", crud.save);
router.post("/updateNeur", crud.update);

module.exports = router;
