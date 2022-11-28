import chalk from "chalk";
import { exit } from "process";

function setStop(arg) {
    if (arg) {
        return true;
    }
    return false;
}

//Iforma a parada da máquina
function stopped(argB) {
    if (setStop(argB)) {
        return true;
    }
    return false;
}

//Inverte a função "stopped": informa quando entra em loop.
function s(argS) {
    if(stopped(argS)) {
        return false;
    }
    return true;
}


console.log(chalk.yellow("Se stopped for true o programa encerra."))
stopped(true) ? console.log(chalk.green("true")) : console.log(chalk.redBright("false"))
s(true) ? console.log(chalk.green("true\n")) : console.log(chalk.redBright("false\n"))

console.log(chalk.yellow("Se stopped for false o programa entra em loop."))
stopped(false) ? console.log(chalk.green("true")) : console.log(chalk.redBright("false"))
s(false) ? console.log(chalk.green("true\n")) : console.log(chalk.redBright("false\n"))
