const data = require('../data/zoo_data');

function getSchedule(zz) {
  const res = {};
  const { species } = data;
  const horas = Object.values(data.hours);
  const semana = Object.keys(data.hours);
  const mon = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };

  const week = (bb) => `Open from ${horas[bb].open}am until ${horas[bb].close}pm`;
  const segunda = () => { res.Monday = mon; return res; };
  const animalDias = (animal) => species.find((aa) => aa.name === animal).availability;
  const an = (cc) => species.filter((aa) => aa.availability.includes(cc)).map((aa) => aa.name);
  const dia = (b) => ({ exhibition: an(b), officeHour: week(semana.findIndex((aa) => aa === b)) });
  const table = (aa, bb) => { res[aa] = { officeHour: week(bb), exhibition: an(aa) }; return res; };
  const noParame = () => { semana.forEach((aa, bb) => { table(aa, bb); }); segunda(); return res; };

  if (zz === 'Monday') { return segunda(); }
  if (species.some((aa) => aa.name === zz)) { return animalDias(zz); }
  if (semana.includes(zz)) { res[zz] = dia(zz); return res; }
  return noParame();
}

module.exports = getSchedule;
