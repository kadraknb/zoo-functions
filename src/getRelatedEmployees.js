const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some((aa) => aa.managers.find((bb) => bb === id) === id);
}

function getRelatedEmployees(id) {
  const nomes = data.employees.filter((aa) => aa.managers.find((bb) => bb === id))
    .map((aa) => `${aa.firstName} ${aa.lastName}`);

  if (isManager(id) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  try { return nomes; } catch (error) { throw error.message; }
}

module.exports = { isManager, getRelatedEmployees };
