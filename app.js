require("colors");
const { inquirerMenu, pausa, leerInput } = require("./helpers/inquirer");
const { guardarDB } = require("./helpers/guardarArchivo");
const Tareas = require("./models/tareas");

const main = async () => {
  let opcion = "";
  const tareas = new Tareas();

  do {
    console.clear();
    opcion = await inquirerMenu();

    switch (opcion) {
      case "1":
        const descripcion = await leerInput("Descripción: ");
        tareas.crearTarea(descripcion);
        break;
      case "2":
        console.log(tareas.listado);
        break;
      case "3":
        console.log("listarCompletadas");
        break;
      case "4":
        console.log("listarPendientes");
        break;
      case "5":
        console.log("completar");
        break;
      case "6":
        console.log("borrar");
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
