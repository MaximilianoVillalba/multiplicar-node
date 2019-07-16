const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => { //PONIENDO = 10, ES POR DEFECTO QUE SE ASIGNA 10 EN EL CASO QUE HAY NADA

    console.log('======================'.green);
    console.log(`tabla de ${base}`.green);
    console.log('======================'.green);

    for (let index = 1; index <= limite; index++) {
        console.log(`${base} * ${index} = ${base * index}`);
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, rejec) => {

        if (!Number(base)) {
            rejec(`${base} no es un numero`); //ESTO EJECUTA Y SIGUE CON EL CODIGO, NO PARA
            return;
        }

        let data = '';
        for (let index = 1; index <= limite; index++) {
            data += (`${base} * ${index} = ${base * index}\n`);

        }

        fs.writeFile(`tablas/Tabla-${base}.txt`, data, (err) => {
            if (err)
                rejec(err);
            else
                resolve(`tabla-${base}.txt`);
        });
    });
}

module.exports = {
    crearArchivo: crearArchivo,
    listarTabla
}