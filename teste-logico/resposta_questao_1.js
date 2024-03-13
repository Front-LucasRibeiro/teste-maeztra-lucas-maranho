
function checkOrdenation(val) {
  /** 
   * definição de variáveis com valores iniciais para checagem da ordenação
   * transformação de cada número de entrada em um array e variável auxiliar para comparação
  */
  let numeros = Array.from(String(val));
  let aux = Array.from(String(val));
  let ordemCrescente = true;
  let ordemDecrescente = true;

  //percorre cada item do array
  numeros.map((item, index) => {
    let itemNumber = parseInt(item);
    let itemAux = parseInt(aux[index + 1]);

    // verifica se o item anterior for maior que o proximo 
    if (itemNumber > itemAux) ordemCrescente = false;

    // verifica variação de 1 ou menor por item 
    if (itemAux - itemNumber !== 1 && itemAux - itemNumber !== 0 && !Number.isNaN(itemAux - itemNumber)) ordemCrescente = false;

    // verifica se o item anterior for menor que o proximo
    if (itemNumber < itemAux) ordemDecrescente = false;

    // verifica variação de 1 ou menor por item 
    if (itemAux - itemNumber !== -1 && itemAux - itemNumber !== 0 && !Number.isNaN(itemAux - itemNumber)) ordemDecrescente = false;
  });

  if (ordemCrescente) {
    console.log('Está ordenado em ordem crescente');
  } else if (ordemDecrescente) {
    console.log('Está ordenado em ordem decrescente');
  } else {
    console.log('Não está ordenado');
  }
}

let entradasTeste = [
  12345678,
  1223455678,
  876543210,
  152456457,
  12356789,
  13579,
  9765421,
  123454321,
  12222222,
  2111111,
  1599,
]

entradasTeste.map(item => {
  checkOrdenation(item);
})

checkOrdenation(8765);
