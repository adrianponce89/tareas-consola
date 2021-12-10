const { v4: uuidv4 } = require("uuid");

class Tarea {
  id = "";
  descripcion = "";
  completado = false;

  constructor(descripcion) {
    this.id = uuidv4();
    this.descripcion = descripcion;
    this.completado = false;
  }
}

module.exports = Tarea;
