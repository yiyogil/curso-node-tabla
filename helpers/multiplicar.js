
const fs= require ('fs');

const color = require ('colors');

const  crearArchivo  =( base = 5)=>{

  
    console.log('========================'.red);
    console.log('TABLA DEL :'.red ,base);
    console.log('========================'.red);
    
    let salida = '';
    
    for (let i=1; i <= 10;i++){
           
            salida += `${base} ${'x'.yellow} ${i} ${'='.red} ${base*i} \n`
    
    }
    
    console.log(salida);
    
    fs.writeFile (`tabla-${base}.txt`,salida, (err)=>{
    
        if (err) throw err;
        console.log(`tabla-${base}.txt creada`)
    
    })

}
 
const crearArchivo2 = (base = 5)=>{

    const promesa = new Promise((resolve,reject) => {

        console.log('========================');
        console.log(`TABLA DEL : ${base}`);
        console.log('========================');
        
        let salida = '';
        
        for (let i=1; i <= 10;i++){
               
                salida += `${base} X ${i} = ${base*i} \n`
        
        }
        
        console.log(salida);
        
        fs.writeFile (`tabla-${base}.txt`,salida, (err)=>{
        
            if (err) throw err;
           resolve(`tabla-${base}.txt creada`)
        
        })

    });

    return promesa ;
}
 

const crearArchivo3 = async (base = 5, listar=false, hasta=12)=>{       

        try {

          
            
            let salida = '' , consola= ''; 
            
            for (let i=1; i <= hasta;i++){                   
                 consola+= `${base} ${'x'.yellow} ${i} ${'='.red} ${base*i} \n`
                 salida+= `${base} ${'x'} ${i} ${'='} ${base*i} \n`
            }
            if (listar){
                console.log('========================'.yellow);
                console.log('TABLA DEL :'.red ,base);
                console.log('========================'.yellow);

                console.log(consola);
            }
            
            
            fs.writeFileSync (`./salida/tabla-${base}.txt`,salida); 
            return `tabla-${base}.txt creada`;
        }
        catch (err){
                throw err;

        }

            
       
 
}


module.exports = {
    crearArchivo: crearArchivo ,
   crearArchivo2: crearArchivo2,
    crearArchivo3: crearArchivo3
    /* 
    crearArchivo , solo eso cuando es el mismo nombre
    */  
    }