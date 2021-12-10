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

  listarTareasCompletadasPendientes(completadas = false) {
    let i = 0;
    this.listado.forEach((tarea) => {
      const idx = `${i + 1}`.green;
      const { descripcion, completada } = tarea;
      const estado = completada ? "Completada".green : "Pendiente".red;
      if (completadas === completada) {
        console.log(`${idx} ${descripcion} :: ${estado}`);
        i++;
      }
    });
  }
}

module.exports = Tareas;
