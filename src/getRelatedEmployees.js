const data = require('../data/zoo_data');

function isManager(id) {
  // let seila = false;

  // data.employees.forEach((aa) => {
  //   if (aa.managers.find((bb) => bb === id) === id) {
  //     seila = true;
  //     return seila;
  //   }
  // });
  // return seila;
  return data.employees.some((aa) => aa.managers.find((bb) => bb === id) === id);
}

function getRelatedEmployees(id) {
  // data.employees.forEach((aa) => {
  //   aa.managers.filter((aa) => )
  // });
  // const nomes = data.employees.filter(isManager(id)).map((aa) => `${aa.firstName} ${aa.lastName}`);
  const nomes = data.employees.filter((aa) => aa.managers.find((bb) => bb === id))
    .map((aa) => `${aa.firstName} ${aa.lastName}`);

  if (isManager(id) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  try {
    return nomes;
  } catch (error) {
    throw error.message;
  }
}

module.exports = { isManager, getRelatedEmployees };
