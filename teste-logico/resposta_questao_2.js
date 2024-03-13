
function checkDuplicates(arrayItens) {
  let itensDuplicados = [];

  // cria objeto com quantidade de cada item
  arrayItens.reduce(function (obj, item) {
    // verifica se a chave do objeto que esta sendo construido existe, caso existe faz a inclementação
    obj[item] = (obj[item] || 0) + 1;
    
    // verifica se o item tem mais de 1 ocorrencia
    if (obj[item] > 1) {
      itensDuplicados.push(item);
    }

    return obj;
  }, {});

  return itensDuplicados;
}

let arrayItensDuplicados = checkDuplicates([4, 5, 44, 98, 4, 5, 6, 7]);
console.log(arrayItensDuplicados);