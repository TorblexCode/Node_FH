const opts = {
  base: {
    demand: true,
    alias: "b"
  },
  limit: {
    alias: "l",
    default: 10
  }
};
const argv = require("yargs")
  .command("listar", "Imprime en la consola la tabla de multiplicar", opts)
  .command("crear", "Genera  un archivo con las tabla de multiplicar", opts)
  .help().argv;

module.exports = {
  argv
};
