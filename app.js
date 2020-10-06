//requireds
// const fs = require('fs');
// //const fs = require('express');
// //const fs = require('./fs');
const argv = require('./config/yargs').argv;
const colors = require('colors');


//ESTO SE IMPLEMENTA EN YARGS.JS ******** OPTIMIZACION DEL CODIGO
//require('yargs')
//     .command('listar', 'Imprime en la consola la tabla de multiplicar', {
//         base: {
//             demand: true,
//             alias: 'b'
//         },
//         limite: {
//             alias: 'l',
//             default: 10
//         }
//     })
//     .command('crear', 'Crea un archivo con la tabla de multiplicar que resulte de la base y el limite', {
//         base: {
//             demand: true,
//             alias: 'b'
//         },
//         limite: {
//             alias: 'l',
//             default: 10
//         }
//     })
//     .help()
//     .argv;

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

//console.log(argv);

let comando = argv._[0];

console.log(argv.base, argv.limite);

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('comando no reconocido');
}







//let base = 'Antonio';

//console.log(process.argv);    
/* con el argv podremos trabajar desde la terminal con argumentos:
node app --base=6 */

// let argv2 = process.argv;
//console.log(argv.base);
// console.log('Limite', argv.limite);



// let parametro = argv[2];
/* coge el 2 parametro, sabiendo que empieza en 0(bin/node), 1(03-bases-node/app)
                           2(Es el primer parametro que metemos en terminal, si hubiese mas, irían 3, 4 etc*/


// let base = parametro.split('=')[1];
// console.log(base);