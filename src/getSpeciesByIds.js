const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const get = [];
  ids.forEach((id) => { get.push(data.species.find((aa) => aa.id === id)); });
  return get;
}

module.exports = getSpeciesByIds;
