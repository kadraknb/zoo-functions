const data = require('../data/zoo_data');

function countAnimals(animal) {
  let animais = {};
  // Object.keys.length
  const anima = () => data.species.find((aa) => aa.name === animal.specie);
  const quantidade = () => anima().residents.length;
  const quantidadeSex = () => anima().residents.filter((aa) => aa.sex === animal.sex).length;
  if (animal !== undefined) {
    animais = animal.sex !== undefined ? quantidadeSex() : quantidade();
  } else {
    data.species.forEach((aa) => { animais[aa.name] = aa.residents.length; });
  }
  return animais;
}
// console.log(countAnimals({ specie: 'elephants', sex: 'male' }));
// console.log(countAnimals({ specie: 'penguins' }));
console.log(countAnimals({ specie: 'bears', sex: 'female' }));
module.exports = countAnimals;
