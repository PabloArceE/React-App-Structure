// Desestructuración
// Asignación desestructurante

const persona = {
    nombre: 'Pablo',
    edad: 34,
    clave: 'Programador'
}

// Podemos extraer los elementos del objeto literal en constantes que contengan los valores asignado a los atributos del elemento para utilizarlos en funciones por ejemplo

const {nombre, edad, clave:profesion} = persona;

// clave:profesion le asigna un nombre nuevo al atributo en este scope, en este archivo el atributo clave se accede mediante la constante profesion

console.log(nombre);
console.log(edad);
console.log(profesion);
console.log('\n');

const imprimirDatos = () => {
    console.log(`${nombre}, tiene ${edad} años y es ${profesion}`)
};

imprimirDatos();

console.log('\n');


// En el caso de recibir un objeto literal como argumento la desestructuración puede ser definida en los parametros de la función

const imprimePersona = (objetoLiteral) => {

    console.log(objetoLiteral)

};

imprimePersona(persona);

// imprimePersona() recibe como argumento un objeto literal que luego imprime en pantalla

// sabiendo esto podemos desestructurar el objeto en los parametros de la función

const desestructuraPersona = ({nombre, edad, clave, atributo1 = 'valor por defecto', atributo2}) => {

    console.log('\n')

    console.log('La función desestructurarPersona() recibe un objeto y lo desestructura directamente en los argument, adicionalmente se pueden agregar atributos nuevos y asignar valores por defecto que serán asignado en el caso de que el objeto recibido como argumento no tenga dicho atributo')

    console.log('\n')
    
    console.log(`
        Nombre: ${nombre}
        Edad: ${edad}
        Profesion: ${clave}
        Atributo 1: ${atributo1}
        Atributo 2: ${atributo2}
    `);

    console.log('\n')

};

desestructuraPersona(persona)

// useContext(): context()

const context = ({nombre, edad, clave}) => {

    return{
        nombrePersona: nombre,
        edadPersona: edad,
        profesionPersona: clave,
        direccion: {
            calle: 'nombre de la calle',
            numeracion: 1234
        }
    }

};

const empleado = context(persona);

console.log(empleado)

const {nombrePersona, edadPersona, profesionPersona, direccion, direccion:{calle, numeracion}} = context(persona);

console.log('\n');

console.log(nombrePersona);
console.log(edadPersona);
console.log(profesionPersona);
console.log('\n');
console.log(direccion);
console.log('\n');
console.log(calle);
console.log(numeracion);

// En este último caso cuando recibimos objetos que contienen objetos, se pueden desestructurar a distintos niveles, en el caso de direccion, retorna el objeto {calle: any, numneracion: any}, y en el caso de utilizar la sintxis direccion:{calle, numeración}, se estan extrayendo en constantes separadas la calle y la numeracion.