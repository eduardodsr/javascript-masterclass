/* --------- NUMBER --------- */
var nota = 10;

// Faz o exponencial da not
let exp1 = 2 ** 3   // 8
let exp2 = 3 ** 2   // 9
console.log(exp1);
console.log(exp2);

// transforma em float
var nota = 10;

let res1 = nota.toFixed(2); // Resultado: 10.00
console.log(res1)

let res2 = nota.toPrecision(1); // Resultado: 1e+1
console.log(res2)

let res3 = nota.toString(); // Resultado: "10"
console.log(res3);
console.log(typeof res3); // string

// O método valueOf() retorna o valor primitivo do objeto especificado.
let res4 = nota.valueOf(); // Resultado: 10
console.log(res4)

// Math API
// Similar ao Java
Math.abs()      - Valor absoluto do número
Math.floor()    - Valor inteiro do número
Math.log()      - Logarítmo natural do número (base E)
Math.min()      - Retorna o menor número
Math.max()      - Retorna o maior número
Math.pow()      - Potência do número
Math.random()   - Gera número randômico
Math.round()    - Arredonda o número para o interio mais próx
Math.sin()      - Seno do número
Math.sqrt()     - Raíz quadrada do número
Math.tan()      - Tangente do número

/* --------- STRING --------- */
// São imutáveis, nao modifica o original
// Exemplo:

var nome = "Eduardo Silva"
nome = nome.replace("Silva", "Rodrigues"); // Substituir a palavra "Silva" por "Rodrigues"
console.log(nome); // Eduardo Rodrigues 

// String em JS - Tanto faz aspas simples ou duplas
var nome = "AgileCode";

nome.charAt(2);             // Retorna "i"
nome.charCodeAt(0);         // retorna a letra na tabela unicode 65
nome.concat("!");           // retorna uma nova string "AgileCode!"
nome.indexOf('e');          // retorna o indice do primeiro 'e'
nome.replace('Code', '!');  // "Agile!"
nome.split('e');            // quebra na posicao e ['Agil','Cod', ""];
nome.substring();           // Extrai a parte da string desejada
nome.toLowerCase();         // Gera uma nova string em letras minúsculas
nome.toUpperCase();         // Gera uma nova string em letras maiusculas
nome.trim();                // Remove os espaços em branco, do início e do fim da string
nome.valueOf();             // Retorna o valor primitivo da String

var nomes = "Andre; Ana; Maria; Carol";
nomes.split(";"); // Retorna ['Andre', 'Ana', 'Maria', 'Carol']
console.log(nomes);


/* --------- BOOLEAN --------- */
//
var isento = true;
var estudante = false;

let t1 = isento.toString(); // converte para string
console.log(t1) // "true"
console.log(typeof t1) // typeof string


/* ---------------------------------- */
// UNICOS FALSOS - EXEMPLOS DE DUPLA NEGACAO

console.log(!!0) // false

console.log(!!NaN) // false

console.log(!!"") // string vazia - false

console.log(!!null) // false

console.log(!!undefined) // false

/* ------------- */
var pessoa = {}
console.log(!!pessoa) // true

var carros = []
console.log(!!carros) // true


/* ----- UNDEFINED VS NULL ----- */

// Undefined é retornado caso uma prop. de um determinado objeto seja consultada e nao exista. 
// Exemplo:
var pessoa = {};
console.log(pessoa) // {}
console.log(pessoa.idade) // undefined
// 

var pessoa = {};
pessoa.nome = 'Eduardo';
pessoa.idade = 20;
console.log(pessoa.nome); // 'Eduardo'
console.log(pessoa.idade); // 20

