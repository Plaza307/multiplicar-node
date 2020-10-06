const fs = require('fs');
const colors = require('colors');


let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {

        console.log('======================='.blue);
        console.log('=====tabla de ${base}=='.green);
        console.log('======================='.yellow);

        if (!Number(base) && !Number(limite)) {
            reject('El valor introducido como base o como limite, no es un número, fallo');

        }

        for (let i = 1; i <= limite; i++) {
            console.log(`${base} * ${i}= ${base*i}`);
        }
    });
}

//module.exports.crearArchivo = (base) => {}
let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base) && !Number(limite)) {
            reject('El valor introducido como base o como limite, no es un número, fallo');
            //sin el return, salta el error pero sigue creando el archivo
            return;
        }



        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += (`${base} * ${i}= ${base*i}\n`);
        }

        //const data = new Uint8Array(Buffer.from('Hello Node.js'));

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {

            if (err) reject(err)
            else
                resolve(`tabla-${base}-al-${limite}.txt`.rainbow);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}