const express = require("express");
const router = express.Router();
const conexion = require("../src/database/db");
//Mostrar registros
router.get("/indexCardio", (req, res) => {
  conexion.query("SELECT * FROM cardiorespiratorios", (error, registrosHS) => {
    if (error) {
      throw error;
    } else {
      console.log(registrosHS);
      conexion.query("SELECT * FROM personas", (error, usuarios) => {
        if (error) {
          throw error;
        } else {
          console.log(usuarios);
          res.render("indexCardio.ejs", {
            registrosHS: registrosHS,
            usuarios: usuarios,
          });
        }
      });
    }
  });
});

//Ruta para editar Registros

router.get("/editCard/:id", (req, res) => {
  const id = req.params.id;
  conexion.query(
    "SELECT * FROM bigfisio.cardiorespiratorios WHERE id=?",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      } else {
        res.render("editCardio.ejs", { user: results[0] });
      }
    }
  );
});

//Ruta Eliminar

router.get("/deleteCard/:id", (req, res) => {
  const id = req.params.id;
  conexion.query(
    "DELETE FROM bigfisio.cardiorespiratorios WHERE id = ?",
    [id],
    (error, results) => {
      if (error) {
        console.log(error);
      } else {
        res.redirect("/indexCardio");
      }
    }
  );
});

//Crear Registros

router.get("/createCardio", (req, res) => {
  conexion.query("SELECT * FROM personas", (error, results) => {
    if (error) {
      throw error;
    } else {
      console.log(results);
      res.render("createCardio.ejs", { results: results });
    }
  });
  //res.render('createHSaludable');
});

const crud = require("../src/controllers/crudCardio");

router.post("/saveCard", crud.save);
router.post("/updateCard", crud.update);

module.exports = router;
