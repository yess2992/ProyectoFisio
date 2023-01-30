const conexion = require("../database/db");

//GUARDAR un REGISTRO
exports.save = (req, res) => {
  const id = req.body.id;
  const Romberg = req.body.Romberg;
  const RombergSensibilizado = req.body.RombergSensibilizado;
  const ReaccionesEquilibrio = req.body.ReaccionesEquilibrio;
  const ReaccionesProtectivas = req.body.ReaccionesProtectivas;
  const MMSSPDCirculacionAVLMusculo = req.body.MMSSPDCirculacionAVLMusculo;
  const MMIIPDCirculacionAVLMusculo = req.body.MMIIPDCirculacionAVLMusculo;
  const PulsosCirculacionAVLMusculo = req.body.PulsosCirculacionAVLMusculo;
  const EdemaCirculacionAVLMusculo = req.body.EdemaCirculacionAVLMusculo;
  const IntegridadArticularyMovilidad = req.body.IntegridadArticularyMovilidad;
  const EstadoConciencia = req.body.EstadoConciencia;
  const Orientacion = req.body.Orientacion;
  const Cognicion = req.body.Cognicion;
  const FMMSuperiores = req.body.FMMSuperiores;
  const FMMInferiores = req.body.FMMInferiores;
  const FlexMSuperiores = req.body.FlexMSuperiores;
  const FlexMInferiores = req.body.FlexMInferiores;
  const OpcionDolorMusculo = req.body.OpcionDolorMusculo;
  const DolorMusculoLocalizacion = req.body.DolorMusculoLocalizacion;
  const DolorMusculoIntensidad = req.body.DolorMusculoIntensidad;
  const DolorMusculoFactoresAgravantes =
    req.body.DolorMusculoFactoresAgravantes;
  const DolorMusculoFactoresAtenuantes =
    req.body.DolorMusculoFactoresAtenuantes;
  const DolorMusculoEvolucion = req.body.DolorMusculoEvolucion;
  const DolorMusculoFreciencia = req.body.DolorMusculoFreciencia;
  const CompletosSup = req.body.CompletosSup;
  const IncompletosSup = req.body.IncompletosSup;
  const CompletosInf = req.body.CompletosInf;
  const IncompletosInf = req.body.IncompletosInf;
  const FKPersona = req.body.FKPersona;
  console.log(req.body);
  conexion.query(
    "INSERT INTO bigfisio.musculoesqueleticos (id, Romberg, RombergSensibilizado, ReaccionesEquilibrio, ReaccionesProtectivas, MMSSPDCirculacionAVLMusculo, MMIIPDCirculacionAVLMusculo, PulsosCirculacionAVLMusculo, EdemaCirculacionAVLMusculo, IntegridadArticularyMovilidad, EstadoConciencia, Orientacion, Cognicion, FMMSuperiores, FMMInferiores, FlexMSuperiores, FlexMInferiores, OpcionDolorMusculo, DolorMusculoLocalizacion, DolorMusculoIntensidad, DolorMusculoFactoresAgravantes, DolorMusculoFactoresAtenuantes, DolorMusculoEvolucion, DolorMusculoFreciencia, CompletosSup,  IncompletosSup, CompletosInf, IncompletosInf, FKPersona) VALUES (?, ?, ?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
    [
      id,
      Romberg,
      RombergSensibilizado,
      ReaccionesEquilibrio,
      ReaccionesProtectivas,
      MMSSPDCirculacionAVLMusculo,
      MMIIPDCirculacionAVLMusculo,
      PulsosCirculacionAVLMusculo,
      EdemaCirculacionAVLMusculo,
      IntegridadArticularyMovilidad,
      EstadoConciencia,
      Orientacion,
      Cognicion,
      FMMSuperiores,
      FMMInferiores,
      FlexMSuperiores,
      FlexMInferiores,
      OpcionDolorMusculo,
      DolorMusculoLocalizacion,
      DolorMusculoIntensidad,
      DolorMusculoFactoresAgravantes,
      DolorMusculoFactoresAtenuantes,
      DolorMusculoEvolucion,
      DolorMusculoFreciencia,
      CompletosSup,
      IncompletosSup,
      CompletosInf,
      IncompletosInf,
      FKPersona,
    ],
    (error, results) => {
      if (error) {
        console.log(error);
      } else {
        res.redirect("/indexMusculo");
      }
    }
  );
};

//Update
exports.update = (req, res) => {
  const id = req.body.id;
  const Romberg = req.body.Romberg;
  const RombergSensibilizado = req.body.RombergSensibilizado;
  const ReaccionesEquilibrio = req.body.ReaccionesEquilibrio;
  const ReaccionesProtectivas = req.body.ReaccionesProtectivas;
  const MMSSPDCirculacionAVLMusculo = req.body.MMSSPDCirculacionAVLMusculo;
  const MMIIPDCirculacionAVLMusculo = req.body.MMIIPDCirculacionAVLMusculo;
  const PulsosCirculacionAVLMusculo = req.body.PulsosCirculacionAVLMusculo;
  const EdemaCirculacionAVLMusculo = req.body.EdemaCirculacionAVLMusculo;
  const IntegridadArticularyMovilidad = req.body.IntegridadArticularyMovilidad;
  const EstadoConciencia = req.body.EstadoConciencia;
  const Orientacion = req.body.Orientacion;
  const Cognicion = req.body.Cognicion;
  const FMMSuperiores = req.body.FMMSuperiores;
  const FMMInferiores = req.body.FMMInferiores;
  const FlexMSuperiores = req.body.FlexMSuperiores;
  const FlexMInferiores = req.body.FlexMInferiores;
  const OpcionDolorMusculo = req.body.OpcionDolorMusculo;
  const DolorMusculoLocalizacion = req.body.DolorMusculoLocalizacion;
  const DolorMusculoIntensidad = req.body.DolorMusculoIntensidad;
  const DolorMusculoFactoresAgravantes =
    req.body.DolorMusculoFactoresAgravantes;
  const DolorMusculoFactoresAtenuantes =
    req.body.DolorMusculoFactoresAtenuantes;
  const DolorMusculoEvolucion = req.body.DolorMusculoEvolucion;
  const DolorMusculoFreciencia = req.body.DolorMusculoFreciencia;
  const CompletosSup = req.body.CompletosSup;
  const IncompletosSup = req.body.IncompletosSup;
  const CompletosInf = req.body.CompletosInf;
  const IncompletosInf = req.body.IncompletosInf;
  const FKPersona = req.body.FKPersona;

  console.log(req.body);
  conexion.query(
    `update musculoesqueleticos
            set Romberg = ?, RombergSensibilizado = ?, ReaccionesEquilibrio = ?, ReaccionesProtectivas = ?, MMSSPDCirculacionAVLMusculo = ?, MMIIPDCirculacionAVLMusculo = ?, PulsosCirculacionAVLMusculo = ?, EdemaCirculacionAVLMusculo = ?, IntegridadArticularyMovilidad = ?, EstadoConciencia = ?, Orientacion = ?, Cognicion = ?, FMMSuperiores = ?, FMMInferiores = ?, FlexMSuperiores = ?, FlexMInferiores = ?, OpcionDolorMusculo = ?, DolorMusculoLocalizacion = ?, DolorMusculoIntensidad = ?, DolorMusculoFactoresAgravantes = ?, DolorMusculoFactoresAtenuantes = ?, DolorMusculoEvolucion = ?, DolorMusculoFreciencia = ?, CompletosSup = ?, IncompletosSup = ?, CompletosInf = ?, IncompletosInf = ?, FKPersona = ? where id = ?`,
    [
      Romberg,
      RombergSensibilizado,
      ReaccionesEquilibrio,
      ReaccionesProtectivas,
      MMSSPDCirculacionAVLMusculo,
      MMIIPDCirculacionAVLMusculo,
      PulsosCirculacionAVLMusculo,
      EdemaCirculacionAVLMusculo,
      IntegridadArticularyMovilidad,
      EstadoConciencia,
      Orientacion,
      Cognicion,
      FMMSuperiores,
      FMMInferiores,
      FlexMSuperiores,
      FlexMInferiores,
      OpcionDolorMusculo,
      DolorMusculoLocalizacion,
      DolorMusculoIntensidad,
      DolorMusculoFactoresAgravantes,
      DolorMusculoFactoresAtenuantes,
      DolorMusculoEvolucion,
      DolorMusculoFreciencia,
      CompletosSup,
      IncompletosSup,
      CompletosInf,
      IncompletosInf,
      FKPersona,
      id,
    ],
    (error) => {
      console.log(id);
      if (error) {
        console.log(error);
      } else {
        res.redirect("/indexMusculo");
      }
    }
  );
};
