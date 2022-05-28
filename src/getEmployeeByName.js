const data = require('../data/zoo_data');

function getEmployeeByName(nome = 'aa') {
  const seila = data.employees.find((aa) => aa.firstName === nome || aa.lastName === nome);
  return nome !== 'aa' ? seila : {};
}

module.exports = getEmployeeByName;
