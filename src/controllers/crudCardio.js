const conexion = require("../database/db");

//GUARDAR un REGISTRO
exports.save = (req, res) => {
  const id = req.body.id;
  const Temperatura = req.body.Temperatura;
  const FrecuenciaCardiaca = req.body.FrecuenciaCardiaca;
  const TensionArterial = req.body.TensionArterial;
  const FrecuenciaRespiratoria = req.body.FrecuenciaRespiratoria;
  const SaturacionOxigeno = req.body.SaturacionOxigeno;
  const Simetrico = req.body.Simetrico;
  const Asimetrico = req.body.Asimetrico;
  const AmplitudRespiratoria = req.body.AmplitudRespiratoria;
  const PatronRespiratorio = req.body.PatronRespiratorio;
  const Tos = req.body.Tos;
  const Movilidad = req.body.Movilidad;
  const TipoTos = req.body.TipoTos;
  const Esputo = req.body.Esputo;
  const TipoEsputo = req.body.TipoEsputo;
  const SignosDifRespiratoria = req.body.SignosDifRespiratoria;
  const FremitoBronqueal = req.body.FremitoBronqueal;
  const RuidosRespiratorios = req.body.RuidosRespiratorios;
  const RuidosCardiacos = req.body.RuidosCardiacos;
  const Ortesis = req.body.Ortesis;
  const AsistenciaPosicionamiento = req.body.AsistenciaPosicionamiento;
  const Tecnologia = req.body.Tecnologia;
  const AyudasDesplazamiento = req.body.AyudasDesplazamiento;
  const OpcionDolorCardio = req.body.OpcionDolorCardio;
  const DolorCardioLocalizacion = req.body.DolorCardioLocalizacion;
  const DolorCardioIntensidad = req.body.DolorCardioIntensidad;
  const DolorCardioFactoresAgravantes = req.body.DolorCardioFactoresAgravantes;
  const DolorCardioFactoresAtenuantes = req.body.DolorCardioFactoresAtenuantes;
  const DolorCardioEvolucion = req.body.DolorCardioEvolucion;
  const DolorCardioFrecuencia = req.body.DolorCardioFrecuencia;
  const MMSSPDCirculacionAVLCardio = req.body.MMSSPDCirculacionAVLCardio;
  const MMIIPDCirculacionAVLCardio = req.body.MMIIPDCirculacionAVLCardio;
  const PulsosCirculacionAVLCardio = req.body.PulsosCirculacionAVLCardio;
  const EdemaCirculacionAVLCardio = req.body.EdemaCirculacionAVLCardio;
  const FKPersona = req.body.FKPersona;
  console.log(req.body);
  conexion.query(
    "INSERT INTO bigfisio.cardiorespiratorios (id, Temperatura, FrecuenciaCardiaca, TensionArterial, FrecuenciaRespiratoria, SaturacionOxigeno, Simetrico, Asimetrico, AmplitudRespiratoria, PatronRespiratorio, Tos, Esputo, SignosDifRespiratoria, FremitoBronqueal, RuidosRespiratorios, RuidosCardiacos, Ortesis, AsistenciaPosicionamiento, Tecnologia, AyudasDesplazamiento, OpcionDolorCardio, DolorCardioLocalizacion, DolorCardioIntensidad, DolorCardioFactoresAgravantes, DolorCardioFactoresAtenuantes, DolorCardioEvolucion, DolorCardioFrecuencia, MMSSPDCirculacionAVLCardio, MMIIPDCirculacionAVLCardio, PulsosCirculacionAVLCardio, EdemaCirculacionAVLCardio, FKPersona, Movilidad, TipoTos, TipoEsputo) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [
      id,
      Temperatura,
      FrecuenciaCardiaca,
      TensionArterial,
      FrecuenciaRespiratoria,
      SaturacionOxigeno,
      Simetrico,
      Asimetrico,
      AmplitudRespiratoria,
      PatronRespiratorio,
      Tos,
      Esputo,
      SignosDifRespiratoria,
      FremitoBronqueal,
      RuidosRespiratorios,
      RuidosCardiacos,
      Ortesis,
      AsistenciaPosicionamiento,
      Tecnologia,
      AyudasDesplazamiento,
      OpcionDolorCardio,
      DolorCardioLocalizacion,
      DolorCardioIntensidad,
      DolorCardioFactoresAgravantes,
      DolorCardioFactoresAtenuantes,
      DolorCardioEvolucion,
      DolorCardioFrecuencia,
      MMSSPDCirculacionAVLCardio,
      MMIIPDCirculacionAVLCardio,
      PulsosCirculacionAVLCardio,
      EdemaCirculacionAVLCardio,
      FKPersona,
      Movilidad,
      TipoTos,
      TipoEsputo,
    ],
    (error, results) => {
      if (error) {
        console.log(error);
      } else {
        res.redirect("/indexCardio");
      }
    }
  );
};

exports.update = (req, res) => {
  const id = req.body.id;
  const Temperatura = req.body.Temperatura;
  const FrecuenciaCardiaca = req.body.FrecuenciaCardiaca;
  const TensionArterial = req.body.TensionArterial;
  const FrecuenciaRespiratoria = req.body.FrecuenciaRespiratoria;
  const SaturacionOxigeno = req.body.SaturacionOxigeno;
  const Simetrico = req.body.Simetrico;
  const Asimetrico = req.body.Asimetrico;
  const AmplitudRespiratoria = req.body.AmplitudRespiratoria;
  const PatronRespiratorio = req.body.PatronRespiratorio;
  const Tos = req.body.Tos;
  const Movilidad = req.body.Movilidad;
  const TipoTos = req.body.TipoTos;
  const Esputo = req.body.Esputo;
  const TipoEsputo = req.body.TipoEsputo;
  const SignosDifRespiratoria = req.body.SignosDifRespiratoria;
  const FremitoBronqueal = req.body.FremitoBronqueal;
  const RuidosRespiratorios = req.body.RuidosRespiratorios;
  const RuidosCardiacos = req.body.RuidosCardiacos;
  const Ortesis = req.body.Ortesis;
  const AsistenciaPosicionamiento = req.body.AsistenciaPosicionamiento;
  const Tecnologia = req.body.Tecnologia;
  const AyudasDesplazamiento = req.body.AyudasDesplazamiento;
  const OpcionDolorCardio = req.body.OpcionDolorCardio;
  const DolorCardioLocalizacion = req.body.DolorCardioLocalizacion;
  const DolorCardioIntensidad = req.body.DolorCardioIntensidad;
  const DolorCardioFactoresAgravantes = req.body.DolorCardioFactoresAgravantes;
  const DolorCardioFactoresAtenuantes = req.body.DolorCardioFactoresAtenuantes;
  const DolorCardioEvolucion = req.body.DolorCardioEvolucion;
  const DolorCardioFrecuencia = req.body.DolorCardioFrecuencia;
  const MMSSPDCirculacionAVLCardio = req.body.MMSSPDCirculacionAVLCardio;
  const MMIIPDCirculacionAVLCardio = req.body.MMIIPDCirculacionAVLCardio;
  const PulsosCirculacionAVLCardio = req.body.PulsosCirculacionAVLCardio;
  const EdemaCirculacionAVLCardio = req.body.EdemaCirculacionAVLCardio;
  const FKPersona = req.body.FKPersona;

  console.log(req.body);
  conexion.query(
    `update cardiorespiratorios
            set Temperatura = ?, FrecuenciaCardiaca = ?, TensionArterial = ?, FrecuenciaRespiratoria = ?, SaturacionOxigeno = ?, Simetrico = ?, Asimetrico = ?, AmplitudRespiratoria = ?, PatronRespiratorio = ?, Tos = ?, Esputo = ?, SignosDifRespiratoria = ?, FremitoBronqueal = ?, RuidosRespiratorios = ?, RuidosCardiacos = ?, Ortesis = ?, AsistenciaPosicionamiento = ?, Tecnologia = ?, AyudasDesplazamiento = ?, OpcionDolorCardio = ?, DolorCardioLocalizacion = ?, DolorCardioIntensidad = ?, DolorCardioFactoresAgravantes = ?, DolorCardioFactoresAtenuantes = ?, DolorCardioEvolucion = ?, DolorCardioFrecuencia = ?, MMSSPDCirculacionAVLCardio = ?, MMIIPDCirculacionAVLCardio = ?,PulsosCirculacionAVLCardio = ?, EdemaCirculacionAVLCardio = ?, Movilidad = ?, TipoTos = ?, TipoEsputo = ? , FKPersona = ? where id = ?`,
    [
      Temperatura,
      FrecuenciaCardiaca,
      TensionArterial,
      FrecuenciaRespiratoria,
      SaturacionOxigeno,
      Simetrico,
      Asimetrico,
      AmplitudRespiratoria,
      PatronRespiratorio,
      Tos,
      Esputo,
      SignosDifRespiratoria,
      FremitoBronqueal,
      RuidosRespiratorios,
      RuidosCardiacos,
      Ortesis,
      AsistenciaPosicionamiento,
      Tecnologia,
      AyudasDesplazamiento,
      OpcionDolorCardio,
      DolorCardioLocalizacion,
      DolorCardioIntensidad,
      DolorCardioFactoresAgravantes,
      DolorCardioFactoresAtenuantes,
      DolorCardioEvolucion,
      DolorCardioFrecuencia,
      MMSSPDCirculacionAVLCardio,
      MMIIPDCirculacionAVLCardio,
      PulsosCirculacionAVLCardio,
      EdemaCirculacionAVLCardio,
      Movilidad,
      TipoTos,
      TipoEsputo,
      FKPersona,
      id,
    ],
    (error) => {
      console.log(id);
      if (error) {
        console.log(error);
      } else {
        res.redirect("/indexCardio");
      }
    }
  );
};
