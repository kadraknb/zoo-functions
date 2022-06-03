/* eslint-disable max-lines-per-function */
const data = require('../data/zoo_data');
const r = ['includesName', 'sorted', 'sex'];
const test = {
  NE: [
    { lions: ['Zena', 'Maxwell', 'Faustino', 'Dee'] },
    { giraffes: ['Gracia', 'Antone', 'Vicky', 'Clay', 'Arron', 'Bernard'] },
  ],
};
function getAnimalMap(options = {}) {
  const ress = {};
  const loc = ['NE', 'NW', 'SE', 'SW'];
  const tem = (aa) => Object.keys(options).includes(aa);
  const nomesSpe = (aa) => data.species.filter((bb) => bb.location === aa).map((cc) => cc.name);
  //   const pus = (gg) => Object.values(ress)[zz].push(gg);

  if (!tem(r[0])) { loc.forEach((aa) => { ress[aa] = nomesSpe(aa); }); }
  if (tem(r[0])) {
    loc.forEach((aa) => {
      const nomes = nomesSpe(aa).map((bb) => data.species.find((cc) => cc.name === bb)
        .residents.map((dd) => dd.name));

      ress[aa] = nomesSpe(aa).map((bb, cc) => ({ [bb]: nomes[cc] }));
    });


    
    // Object.keys(ress).forEach((xx, zz) => {
    //   const nomeAni = nomesSpe(xx).map((bb) => data.species.find((cc) => cc.name === bb).residents.map((dd) => dd.name));
    //   // console.log(nomeAni);
    //   // console.log(nomesSpe(xx));
    //   // console.log('==========');
    //   // arr.forEach((aa, yy) => { ress[yy] = nomesSpe(xx).map((bb, cc) => ({ [bb]: nomeAni[cc] })); });
    //   const seila = nomesSpe(xx).map((bb, cc) => ({ [bb]: nomeAni[cc] }));
    //   ress[xx] = seila;
    //   // console.log(seila);
    // });


    // Object.keys(ress).forEach((aa, zz) => {
    //   const nomeAni = nomesSpe(aa).map((bb) => data.species.find((cc) => cc.name === bb).residents.map((dd) => dd.name));
    //   const pus = (gg) => Object.values(ress)[zz].push(gg);
    //   nomesSpe(aa).forEach((ff, hh) => { pus({ [ff]: [nomeAni[hh]] }); });
    // });
    return ress;
  }
  // console.log(test.NE[0]);
  return ress;
}

console.log(getAnimalMap({ includesName: true }).NE[0] === test.NE[0]);
console.log(getAnimalMap({ includesName: true }).NE[0]);
console.log(getAnimalMap({ includesName: true }));
//   ],
module.exports = getAnimalMap;

// includesName: true
// "NE": Array [
//     -     Object {
//     -       "lions": Array [
//     -         "Zena",
//     -         "Maxwell",
//     -         "Faustino",
//     -         "Dee",
//     -       ],
//     -     },
//     -     Object {
//     -       "giraffes": Array [
//     -         "Gracia",
//     -         "Antone",
//     -         "Vicky",
//     -         "Clay",
//     -         "Arron",
//     -         "Bernard",
//     -       ],
//     -     },
//     +     "lions",
//     +     "giraffes",
//         ],
