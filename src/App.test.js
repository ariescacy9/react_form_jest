
const {suma, resta, multiplicacion, division} = require("./components/Funciones");

/*
const { CountExpenses }  = require('./components/CountExpenses');
describe( "gastos primera renderizada",() =>{
  xit ("un digito" , () => {
    expect(CountExpenses()).toBe(0)
  });
});
*/

describe( "sumas ",() =>{
  it ("un digito" , () => {
    expect(suma(5,6)).toBe(11)
  });
  it ("dos digito" , () => {
    expect(suma(13,23)).toBe(36)
  });
});

describe( "resta ",() =>{
  it ("un digito" , () => {
    expect(resta(8,4)).toBe(4)
  });
  it ("dos digito" , () => {
    expect(resta(65,24)).toBe(41)
  });
});

describe( "multiplicacion ",() =>{
  it ("un digito" , () => {
    expect(multiplicacion(5,6)).toBe(30)
  });
  it ("dos digito" , () => {
    expect(multiplicacion(23,10)).toBe(230)
  });
});

describe( "division ",() =>{
  it ("un digito" , () => {
    expect(division(8,2)).toBe(4)
  });
  it ("dos digito" , () => {
    expect(division(36,12)).toBe(3)
  });
});