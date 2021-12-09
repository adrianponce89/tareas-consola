require("colors");
const inquirer = require("./helpers/inquirer");

const main = async () => {
  let opcion = "";
  do {
    console.clear();
    opcion = await inquirer.inquirerMenu();
    console.log(opcion);
  } while (opcion !== "0");
};

main();
