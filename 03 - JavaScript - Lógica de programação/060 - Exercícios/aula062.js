function fizzBuzz(x){
    if (typeof x !== 'number') return x
    if (x>100 || x<0 ){
        console.log('Numero precisa estar entre 0 e 100')
        return x
    } else {
        if (x%3===0){
            if (x%5===0){
                return 'FizzBuzz'
            }
            return 'Fizz'
        } else if (x%5===0){
            return 'Buzz'
        }       
        return x
    }
}

function fizzBuzzProfessor(numero){
    if (typeof numero !== 'number') return numero
    if (numero % 3 === 0 && numero % 5 ===0) return 'FizzBuzz'
    if (numero % 3 === 0) return 'Fizz'
    if (numero % 5 === 0) return 'Buzz'
    return numero
}

for (let i = 0;i<=100;i++){
    console.log(i,fizzBuzzProfessor(i))
}
