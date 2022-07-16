// criar um aplicativo de frases motivacionais

// declration - declaração da função
// function statement
/*
function createPhrases() {
    console.log('Estudar é muito bom')
    console.log('Paciencia e persistencia')
    console.log('Revisão é mãe do aprendizado')
}

// executar a função
// rodar, chamar, invocar
// execute, run, call, invoke
createPhrases()
createPhrases()
createPhrases()
createPhrases()
*/

// function expression
// function anonymous

// parametros (parameters)
/*
const sum = function(number1, number2){
    console.log(number1 + number2)
}

sum(2, 3) // arguments - argumentos 
*/
/*
const sum = function(number1, number2){
    let total = number1 + number2 //sempre utilizar let ou const no total pois pode dar conflito com outros 
    return total
}

let number1 = 34
let number2 = 25

console.log(`o numero 1 é ${number1}`)
console.log(`o numero 2 é ${number2}`)
console.log(`a soma é ${sum(number1, number2)}`)
*/

// function scope
/*
let subject = 'create video'

function createThink(subject){ //caso o parametro nao esteja expecificado o valor ira se sobrepor
    subject = 'study'
    return subject // sem o return a função se torna undefined 
}

console.log(createThink(subject))
console.log(subject)
*/

// function hoisting
/*
sayMyName()

function sayMyName() { // se caso estiver um 'var' antes da função nao sofrera hoisting pois ai se torna um termo deixando de ser função
    console.log('Gabriel')
}
*/

// arrow function
/*
const sayMyName = (name) => {
    console.log(name)
}

sayMyName('Gabriel')
*/

// callback function - retorna a função
/*
function sayMyName(name) {
    console.log('antes de executar a funcao callback')

    name()

    console.log('depois de executar a callback')
}

sayMyName(
    () => {
        console.log('estou em uma callback')
    }
)
*/

/*
    Function() constructor
    * expressão new
    * criar um novo objeto
    * this keybowrd
*/
/*
function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + " esta andando"
    }
}

const gabriel = new Person("Gabriel")
const joao = new Person("Joao")
console.log(gabriel.walk())
console.log(joao.walk())
*/