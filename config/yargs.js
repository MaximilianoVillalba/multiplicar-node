const opts = {
    base: {
        //al ingresar base sea necesario colocar y de alias b
        demand: true,
        alias: 'b'
    },
    limite: {
        //NO ES NECESARIO, POR ESO SE PONE UN DEFAULT
        alias: 'l',
        default: 10,
    }
}

const argv = require('yargs')
    //para que al ingresar por consola, la palabra suceda tal cosa
    .command('listar', 'Imprime en consola la tabla de multipliar', opts)
    .command('crear', 'Crea un archivo con la tabla', opts)
    .help()
    .argv;

module.exports = {
    argv
}