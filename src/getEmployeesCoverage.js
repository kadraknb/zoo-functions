const data = require('../data/zoo_data');

function getEmployeesCoverage(zz) {
  const sei = (yy) => yy.map((xx) => {
    const noLo = [[], []];
    const animal = (aa) => aa.responsibleFor.map((bb) => data.species.find((cc) => bb === cc.id));
    const res = (id, fullName, species, locations) => ({ id, fullName, species, locations });
    animal(xx).forEach((aa) => { noLo[0].push(aa.name); noLo[1].push(aa.location); });
    return res(xx.id, `${xx.firstName} ${xx.lastName}`, noLo[0], noLo[1]);
  });
  if (zz !== undefined) {
    const zzArr = (aa) => Object.values(aa)[0];
    const ele = data.employees.filter((aa) => Object.values((aa)).slice(0, 3).includes(zzArr(zz)));
    if (ele[0] === undefined) { throw new Error('Informações inválidas'); }
    try { return sei(ele)[0]; } catch (error) { throw error.message; }
  }
  return sei(data.employees);
}

module.exports = getEmployeesCoverage;
