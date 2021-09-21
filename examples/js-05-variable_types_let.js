// Variables -> let

// É possível declarar variáveis de
// diferentes formas com var, let e const

{
    let pi = 3.141592;
    // O tipo de variável let respeita bloco, permite
    // reatribuição, mas não permite redeclaração
}
// pi // pi is not defined // ReferenceError: Cannot access 'pi' before initialization
let pi = 3;
pi // 3
pi = 3.141592;
pi // 3.141592
// let pi = 3.141592; // SyntaxError: Identifier 'pi' has already been declared

console.log(pi); // 3.141592
