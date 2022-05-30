const data = require('../data/zoo_data');

function countEntrants(aa) {
  const chi = aa.filter((bb) => bb.age < 6).length;
  const sen = aa.filter((bb) => bb.age > 49).length;
  const adu = aa.filter((bb) => bb.age > 6 && bb.age < 49).length;
  return { child: chi, adult: adu, senior: sen };
}

function calculateEntry(aa = {}) {
  if (typeof aa[0] === 'object') {
    let valor = 0;
    const per = Object.values(data.prices);
    const preço = [per[2], per[0], per[1]];
    Object.values(countEntrants(aa)).forEach((bb, cc) => { valor += bb * preço[cc]; });
    return valor;
  }
  return 0;
}
module.exports = { calculateEntry, countEntrants };
