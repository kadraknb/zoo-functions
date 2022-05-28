const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const seila = data.species.find((aa) => aa.name === animal);
  return seila.residents.every((aa) => aa.age >= age);
}

module.exports = getAnimalsOlderThan;
