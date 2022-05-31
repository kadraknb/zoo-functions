const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const prispecie = data.employees.find((aa) => aa.id === id).responsibleFor[0];
  const priAnimal = data.species.find((aa) => aa.id === prispecie).residents;
  const idade = priAnimal.map((aa) => aa.age).sort((a, b) => a - b).slice(-1)[0];
  return Object.values(priAnimal.filter((aa) => aa.age === idade)[0]);
}

module.exports = getOldestFromFirstSpecies;
