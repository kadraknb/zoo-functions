const data = require('../data/zoo_data');

function getSchedule(zz) {
  const res = {};
  const horas = Object.values(data.hours);
  const semana = Object.keys(data.hours);
  const mon = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
  const week = (bb) => `Open from ${horas[bb].open}am until ${horas[bb].close}pm`;
  const segunda = () => { res.Monday = mon; return res; };
  const animalDias = (animal) => data.species.find((aa) => aa.name === animal).availability;
  const ni = (cc) => data.species.filter((aa) => aa.availability.includes(cc)).map((aa) => aa.name);
  const dia = (b) => ({ exhibition: ni(b), officeHour: week(semana.findIndex((aa) => aa === b)) });
  const table = (aa, bb) => { res[aa] = { officeHour: week(bb), exhibition: ni(aa) }; return res; };
  const sempara = () => { semana.forEach((aa, bb) => { table(aa, bb); }); segunda(); return res; };
  if (zz === 'Monday') { return segunda(); }
  if (data.species.some((aa) => aa.name === zz)) { return animalDias(zz); }
  if (semana.includes(zz)) { res[zz] = dia(zz); return res; }
  return sempara();
}

module.exports = getSchedule;
