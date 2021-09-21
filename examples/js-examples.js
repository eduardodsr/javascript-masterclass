// Variables - var (escopo global), let (escopo local) e 
// const (não permitindo reatribuição e nem redeclaração)

/* 
* var -> a variável var, a variável é declarada e iniciada no escopo da função,
        não respeitando blobo e permitindo a redeclaração e reatribuição

* let -> a variável let é declarada no escopo da função, 
        mas só é inicializada posteriormente, respeitando bloco e
        permitindo reatribuição, mas não permite a redeclaração

* const -> a variável const é declarada no escopo da função,
        mas só é inicializada posteriormente, respeitando bloco e
        não permitindo reatribuição nem redeclaração
 */

// examples.js - aula 05 - variáveis

// variables_1.js
var pi = 3.1415;92 
console.log(pi); // 3.141592


// variables_2.js
console.log(pi); // undefined
var pi = 3.1415; 


// variables_3.js
var pi = 3.1415; 
console.log(pi); // 3.1415
pi = 3;
console.log(pi); // 3


// variables_4.js
var pi = 3.1415; 
console.log(pi); // 3.1415
var pi = 3; // reatribuição // redeclarar uma variavel é permitido pelo JS
console.log(pi); // 3


// examples.js
if (true) {
    var pi = 3.141592;
}
console.log(pi); // 3.141592; // var - escopo global, não respeita o bloco


// let - escopo restrito ao bloco


// variables_5.js
if (true) {
    let pi = 3.1415;
    console.log(pi); // 3.1415 
}


// variables_6.js 
// redeclaração de let
let pi = 3.141592;
console.log(pi);
let pi = 3; // SyntaxError: Identifier 'pi' has already been declared


// variables_7.js
console.log(pi); // ReferenceError: Cannot access 'pi' before initialization
let pi = 3.1415; 


// variables_8.js
let pi = 3.141592;
console.log(pi); // 3.141592
pi = 3; 
console.log(pi); // 3


// variables_9.js
let pi = 3.141592;
let pi = 3; // SyntaxError: Identifier 'pi' has already been declared
console.log(pi); 


// variables_10.js
if (true) {
    let pi = 3.1415;
}
console.log(pi); // ReferenceError: pi is not defined


// variables_11.js
const pi = 3.141502; 
console.log(pi); // 3.141502


// variables_12.js
console.log(pi); // SyntaxError: Identifier 'pi' has already been declared
const pi = 3.141502; 


// variables_13.js
const PI = 3.141592;
PI = 3 // TypeError: Assignment to constant variable.
console.log(PI); 


// variables_14.js
const PI = 3.141592;
const PI = 3 // TypeError: Assignment to constant variable.
console.log(PI); 


// variables_15.js
if (true) {
    const pi = 3.141592;
}
console.log(pi); // ReferenceError: pi is not defined


/* OBS1
    Ao declarar uma variável sem var, sem o let ou sem o const 
    ela é criada no escopo global
 */

/* OBS2
    Nunca declare variáveis sem var, let e const e
    evite a utilização de var
 */

/* 
    (IIFE - Immediately Invoked Function Expression).
    (IIFE - Expressão de Função Imediatamente Invocada)
    IFE é uma função em JavaScript que é executada assim que definida.
    https://developer.mozilla.org/pt-BR/docs/Glossary/IIFE
*/


// example_IIFE_com_var.js
(function () {
    var pi = 3.141492; // pi -> escopo local
})();
console.log(pi); // ReferenceError: pi is not defined


// example_IIFE_sem_var.js
(function () {
    pi = 3.141492; // pi -> escopo global // * OBS1
})();
console.log(pi); //3.141492


// example_IIFE.js
// A função se torna uma expressão que é imediatamente executada. 
// A variável definida dentro da expressão não pode ser acessada fora de seu escopo.
(function () {
    var nome = "Eduardo";
    console.log(nome); // Eduardo
})();
// A variável nome não é acessível fora do escopo da expressão 

// example_IIFE.js
var result = (function () {
    var nome = "Eduardo";
    return nome;
})();
// Imediatamente gera a saída: 
// result; // "Eduardo"
console.log(result);

