// Variables -> const

// É possível declarar variáveis de
// diferentes formas com var, let e const

const pi = {value: 3};
pi.value // 3
pi.value = 3.141592;
pi.value // 3.141592

console.log(pi); // { value: 3.141592 }

// O tipo de variável const não torna um objeto imutável, apenas a referência