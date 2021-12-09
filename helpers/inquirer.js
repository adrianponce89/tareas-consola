const inquired = require("inquirer");
require("colors");

const menuOptions = [
  {
    type: "list",
    name: "opcion",
    message: "¿Qué quieres hacer?",
    choices: ["Crear", "Ver", "Actualizar", "Borrar"],
  },
];

const inquirerMenu = async () => {
  console.log("====================================".green);
  console.log("        Seleccione una opcion".green);
  console.log("====================================\n".green);
  const opt = await inquired.prompt(menuOptions);
  return opt;
};

module.exports = { inquirerMenu };
