const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const prispecie = data.employees.find((aa) => aa.id === id).responsibleFor[0];
  const animais = data.species.find((aa) => aa.id === prispecie).residents;
  const idade = animais.map((aa) => aa.age).sort((a, b) => a - b).slice(-1)[0];
  return Object.values(animais.filter((aa) => aa.age === idade)[0]);
}

module.exports = getOldestFromFirstSpecies;
