const express = require("express");
const router = express.Router();
const conexion = require("../src/database/db");
//Mostrar registros
router.get("/indexMusculo", (req, res) => {
  conexion.query("SELECT * FROM musculoesqueleticos", (error, registrosm) => {
    if (error) {
      throw error;
    } else {
      console.log(registrosm);
      conexion.query("SELECT * FROM personas", (error, usuariom) => {
        if (error) {
          throw error;
        } else {
          console.log(usuariom);
          res.render("indexMusculo.ejs", {
            registrosm: registrosm,
            usuariom: usuariom,
          });
        }
      });
    }
  });
});

//Ruta para editar Registros

router.get("/editMus/:id", (req, res) => {
  const id = req.params.id;
  conexion.query(
    "SELECT * FROM bigfisio.musculoesqueleticos WHERE id=?",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      } else {
        res.render("editMusculo.ejs", { user: results[0] });
      }
    }
  );
});

//Ruta Eliminar

router.get("/deleteMus/:id", (req, res) => {
  const id = req.params.id;
  conexion.query(
    "DELETE FROM bigfisio.musculoesqueleticos WHERE id = ?",
    [id],
    (error, results) => {
      if (error) {
        console.log(error);
      } else {
        res.redirect("/indexMusculo");
      }
    }
  );
});

//Crear Registros

router.get("/createMusculo", (req, res) => {
  conexion.query("SELECT * FROM personas", (error, results) => {
    if (error) {
      throw error;
    } else {
      console.log(results);
      res.render("createMusculo.ejs", { results: results });
    }
  });
});

const crud = require("../src/controllers/crudMusculo");

router.post("/saveMus", crud.save);
router.post("/updateMus", crud.update);

module.exports = router;
