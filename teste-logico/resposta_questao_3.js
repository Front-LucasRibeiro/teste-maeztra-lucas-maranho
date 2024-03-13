
// obtenho os itens em um array com spread operator 
function checkSequence(...arr) {
  let parenteses = { aberto: 0, fechado: 0 },
    colchetes = { aberto: 0, fechado: 0 },
    chaves = { aberto: 0, fechado: 0 };

  // percorro cada item fazendo a contagem se o item tem abertura e fechamento para ser valido 
  arr.map(item => {
    switch (item) {
      case '[':
        chaves.aberto = chaves.aberto + 1;
        break;
      case '{':
        colchetes.aberto = colchetes.aberto + 1;
        break;
      case '(':
        parenteses.aberto = parenteses.aberto + 1;
        break;
      case ')':
        parenteses.fechado = parenteses.fechado + 1;
        break;
      case '}':
        colchetes.fechado = colchetes.fechado + 1;
        break;
      case ']':
        chaves.fechado = chaves.fechado + 1;
        break;
    }
  });

  // verifico se todos itens tem abertura e fechamento, caso contrário a sequência é inválida 
  if (parenteses.aberto !== parenteses.fechado) {
    console.log('A sequência é inválida');

  } else if (chaves.aberto !== chaves.fechado) {
    console.log('A sequência é inválida');

  } else if (colchetes.aberto !== colchetes.fechado) {
    console.log('A sequência é inválida');

  } else {
    console.log('A sequência é válida');
  }
}


checkSequence('{', '[', '(', ')', '(', ')', '{', '}', '[', ']', ']', '{', '}', '}');
checkSequence('{', '[', '(', '(', ')', ']', '}');
checkSequence('{', '}', '[', ']', '(', ')');
checkSequence('(', '(', ')', '{', '}', '[', '[', ']', ')');
