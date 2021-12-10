require("colors");
const {
  inquirerMenu,
  pausa,
  leerInput,
  listarTareasParaBorrado,
  confirmar,
  listarCompletarTareas,
} = require("./helpers/inquirer");
const { guardarDB, leerDB } = require("./helpers/guardarArchivo");
const Tareas = require("./models/tareas");

const main = async () => {
  let opcion = "";
  const tareas = new Tareas();

  const tareasDB = leerDB();
  if (tareasDB) {
    tareas.cargarTareas(tareasDB);
  }

  do {
    console.clear();
    opcion = await inquirerMenu();

    switch (opcion) {
      case "1":
        const descripcion = await leerInput("Descripción: ");
        tareas.crearTarea(descripcion);
        break;
      case "2":
        tareas.listarTareas();
        break;
      case "3":
        tareas.listarTareasCompletadasPendientes(true);
        break;
      case "4":
        tareas.listarTareasCompletadasPendientes(false);
        break;
      case "5":
        const ids = await listarCompletarTareas(tareas.listado);
        tareas.completarTareas(ids);
        break;
      case "6":
        const id = await listarTareasParaBorrado(tareas.listado);
        if (id !== "0") {
          const ok = await confirmar("¿Está seguro de eliminar la tarea?");
          if (ok) {
            tareas.eliminarTarea(id);
            console.log("Tarea eliminada".red);
          }
        }
        break;
      case "0":
        console.log("Adios!".red);
        break;
      default:
        console.log("error");
    }

    guardarDB(tareas.listado);

    if (opcion !== "0") {
      await pausa();
    }
  } while (opcion !== "0");
};

main();
