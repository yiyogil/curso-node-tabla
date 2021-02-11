

const { crearArchivo, crearArchivo2 ,crearArchivo3 } = require('./helpers/multiplicar')

const color =require ('colors');
 const argv = require ('./config/yargs');

//const argv = require ('yargs').argv;



console.clear();



//console.log(process.argv)
console.log(argv)


 //const base = 19

// const [,,arg3= 'base=5'] = process.argv;
 //const [,base=5] =  arg3.split('=');


//crearArchivo (3);
 
crearArchivo3(argv.b, argv.l , argv.h )
.then (nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
.catch (err=> console.log(err));

 
