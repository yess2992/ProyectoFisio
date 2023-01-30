const express = require("express");
const router = express.Router();
const conexion = require("../src/database/db");
//Mostrar registros
router.get("/indexTratamientos", (req, res) => {
  conexion.query("SELECT * FROM tratamientos", (error, registrosTrat) => {
    if (error) {
      throw error;
    } else {
      let cat = "Sin categoría";
      registrosTrat.forEach((element) => {
        conexion.query(
          "SELECT getCategoryFunction(" + element.FKPersona + ")",
          (error, categories) => {
            if (error) {
              throw error;
            } else {
              cat =
                categories[0]["getCategoryFunction(" + element.FKPersona + ")"];
              element.Categoria = cat;
              //console.log('element2: ', element);
              //console.log('element categoria: ', element.id , ' - ', element.Categoria);
            }
          }
        );
        //element['Categoria'] = cat;
        //element.Categoria = cat;
      });
      conexion.query("SELECT * FROM personas", (error, usersTrat) => {
        if (error) {
          throw error;
        } else {
          console.log(usersTrat);
          setTimeout(function () {
            res.render("indexTratamientos.ejs", {
              registrosTrat: registrosTrat,
              usersTrat: usersTrat,
            });
          }, 500);
        }
      });
      /* setTimeout(function(){
                res.render('indexTratamientos.ejs', {registrosTrat:registrosTrat,usersTrat:usersTrat});
            }, 500); */
    }
  });
});

//Ruta para editar Registros

router.get("/editTrat/:id", (req, res) => {
  const id = req.params.id;
  conexion.query(
    "SELECT * FROM bigfisio.tratamientos WHERE id=?",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      } else {
        res.render("editTratamientos.ejs", { user: results[0] });
      }
    }
  );
});

//Ruta Eliminar

router.get("/deleteTrat/:id", (req, res) => {
  const id = req.params.id;
  conexion.query(
    "DELETE FROM bigfisio.tratamientos WHERE id = ?",
    [id],
    (error, results) => {
      if (error) {
        console.log(error);
      } else {
        res.redirect("/indexTratamientos");
      }
    }
  );
});

//Crear Registros

router.get("/createTratamiento", (req, res) => {
  conexion.query("SELECT * FROM personas", (error, results) => {
    if (error) {
      throw error;
    } else {
      console.log(results);
      res.render("createTratamiento.ejs", { results: results });
    }
  });
  //res.render('createHSaludable');
});

const crud = require("../src/controllers/crudTratamientos");

router.post("/saveTrat", crud.save);
router.post("/updateTrat", crud.update);

module.exports = router;
