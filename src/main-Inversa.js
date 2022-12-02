import chalk from "chalk";
import { exit } from "process";

function setStop(arg) {
    if (arg) {
        return true;
    }
    return false;
}

//Informa a parada da máquina
function stopped(argB) {
    if (setStop(argB)) {
        return true;
    }
    return false;
}

//Inverte a função "stopped": informa quando NÃO entra em loop.
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
        console.log(chalk.yellow("Encerrou a execução"))
        exit(0);
    }

    s(boolean) ? console.log(chalk.green("true")) : console.log(chalk.redBright("false"))
    console.log(chalk.yellow("Entrou em loop"))
}

let arg = process.argv;
arg[2] === "true" ? arg = true : arg = false;
criaParadoxo(arg)
