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

function visualizaProblema(boolean) {
    console.log(chalk.magenta("Criando situação:"))
    console.log(chalk.blackBright(chalk.cyan("Entrada fornecida"), chalk.white(boolean), "\n"));
    stopped(boolean) ? console.log(chalk.cyan("Saída de Stopped:"), chalk.green("true")) : console.log(chalk.cyan("Saída de Stopped:"), chalk.redBright("false"));

    if(s(s(boolean)) === false) {
        s(boolean) ? console.log(chalk.cyan("Saída de S:"), chalk.green("true")) : console.log(chalk.cyan("Saída de S:"), chalk.redBright("false"));
        console.log(chalk.yellow("Encerrou a execução"));
        exit(0);
    }

    s(boolean) ? console.log(chalk.cyan("Saída de S:"), chalk.green("true")) : console.log(chalk.cyan("Saída de S:"), chalk.redBright("false"))
    console.log(chalk.yellow("Entrou em loop"))
}

//Entrada: true
console.log(chalk.cyan("Entrada:", chalk.green("true\n")))
console.log(chalk.yellow("Stopped o programa encerra."))
stopped(true) ? console.log(chalk.magenta("Stopped:"), chalk.green("true")) : console.log(chalk.magenta("Stopped:"), chalk.redBright("false"))
s(true) ? console.log(chalk.magenta("saída:"), chalk.green("true\n")) : console.log(chalk.magenta("saída:"), chalk.redBright("false\n"))
console.log(chalk.gray("----------------------------------------------\n"))

//Entrada: false
console.log(chalk.cyan("Entrada:", chalk.redBright("false\n")))
console.log(chalk.yellow("Stopped o programa entra em loop."))
stopped(false) ? console.log(chalk.magenta("Stopped: "), chalk.green("true")) : console.log(chalk.magenta("Stopped:"), chalk.redBright("false"))
s(false) ? console.log(chalk.magenta("saída:"), chalk.green("true\n")) : console.log(chalk.magenta("saída:"), chalk.redBright("false\n"))

let arg = process.argv;
arg[2] === "true" ? arg = true : arg = false;
visualizaProblema(arg)
