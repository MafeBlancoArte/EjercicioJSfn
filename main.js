
const sumarNumeros = function(numero1, numero2) {
    return numero1 + numero2;
};
//Ejemplo1 uso de la function
const resultado = sumarNumeros(12, 23);
console.log(resultado);

// Ejemplo2function resta num

const restarNumeros = function(numero1, numero2) {
    return numero1 - numero2;
};
const result = restarNumeros(78, 30);
console.log(result);

// Ejemplo3 uso function multipli 
const multiNumeros = function(numero1, numero2){
    return numero1 * numero2;
};
const resultproducto = multiNumeros(2500, 250);
console.log(resultproducto);

// Ejemplo4 uso function division
const divNumeros = function(numero1, numero2){
    return numero1 / numero2;
};
const resultdivproducto = divNumeros(2500, 250);
console.log(resultdivproducto);

// Ejemplo5 uso function exponencial
const exponencialNumeros = function(numero1, numero2){
    return numero1 ^ numero2;
};
const resultExponen = exponencialNumeros (230, 5);
console.log(resultExponen);

//Ejercicio 1 Letras conktenar string text

let text1 = "Perfil mixto, ";
let text2 = "tendencia diabetes 2";
const stringtext = function(text1, text2){
    return text1 + text2;
};
const resultConk = stringtext("Perfil mixto, ","tendencia diabetes 2");
console.log(resultConk);

//Ejercicio 2 long string text
const longString = function(resultConk){
    return resultConk.length;
};
const resultlength = (resultConk.length);
console.log(resultlength);

//Ejercicio 3 cambio cadena a mayus
const stringmay = resultConk.toUpperCase();
console.log(stringmay);

//Ejercicio 4 cambio cadena a minus
const stringminus = resultConk.toLowerCase();
console.log(stringminus);

// Ejercicio suma numeros y entre ellos 

let numeros = [45, 25, 30, 43, 554, 64], suma = 0;
    numeros.forEach (function(numero){
        suma += numero;
    });
console.log(suma);

// Ejercicio promedio de la suma 

let pesopcte = [ 67, 75, 98, 57, 76, 80];

let sumnumbers = pesopcte.reduce((a, n) => (a += n, a), 0);

let pesemestral = sumnumbers / pesopcte.length

console.log (pesemestral);

