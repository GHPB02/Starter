// if... else
/*
let temperature = 36.9
let highTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature >= 37

if(highTemperature) {
    console.log('Febre alta')
} else if(mediumTemperature) {
    console.log('Febre moderada')
} else{
    console.log('Saudavel')
}
*/
// awitch
/*
function calculate(number1, operator, number2){
    let result

    switch (operator) {
        case '+':
            result = number1 + number2
            break;
        case '-':
            result = number1 - number2
            break
        case '*':
            result = number1 * number2
            break
        case '/':
            result = number1 * number2
            break
        default:
            console.log('não implementado')
            break;
    }
    
    return result
}

console.log(calculate(4, '+', 8))
*/
// throw - vai "arremeçar" a informação para o catch e caso nao esteja la vai retornar e deixar descrito a informação descrita, nesse caso "nome é obrigatorio". E importante na captura de erros e falhas na aplicação
/*
function sayMyName (name = ''){
    if ( name === ''){
        throw 'Nome é obrigatório'
    }
    console.log('depois do erro')
}

// try... catch
try {
    sayMyName()
} catch(e) {
    console.log(e)
}

console.log('após ao try/catch')
*/