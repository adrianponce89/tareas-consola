const Tarea = require("./tarea");
class Tareas {
  _listado = {};

  constructor() {
    this._listado = {};
  }

  get listado() {
    return Object.values(this._listado);
  }

  cargarTareas(tareas = []) {
    tareas.forEach((tarea) => {
      this._listado[tarea.id] = tarea;
    });
  }

  crearTarea(descripcion = "") {
    const tarea = new Tarea(descripcion);
    this._listado[tarea.id] = tarea;
  }

  listarTareas() {
    this.listado.forEach((tarea, i) => {
      const idx = `${i + 1}`.green;
      const { descripcion, completada } = tarea;
      const estado = completada ? "Completada".green : "Pendiente".red;
      console.log(`${idx} ${descripcion} :: ${estado}`);
    });
  }
}

module.exports = Tareas;
