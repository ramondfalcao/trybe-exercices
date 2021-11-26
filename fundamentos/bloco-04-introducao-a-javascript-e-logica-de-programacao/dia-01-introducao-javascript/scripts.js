const nota = 90

if (nota >= 80){
    console.log("Parabéns, você foi aprovado!")
} else if (nota < 80 || nota >= 60) {
    console.log("Você está na nossa lista de espera")
} else if (nota < 60){
    console.log("Você foi reprovado!")
}

const conditionOne = true;
const conditionTwo = false;

console.log(conditionOne && conditionTwo);