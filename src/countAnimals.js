const data = require('../data/zoo_data');

function countAnimals(animal) {
  const animais = {};
  const anima = () => data.species.find((aa) => aa.name === animal.specie);
  const quantidade = () => anima().residents.length;
  const quantidadeSex = () => anima().residents.filter((aa) => aa.sex === animal.sex).length;
  if (animal !== undefined) { return animal.sex !== undefined ? quantidadeSex() : quantidade(); }
  data.species.forEach((aa) => { animais[aa.name] = aa.residents.length; });
  return animais;
}
module.exports = countAnimals;
