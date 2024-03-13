
function modosFotos(val) {
  let aux = val;

  // crio um contador em ordem decrescente até chegar em 1 para calcular o número fatorial 
  for (let i = val; i > 0; i--) {

    // verifico se o numero anterior é diferente de 0 
    if (i - 1 !== 0) {

      // pego o numero de pessoas e multiplico pelo número anterior 
      aux = aux * (i - 1);
    }
  }

  console.log(`É possível tirar a foto de ${aux} modos distintos.`);
}

let numeroPessoas = 6;
modosFotos(numeroPessoas);