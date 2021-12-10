const inquired = require("inquirer");
require("colors");

const menuOptions = [
  {
    type: "list",
    name: "opcion",
    message: "¿Qué quieres hacer?",
    choices: [
      { value: "1", name: `${"1.".green} Crear tarea` },
      { value: "2", name: `${"2.".green} Listar tareas` },
      { value: "3", name: `${"3.".green} Listar tareas completadas` },
      { value: "4", name: `${"4.".green} Listar tareas pendientes` },
      { value: "5", name: `${"5.".green} Completar tarea(s)` },
      { value: "6", name: `${"6.".green} Borrar tarea` },
      { value: "0", name: `${"0.".green} Salir \n` },
    ],
  },
];

const inquirerMenu = async () => {
  console.log("====================================".green);
  console.log("        Seleccione una opcion".green);
  console.log("====================================\n".green);
  const { opcion } = await inquired.prompt(menuOptions);

  return opcion;
};

const pauseOptions = [
  {
    type: "input",
    name: "pause",
    message: `Presione ${"Enter".green} para continuar...`,
  },
];

const pausa = async () => {
  console.log("\n".green);
  const { opcion } = await inquired.prompt(pauseOptions);
  return opcion;
};

const leerInput = async (message) => {
  const question = [
    {
      type: "input",
      name: "descripcion",
      message,
      validate: (value) => {
        if (value.length) {
          return true;
        } else {
          return "Este campo es obligatorio";
        }
      },
    },
  ];
  const { descripcion } = await inquired.prompt(question);
  return descripcion;
};

module.exports = { inquirerMenu, pausa, leerInput };
