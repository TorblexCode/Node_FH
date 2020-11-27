const fs = require("fs");
const colors = require("colors");

let listarArchivo = (base, limit = 10) => {
  console.log("================================".green);
  console.log(`Tabla de multiplicar del ${base}`.green);
  console.log("================================".green);

  for (let i = 1; i <= limit; i++) {
    console.log(`${base} * ${i} = ${base * i}`);
  }
};

let crearArchivo = (base, limit = 10) => {
  return new Promise((resolve, rejects) => {
    if (!Number(base)) {
      rejects(`La base ${base} no es un número`);
      return;
    }
    let data = "";
    for (let i = 1; i <= limit; i++) {
      data += `${base} * ${i} = ${base * i}\n`;
    }

    fs.writeFile(`./tablas/tabla ${base}.txt`, data, err => {
      if (err) rejects(err);
      else resolve(`The file tabla ${base} is created`.bgGreen.black);
    });
  });
};

module.exports = {
  crearArchivo,
  listarArchivo
};
