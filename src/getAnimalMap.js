const data = require('../data/zoo_data');

const ress = {};
const loc = ['NE', 'NW', 'SE', 'SW'];
const r = ['includeNames', 'sorted', 'sex'];

const nomesSpe = (aa) => data.species.filter((bb) => bb.location === aa).map((cc) => cc.name);
const tes = (aa) => nomesSpe(aa).map((bb) => data.species.find((cc) => cc.name === bb).residents);
const nomes = (aa) => tes(aa).map((bb) => bb.map((dd) => dd.name));
const respo = (paFor, fun) => nomesSpe(paFor).map((bb, cc) => ({ [bb]: fun(paFor)[cc] }));
const resSort = (For, fun) => nomesSpe(For).map((bb, cc) => ({ [bb]: fun(For)[cc].sort() }));
const resposta = (yy, xx) => loc.forEach((aa) => { ress[aa] = yy(aa, xx); });
const tem = (gg, aa) => Object.keys(gg).includes(aa);

const sexTest = (gg) => {
  const nS = (aa) => tes(aa).map((bb) => bb.filter((dd) => dd.sex === gg.sex).map((cc) => cc.name));
  if (tem(gg, r[2]) && tem(gg, r[1])) { resposta(resSort, nS); return ress; }
  if (tem(gg, r[2])) { resposta(respo, nS); return ress; }
};
function getAnimalMap(zz = {}) {
  if (!tem(zz, r[0])) { loc.forEach((aa) => { ress[aa] = nomesSpe(aa); }); return ress; }
  if (tem(zz, r[2])) { sexTest(zz); return ress; }
  if (tem(zz, r[1])) { resposta(resSort, nomes); return ress; }
  resposta(respo, nomes); return ress;
}

module.exports = getAnimalMap;
