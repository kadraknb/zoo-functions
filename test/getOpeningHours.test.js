const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('se sem parametro retorna um tabela com os horarios ', () => {
    const actual = getOpeningHours();
    const expected = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };

    expect(actual).toEqual(expected);
  });
  it('se o primeiro parametro for segunda o retorno vai ser um erro ', () => {
    const actual = getOpeningHours('Monday', '09:00-AM');
    const expected = 'The zoo is closed';

    expect(actual).toBe(expected);
  });
  it('se for pasado um horai que esta aberto, retorna um mensagem com o aviso', () => {
    const actual = getOpeningHours('Tuesday', '09:00-AM');
    const expected = 'The zoo is open';

    expect(actual).toBe(expected);
  });
  it('se for pasado um horai que esta fechado, retorna um mensagem com o aviso', () => {
    const actual = getOpeningHours('Wednesday', '09:00-PM');
    const expected = 'The zoo is closed';

    expect(actual).toBe(expected);
  });
  it('se o segundo parametro estiver com os minutos fora do padrao, retornara um erro', () => {
    const actual = () => getOpeningHours('Wednesday', '09:0g-PM');
    const expected = 'The minutes should represent a number';

    expect(actual).toThrow(expected);
  });
  it('se o segundo parametro estiver com as horas fora do padrao, retornara um erro', () => {
    const actual = () => getOpeningHours('Wednesday', '0g:00-PM');
    const expected = 'The hour should represent a number';

    expect(actual).toThrow(expected);
  });
  it('se o segundo parametro estiver fora do padrao, retornara um erro', () => {
    const actual = () => getOpeningHours('Monday', '09:00-bM');
    const expected = 'The abbreviation must be \'AM\' or \'PM\'';

    expect(actual).toThrow(expected);
  });
  it('se o segundo parametro estiver com a hora maior que 12, retornara um erro', () => {
    const actual = () => getOpeningHours('Monday', '13:00-PM');
    const expected = 'The hour must be between 0 and 12';

    expect(actual).toThrow(expected);
  });
  it('se o segundo parametro estiver com os minutos maior que 60, retornara um erro', () => {
    const actual = () => getOpeningHours('Monday', '10:70-PM');
    const expected = 'The minutes must be between 0 and 59';

    expect(actual).toThrow(expected);
  });
  it('se o primeiro parametro nao estiver com um dia da semana, retornara um erro', () => {
    const actual = () => getOpeningHours('seila', '10:00-PM');
    const expected = 'The day must be valid. Example: Monday';

    expect(actual).toThrow(expected);
  });
});
