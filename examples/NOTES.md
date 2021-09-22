# NOTES

<hr>

## Variables (Variaveis)

**Variaveis** 
* **VAR** x **LET** e **CONST**
- **var** (escopo global) - escopo fora do bloco.
- **let** (escopo local) - escopo restrito ao bloco.

-  **const** (não permitindo reatribuição e nem redeclaração) - constante.

* **var** 
    - a variável **var** é declarada e iniciada no escopo da função, não respeitando blobo e permitindo a redeclaração e reatribuição.

* **let** 
    - a variável **let** é declarada no escopo da função, mas só é inicializada posteriormente, respeitando bloco e permitindo reatribuição, mas não permite a redeclaração.

* **const**
    - a variável **const** é declarada no escopo da função, mas só é inicializada posteriormente, respeitando bloco e não permitindo reatribuição nem redeclaração.

<br>

* **OBS 1**:
    - Ao declarar uma variável sem var, sem o let ou sem o const ela é criada no escopo global.

* **OBS 2**:
    - Nunca declare variáveis sem var, let e const e evite a utilização de var.

<br>

* **IIFE** 
    - (IIFE - Immediately Invoked Function Expression).
    - (IIFE - Expressão de Função Imediatamente Invocada)
    - IIFE - é uma função em JavaScript que é executada assim que definida.
    - A função se torna uma expressão que é imediatamente executada. 
    https://developer.mozilla.org/pt-BR/docs/Glossary/IIFE

<hr>

## Data Types (Tipos de Dados)

Os tipos de dados na lingyagem JavaScript se dividem em **'primitivos'** e **'objetos'**.
    
Os primitivos são imutáveis, ou seja, ao longo do tempo **seu valor não é alterado**.

```js

// data_types

// typeof informa qual o tipo de dado

console.log(typeof 10); 
console.log(typeof "JavaScript");
console.log(typeof true);
console.log(typeof Symbol("iterator"));
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof undefined);

// Node.js

typeof 10; // number
typeof "JavaScript"; // string
typeof true; // boolean
typeof Symbol("iterator"); // symbol
typeof null; // object
typeof undefined; // undefined

// Terminal 

(10).toFixed(2); // '10.00'
('JavaScript').replace('a', '4'); // 'J4v4script'
(true).toString(); // 'true'
(Symbol("iterator")).toString(); // 'Symbol("iterator")

```

Os objetos são valores que representam uma refefência em 
**mémoria** que pode ser alterada.

```js

typeof function sum(a, b) {return a + b}; // function
typeof {name: "Linux Trovald"}; //object
typeof [1,2,3,4,5,6,7,8,9]; // object
typeof /[a-zA-Z_$]+/; // object
typeof (new Date()); // object

```

* **OBS**:
    - Cuidado, não confunda os operadores **typeof** e **instanceof**.