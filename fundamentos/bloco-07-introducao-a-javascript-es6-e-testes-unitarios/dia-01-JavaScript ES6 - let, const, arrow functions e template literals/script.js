 

const fatorial = (number) => {
    for(let i = 0; i >= number; i++){
        let result = number - 1 
         result = result * result
    }

    return result
}

console.log(fatorial(4))