const argv = require('./config/yargs').argv;
const colors = require('colors/safe');
//PROYECTO PROPIO DE NODE, LIBRERIA QUE YA EXISTE EN NODE
//const fs = require('express');//CUANDO NO EXISTE EN LA DOC DE EXPRESS, PAQUETE NO NATIVO DE NODE
//const fs = require('../PATH DE DONDE VIENE EL ARCHIVO/fs'); y EL OTRO REQUIERE DE ARCHIVOS QUE NOSOTROS CREAMOS PARA EL PROYECTO

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar'); //ESTO ES UNA DESTRUCTURACION, TRAIGO DEL ARCHIVO CIERTAS FUNCIONES

let comando = argv._[0]; //ACA NOS REFERECIAMOS A LO QUE NOS DEVUELVE ARGV EN LA PARTE DEL ARRELO, { _: [], '$0': 'app' }

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => {
                console.log(`Archivo creado: ${colors.green(archivo)}`);
            })
            .catch(err => console.log(err))
        break;
    default:
        console.log('Comando no reconocido');
}
// let parametro = argv[2];
// let base = parametro.split('=')[1]; //PARA SEPARAR ELEMENTOS, CONVERTIR UN STRING A UN ARREGLO;