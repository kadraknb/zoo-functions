const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('se nao receber parametro', () => {
    const actual = handlerElephants();

    expect(actual).toBeUndefined();
  });
  it('se nao receber um string', () => {
    const expected = 'Parâmetro inválido, é necessário uma string';
    const actual = handlerElephants(3);

    expect(actual).toStrictEqual(expected);
  });
  it('verificar se passa informa;cao do helefante', () => {
    const actual = handlerElephants('popularity');
    const expected = 5;

    expect(actual).toBe(expected);
  });
  it('verificar se passa informa;cao de todos as quantidades de elefantes', () => {
    const actual = handlerElephants('count');
    const expected = 4;

    expect(actual).toStrictEqual(expected);
  });
  it('verificar se passa informa;cao de todos os nomes de elefantes', () => {
    const actual = handlerElephants('names');
    const expected = ['Ilana', 'Orval', 'Bea', 'Jefferson'];

    expect(actual).toEqual(expected);
  });
  it('verificar se passa informa;cao da mediade de idade de todos oselefantes', () => {
    const actual = handlerElephants('averageAge');
    const expected = 10.5;

    expect(actual).toBe(expected);
  });
  it('verificar se passa nulo', () => {
    const actual = handlerElephants('seila');
    expect(actual).toBeNull();
  });
});
