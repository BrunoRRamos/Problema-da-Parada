import chalk from "chalk";

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

//Inverte a função "stopped": retorna se entrou em loop.
function s(argS) {
    if(stopped(argS)) {
        return false;
    }
    return true;
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
