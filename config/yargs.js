const { boolean } = require('yargs');



const argv = require('yargs').    
option('b',
    {alias:'base',
     type:'number',
     demandOption:true,
    describe:'Base de la tabla de multiplicar'}
     ).
option('l',
     {
      alias:'listar',
      type:'boolean',          
      default:false,
      describe:'Listar en pantalla el resultado',
      //demandOption:true
     }).
option('h',
     {
      alias:'hasta',
      type:'number',          
      demandOption:true,
      describe:'Total de multiplicadores',
      //demandOption:true
     })
.check((argv,options)=>{
    if (isNaN(argv.b)){
            throw 'La base tiene que ser un numero'                
    }

    if (isNaN(argv.l)){
        throw 'El hasta tiene que ser un numero'                
}
    return true;
}).argv;

module.exports = argv;