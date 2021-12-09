require("colors");
const { inquirerMenu, pausa } = require("./helpers/inquirer");

const main = async () => {
  let opcion = "";
  do {
    console.clear();
    opcion = await inquirerMenu();
    console.log(opcion);
    await pausa();
  } while (opcion !== "0");
};

main();
