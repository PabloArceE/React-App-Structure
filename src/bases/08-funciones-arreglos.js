import { heroes } from "./data/Heroes";

console.table(heroes);

// funciones comunes de los arreglos array.prototype.find()

const getHeroeById = (id) => heroes.find( heroe => heroe.id === id);

console.log(getHeroeById(3)); 


// funciones comunes de los arreglos array.prototype.filter()

const getHeroesByOwner = (owner) => heroes.filter( heroe => heroe.owner === owner ) ;

console.log(getHeroesByOwner('DC'));
