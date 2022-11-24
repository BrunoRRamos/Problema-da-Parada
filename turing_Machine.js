import chalk from "chalk";
import { exit } from "process";

function setStop(arg) {
    if (arg) {
        return true;
    }
    return false;
}

function stopped(argB) {
    if (setStop(argB)) {
        return true;
    }
    return false;
}

function s(argS) {
    if(stopped(argS)) {
        return true;
    }
    return false;
}

function criaParadoxo(boolean) {
    console.log(chalk.magenta("Criando paradoxo:"))
    console.log(chalk.blackBright(chalk.cyan("Entrada fornecida"), chalk.white(boolean), "\n"));
    
    stopped(boolean) ? console.log(chalk.green("true")) : console.log(chalk.redBright("false"));

    if(s(s(boolean)) === false) {
        s(boolean) ? console.log(chalk.green("true")) : console.log(chalk.redBright("false"))
        console.log(chalk.yellow("Encerra"))
        exit(0);
    }

    s(boolean) ? console.log(chalk.green("true")) : console.log(chalk.redBright("false"))
    console.log(chalk.yellow("Quebrou"))
}

console.log(chalk.yellow("Se stopped for true o programa encerra."))
stopped(true) ? console.log(chalk.green("true")) : console.log(chalk.redBright("false"))
s(true) ? console.log(chalk.green("true\n")) : console.log(chalk.redBright("false\n"))

console.log(chalk.yellow("Se stopped for false o programa entra em loop."))
stopped(false) ? console.log(chalk.green("true")) : console.log(chalk.redBright("false"))
s(false) ? console.log(chalk.green("true\n")) : console.log(chalk.redBright("false\n"))

criaParadoxo(false)