const inquirer = require("inquirer");
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
  const { opcion } = await inquirer.prompt(menuOptions);

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
  const { opcion } = await inquirer.prompt(pauseOptions);
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
  const { descripcion } = await inquirer.prompt(question);
  return descripcion;
};

const listarTareasParaBorrado = async (listado) => {
  const choices = listado.map((tarea, i) => {
    const idx = `${i + 1}`.green;
    return {
      value: tarea.id,
      name: `${idx} ${tarea.descripcion}`,
    };
  });

  choices.unshift({
    value: "0",
    name: `${"0".green} Cancelar`,
  });

  const question = {
    type: "list",
    name: "id",
    message: "Selecciona la tarea a borrar",
    choices,
  };

  const { id } = await inquirer.prompt(question);
  return id;
};

const confirmar = async (message) => {
  const question = [
    {
      type: "confirm",
      name: "ok",
      message,
    },
  ];
  const { ok } = await inquirer.prompt(question);
  return ok;
};

module.exports = {
  inquirerMenu,
  pausa,
  leerInput,
  listarTareasParaBorrado,
  confirmar,
};
