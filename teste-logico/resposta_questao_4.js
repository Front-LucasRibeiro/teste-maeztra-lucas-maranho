
function checksPeopleWorking(arr) {
  let anos = [];
  let anosComMaisPessoas = [];
  let aux = 0;

  // verifica cada item do array de range de anos de cada pessoa 
  arr.map( item => {
    for(let i = item[0]; i <= item[1]; i++){

      // cria um array com os anos trabalhados 
      let ano = i;
      anos.push(ano)
    }
  });

  // verifica a quantidade de cada ano que se repete 
  let pessoasPorAno = anos.reduce(function (obj, item) {
    obj[item] = (obj[item] || 0) + 1;
    return obj;
  }, {});


  // verifica maior quantidade de pessoas que trabalharam em um ano 
  Object.keys(pessoasPorAno).forEach(function (item) {
    if(pessoasPorAno[item] > aux){
      aux = pessoasPorAno[item];
    }
  });

  Object.keys(pessoasPorAno).forEach(function (item) {
    if (pessoasPorAno[item] == aux) {
      anosComMaisPessoas.push(item)
    }
  });
  
  console.log(`O(s) ano(s) que mais pessoa(s) trabalharam foi: \n\n ${anosComMaisPessoas} \n\n com total de ${aux} pessoas trabalhando em cada ano.`);
}

checksPeopleWorking([
   [1945, 2008], [1938, 1999], [2000, 2021], [2000, 2005],[1960,2008]
]);
