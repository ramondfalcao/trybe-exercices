let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];  

let soma = 0

for (let index = 0; index < numbers.length; index++){
    soma = soma + numbers[index] / numbers.length
}
if (soma > 20){
    console.log("valor maior que 20")
} else {
    console.log("valor menor ou igual a 20")
} 

// Maior Número do Array
var maxNumber = 0;

for (var index = 0; index < numbers.length; index++) {
   if ( numbers[index] > maxNumber ) {
      maxNumber = numbers[index];
   }
}

let impar = 0
for(var index = 0; index < numbers.length; index++){
    if (numbers[index] / 2 == 1)
     impar = numbers[index]
}

// console.log(maior)

// console.log(Math.round(soma))

console.log(impar)