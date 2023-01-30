const conexion = require("../database/db");

//GUARDAR un REGISTRO
exports.save = (req, res) => {
  const id = req.body.id;
  const Olfatorio = req.body.Olfatorio;
  const Optico = req.body.Optico;
  const Oculomotor = req.body.Oculomotor;
  const Troclear = req.body.Troclear;
  const Trigemino = req.body.Trigemino;
  const Abducems = req.body.Abducems;
  const Facial = req.body.Facial;
  const Vestibulococlear = req.body.Vestibulococlear;
  const Glosofaringeo = req.body.Glosofaringeo;
  const Vago = req.body.Vago;
  const Accesorio = req.body.Accesorio;
  const Hipogloso = req.body.Hipogloso;
  const MiembroSupSS = req.body.MiembroSupSS;
  const MiembroInfSS = req.body.MiembroInfSS;
  const MiembroSupSP = req.body.MiembroSupSP;
  const MiembroInfSP = req.body.MiembroInfSP;
  const CicloMarcha = req.body.CicloMarcha;
  const PeriodoP = req.body.PeriodoP;
  const PeriodoB = req.body.PeriodoB;
  const Frecuencia = req.body.Frecuencia;
  const Velocidad = req.body.Velocidad;
  const AceleraciónL = req.body.AceleraciónL;
  const Zancada = req.body.Zancada;
  const LongitudPaso = req.body.LongitudPaso;
  const AnguloPaso = req.body.AnguloPaso;
  const Color = req.body.Color;
  const PCicatrices = req.body.PCicatrices;
  const Hidratacion = req.body.Hidratacion;
  const Temperatura = req.body.Temperatura;
  const Vascularidad = req.body.Vascularidad;
  const Flexibilidad = req.body.Flexibilidad;
  const Elasticidad = req.body.Elasticidad;
  const Viscosidad = req.body.Viscosidad;
  const Volumen = req.body.Volumen;
  const OpcionDolorNeuro = req.body.OpcionDolorNeuro;
  const DolorNeuroLocalizacion = req.body.DolorNeuroLocalizacion;
  const DolorNeuroIntensidad = req.body.DolorNeuroIntensidad;
  const DolorNeuroFactoresAgravantes = req.body.DolorNeuroFactoresAgravantes;
  const DolorNeuroFactoresAtenuantes = req.body.DolorNeuroFactoresAtenuantes;
  const DolorNeuroEvolucion = req.body.DolorNeuroEvolucion;
  const DolorNeuroFrecuencia = req.body.DolorNeuroFrecuencia;
  const MiembrosSupRo = req.body.MiembrosSupRo;
  const MiembrosInfRo = req.body.MiembrosInfRo;
  const MiembrosSupTm = req.body.MiembrosSupTm;
  const MiembrosInfTm = req.body.MiembrosInfTm;
  const FKPersona = req.body.FKPersona;

  console.log(req.body);
  conexion.query(
    "INSERT INTO bigfisio.neurorehabilitacions (id, Olfatorio, Optico, Oculomotor, Troclear, Trigemino, Abducems, Facial, Vestibulococlear, Glosofaringeo, Vago, Accesorio, Hipogloso, MiembroSupSS, MiembroInfSS, MiembroSupSP, MiembroInfSP, CicloMarcha, PeriodoP, PeriodoB, Frecuencia, Velocidad, AceleraciónL, Zancada, LongitudPaso, AnguloPaso, Color, PCicatrices, Hidratacion, Temperatura, Vascularidad, Flexibilidad, Elasticidad, Viscosidad, Volumen, OpcionDolorNeuro, DolorNeuroLocalizacion, DolorNeuroIntensidad, DolorNeuroFactoresAgravantes, DolorNeuroFactoresAtenuantes, DolorNeuroEvolucion, DolorNeuroFrecuencia, MiembrosSupRo, MiembrosInfRo, MiembrosSupTm, MiembrosInfTm, FKPersona) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
    [
      id,
      Olfatorio,
      Optico,
      Oculomotor,
      Troclear,
      Trigemino,
      Abducems,
      Facial,
      Vestibulococlear,
      Glosofaringeo,
      Vago,
      Accesorio,
      Hipogloso,
      MiembroSupSS,
      MiembroInfSS,
      MiembroSupSP,
      MiembroInfSP,
      CicloMarcha,
      PeriodoP,
      PeriodoB,
      Frecuencia,
      Velocidad,
      AceleraciónL,
      Zancada,
      LongitudPaso,
      AnguloPaso,
      Color,
      PCicatrices,
      Hidratacion,
      Temperatura,
      Vascularidad,
      Flexibilidad,
      Elasticidad,
      Viscosidad,
      Volumen,
      OpcionDolorNeuro,
      DolorNeuroLocalizacion,
      DolorNeuroIntensidad,
      DolorNeuroFactoresAgravantes,
      DolorNeuroFactoresAtenuantes,
      DolorNeuroEvolucion,
      DolorNeuroFrecuencia,
      MiembrosSupRo,
      MiembrosInfRo,
      MiembrosSupTm,
      MiembrosInfTm,
      FKPersona,
    ],
    (error, results) => {
      if (error) {
        console.log(error);
      } else {
        res.redirect("/indexNeuro");
      }
    }
  );
};

//Update

exports.update = (req, res) => {
  const id = req.body.id;
  const Olfatorio = req.body.Olfatorio;
  const Optico = req.body.Optico;
  const Oculomotor = req.body.Oculomotor;
  const Troclear = req.body.Troclear;
  const Trigemino = req.body.Trigemino;
  const Abducems = req.body.Abducems;
  const Facial = req.body.Facial;
  const Vestibulococlear = req.body.Vestibulococlear;
  const Glosofaringeo = req.body.Glosofaringeo;
  const Vago = req.body.Vago;
  const Accesorio = req.body.Accesorio;
  const Hipogloso = req.body.Hipogloso;
  const MiembroSupSS = req.body.MiembroSupSS;
  const MiembroInfSS = req.body.MiembroInfSS;
  const MiembroSupSP = req.body.MiembroSupSP;
  const MiembroInfSP = req.body.MiembroInfSP;
  const CicloMarcha = req.body.CicloMarcha;
  const PeriodoP = req.body.PeriodoP;
  const PeriodoB = req.body.PeriodoB;
  const Frecuencia = req.body.Frecuencia;
  const Velocidad = req.body.Velocidad;
  const AceleraciónL = req.body.AceleraciónL;
  const Zancada = req.body.Zancada;
  const LongitudPaso = req.body.LongitudPaso;
  const AnguloPaso = req.body.AnguloPaso;
  const Color = req.body.Color;
  const PCicatrices = req.body.PCicatrices;
  const Hidratacion = req.body.Hidratacion;
  const Temperatura = req.body.Temperatura;
  const Vascularidad = req.body.Vascularidad;
  const Flexibilidad = req.body.Flexibilidad;
  const Elasticidad = req.body.Elasticidad;
  const Viscosidad = req.body.Viscosidad;
  const Volumen = req.body.Volumen;
  const OpcionDolorNeuro = req.body.OpcionDolorNeuro;
  const DolorNeuroLocalizacion = req.body.DolorNeuroLocalizacion;
  const DolorNeuroIntensidad = req.body.DolorNeuroIntensidad;
  const DolorNeuroFactoresAgravantes = req.body.DolorNeuroFactoresAgravantes;
  const DolorNeuroFactoresAtenuantes = req.body.DolorNeuroFactoresAtenuantes;
  const DolorNeuroEvolucion = req.body.DolorNeuroEvolucion;
  const DolorNeuroFrecuencia = req.body.DolorNeuroFrecuencia;
  const MiembrosSupRo = req.body.MiembrosSupRo;
  const MiembrosInfRo = req.body.MiembrosInfRo;
  const MiembrosSupTm = req.body.MiembrosSupTm;
  const MiembrosInfTm = req.body.MiembrosInfTm;
  const FKPersona = req.body.FKPersona;

  console.log(req.body);
  conexion.query(
    `update neurorehabilitacions
            set Olfatorio = ?, Optico = ?, Oculomotor = ?, Troclear = ?, Trigemino = ?, Abducems = ?, Facial = ?, Vestibulococlear = ?, Glosofaringeo = ?, Vago = ?, Accesorio = ?, Hipogloso = ?, MiembroSupSS = ?, MiembroInfSS = ?, MiembroSupSP = ?, MiembroInfSP = ?, CicloMarcha = ?, PeriodoP = ?, PeriodoB = ?, Frecuencia = ?, Velocidad = ?, AceleraciónL = ?, Zancada = ?, LongitudPaso = ?, AnguloPaso = ?, Color = ?, PCicatrices= ?, Hidratacion = ?, Temperatura = ?, Vascularidad = ?, Flexibilidad = ?, Elasticidad = ?, Viscosidad = ?, Volumen = ? , OpcionDolorNeuro = ? , DolorNeuroLocalizacion = ? , DolorNeuroIntensidad = ? , DolorNeuroFactoresAgravantes = ? , DolorNeuroFactoresAtenuantes = ? , DolorNeuroEvolucion = ? , DolorNeuroFrecuencia = ? , MiembrosSupRo = ? , MiembrosInfRo = ? , MiembrosSupTm = ? , DolorNeuroEvolucion = ? , FKPersona = ? where id = ?`,
    [
      Olfatorio,
      Optico,
      Oculomotor,
      Troclear,
      Trigemino,
      Abducems,
      Facial,
      Vestibulococlear,
      Glosofaringeo,
      Vago,
      Accesorio,
      Hipogloso,
      MiembroSupSS,
      MiembroInfSS,
      MiembroSupSP,
      MiembroInfSP,
      CicloMarcha,
      PeriodoP,
      PeriodoB,
      Frecuencia,
      Velocidad,
      AceleraciónL,
      Zancada,
      LongitudPaso,
      AnguloPaso,
      Color,
      PCicatrices,
      Hidratacion,
      Temperatura,
      Vascularidad,
      Flexibilidad,
      Elasticidad,
      Viscosidad,
      Volumen,
      OpcionDolorNeuro,
      DolorNeuroLocalizacion,
      DolorNeuroIntensidad,
      DolorNeuroFactoresAgravantes,
      DolorNeuroFactoresAtenuantes,
      DolorNeuroEvolucion,
      DolorNeuroFrecuencia,
      MiembrosSupRo,
      MiembrosInfRo,
      MiembrosSupTm,
      MiembrosInfTm,
      FKPersona,
      id,
    ],
    (error) => {
      console.log(id);
      if (error) {
        console.log(error);
      } else {
        res.redirect("/indexNeuro");
      }
    }
  );
};
