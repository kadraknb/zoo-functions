/* eslint-disable no-multiple-empty-lines */
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const get = [];
  ids.forEach((id) => {
    get.push(data.species.find((aa) => aa.id === id));
  });
  return get;
}


// return data.species.filter((bb, cc) => bb.id === ids[cc]);

// let filtro = (ids) => data.species.filter((bb) => bb.id === ids);


// console.log(getSpeciesByIds('01422318-ca2d-46b8-b66c-3e9e188244ed'));




module.exports = getSpeciesByIds;
