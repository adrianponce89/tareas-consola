require("colors");
const mensajes = require("./helpers/mensajes");

const main = async () => {
  let opcion = "";
  do {
    console.clear();
    opcion = await mensajes.mostrarMenu();
    switch (opcion) {
      case "1":
        crearTarea();
        break;
      case "2":
        listarTareas();
        break;
      case "3":
        listarTareasCompletadas();
        break;
      case "4":
        listarTareasPendientes();
        break;
      case "5":
        completarTarea();
        break;
      case "6":
        borrarTarea();
        break;
      case "0":
        console.log("Adios".red);
        break;
      default:
        console.log("Opcion incorrecta".red);
        break;
    }
    if (opcion !== "0") {
      await mensajes.pausa();
    }
  } while (opcion !== "0");
};

main();
