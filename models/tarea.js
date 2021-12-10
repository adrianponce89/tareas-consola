const { v4: uuidv4 } = require("uuid");

class Tarea {
  id = "";
  descripcion = "";
  completada = false;

  constructor(descripcion) {
    this.id = uuidv4();
    this.descripcion = descripcion;
    this.completada = false;
  }
}

module.exports = Tarea;
