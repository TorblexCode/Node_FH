const { crearArchivo, listarArchivo } = require("./multiplicar/multiplicar");
const { argv } = require("./config/yargs");
const colors = require("colors");

let comando = argv._[0];

switch (comando) {
  case "listar":
    listarArchivo(argv.base, argv.limit);
    break;
  case "crear":
    crearArchivo(argv.base, argv.limit)
      .then(result => console.log(result))
      .catch(err => {
        console.log(err);
      });
    break;
  default:
    console.log("Comando no reconocido");
    break;
}
