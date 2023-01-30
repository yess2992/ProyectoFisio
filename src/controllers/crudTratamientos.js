const conexion = require("../database/db");

//GUARDAR un REGISTRO

exports.save = (req, res) => {
  const id = req.body.id;
  const CondSaludTratamto = req.body.CondSaludTratamto;
  const DescripcionTratamto = req.body.DescripcionTratamto;
  const FirmaFisio = req.body.FirmaFisio;
  const RegProfesional = req.body.RegProfesional;
  const FKPersona = req.body.FKPersona;

  conexion.query(
    "REPLACE INTO tratamientos SET ?",
    {
      id: id,
      CondSaludTratamto: CondSaludTratamto,
      DescripcionTratamto: DescripcionTratamto,
      FirmaFisio: FirmaFisio,
      RegProfesional: RegProfesional,
      FKPersona: FKPersona,
    },
    (error, results) => {
      if (error) {
        console.log(error);
      } else {
        res.redirect("/indexTratamientos");
      }
    }
  );
};

exports.update = (req, res) => {
  const id = req.body.id;
  const CondSaludTratamto = req.body.CondSaludTratamto;
  const DescripcionTratamto = req.body.DescripcionTratamto;
  const FirmaFisio = req.body.FirmaFisio;
  const RegProfesional = req.body.RegProfesional;
  const FKPersona = req.body.FKPersona;

  console.log(req.body);
  conexion.query(
    `update tratamientos
            set CondSaludTratamto = ?, DescripcionTratamto = ?, FirmaFisio = ?, RegProfesional = ?, FKPersona = ? where id = ?`,
    [
      CondSaludTratamto,
      DescripcionTratamto,
      FirmaFisio,
      RegProfesional,
      FKPersona,
      id,
    ],
    (error) => {
      console.log(id);
      if (error) {
        console.log(error);
      } else {
        res.redirect("/indexTratamientos");
      }
    }
  );
};
