import { heroes } from "./data/Heroes";

// desestructuración de arreglos

console.log('Este es el arreglo importado desde la base de datos:');
console.table(heroes);
console.log('\n');

const [batman, spiderman, superman, flash, wolverine] = heroes;

console.log('Estos son los elementos del arreglo axtraidos en constantes a partir de la desestructuración del mismo:');

console.log(batman)
console.log(spiderman)
console.log(superman)
console.log(flash)
console.log(wolverine)

console.log('\n')

// función que retorna arreglos

const retornaHeroes = () => {
    return heroes;
};

const [h1, h2, h3, h4, h5] = retornaHeroes();

console.log('Estas constantes contienen los valores de un arreglo a partir de la desestructuración de una función que retorna un arreglo, retornaHeroe():')

console.log(h1);
console.log(h2);
console.log(h3);
console.log(h4);
console.log(h5);

console.log('\n');

// función recibe y retorna un arreglo

const recibeRetornaHeroes = arr => arr

const [element1, element2, element3, element4, element5] = recibeRetornaHeroes(heroes);

console.log('Por último se imprimen los elementos de un arreglo en cosntantes obtenidas a partir de la desestructuración de una función que recibe un arreglo y retorna un arreglo, llamada recibRetornaHeroes(heroes):'); 

console.log(element1);
console.log(element2);
console.log(element3);
console.log(element4);
console.log(element5);