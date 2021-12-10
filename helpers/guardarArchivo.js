const fs = require("fs");

const archivo = "./db/data.json";

const guardarDB = (data) => {
  fs.writeFileSync(archivo, JSON.stringify(data, null, 2));
};

const leerDB = () => {
  if (!fs.existsSync(archivo)) {
    return null;
  }
  let data = fs.readFileSync(archivo, "utf-8");
  data = JSON.parse(data);
  return data;
};

module.exports = {
  guardarDB,
  leerDB,
};
