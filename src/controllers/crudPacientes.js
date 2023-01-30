const conexion = require("../database/db");

//GUARDAR un REGISTRO
exports.save = (req, res) => {
  const id = req.body.id;
  const Fecha = req.body.Fecha;
  const Hora = req.body.Hora;
  const NombreCompleto = req.body.NombreCompleto;
  const TipoDocumento = req.body.TipoDocumento;
  const NumIdentificacion = req.body.NumIdentificacion;
  const Direccion = req.body.Direccion;
  const FechaNacimiento = req.body.FechaNacimiento;
  const Telefono = req.body.Telefono;
  const Edad = req.body.Edad;
  const Sexo = req.body.Sexo;
  const Ocupacion = req.body.Ocupacion;
  const CondicionSalud = req.body.CondicionSalud;
  const Eps = req.body.Eps;
  const NombreCategoria = req.body.NombreCategoria;
  const AntFarmacologicos = req.body.AntFarmacologicos;
  const AntPersonales = req.body.AntPersonales;
  const AntFamiliares = req.body.AntFamiliares;
  const FKRol = 2;

  conexion.query(
    "REPLACE INTO personas SET ?",
    {
      id: id,
      Fecha: Fecha,
      Hora: Hora,
      NombreCompleto: NombreCompleto,
      TipoDocumento: TipoDocumento,
      NumIdentificacion: NumIdentificacion,
      Direccion: Direccion,
      FechaNacimiento: FechaNacimiento,
      Telefono: Telefono,
      Edad: Edad,
      Sexo: Sexo,
      Ocupacion: Ocupacion,
      CondicionSalud: CondicionSalud,
      Eps: Eps,
      NombreCategoria: NombreCategoria,
      AntFarmacologicos: AntFarmacologicos,
      AntPersonales: AntPersonales,
      AntFamiliares: AntFamiliares,
      FKRol: FKRol,
    },
    (error, results) => {
      if (error) {
        console.log(error);
      } else {
        res.redirect("/indexPacientes");
      }
    }
  );
};

exports.update = (req, res) => {
  const id = req.body.id;
  const Fecha = req.body.Fecha;
  const Hora = req.body.Hora;
  const NombreCompleto = req.body.NombreCompleto;
  const TipoDocumento = req.body.TipoDocumento;
  const NumIdentificacion = req.body.NumIdentificacion;
  const Direccion = req.body.Direccion;
  const FechaNacimiento = req.body.FechaNacimiento;
  const Telefono = req.body.Telefono;
  const Edad = req.body.Edad;
  const Sexo = req.body.Sexo;
  const Ocupacion = req.body.Ocupacion;
  const CondicionSalud = req.body.CondicionSalud;
  const Eps = req.body.Eps;
  const NombreCategoria = req.body.NombreCategoria;
  const AntFarmacologicos = req.body.AntFarmacologicos;
  const AntPersonales = req.body.AntPersonales;
  const AntFamiliares = req.body.AntFamiliares;
  const FKRol = 2;

  conexion.query(
    "UPDATE personas SET ? WHERE id = ?",
    [
      {
        Fecha: Fecha,
        Hora: Hora,
        NombreCompleto: NombreCompleto,
        TipoDocumento: TipoDocumento,
        NumIdentificacion: NumIdentificacion,
        Direccion: Direccion,
        FechaNacimiento: FechaNacimiento,
        Telefono: Telefono,
        Edad: Edad,
        Sexo: Sexo,
        Ocupacion: Ocupacion,
        CondicionSalud: CondicionSalud,
        Eps: Eps,
        NombreCategoria: NombreCategoria,
        AntFarmacologicos: AntFarmacologicos,
        AntPersonales: AntPersonales,
        AntFamiliares: AntFamiliares,
        FKRol: FKRol,
      },
      id,
    ],
    (error, results) => {
      console.log(id);
      if (error) {
        console.log(error);
      } else {
        res.redirect("/indexPacientes");
      }
    }
  );
};
