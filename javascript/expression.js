/*
    new

    * left-hand-side expression
    * criar um novo objeto
*/
/*
const name = new String('Gabriel')
console.log(name)
*/

/*
    operadores unarios

    * typeof
    * delete
*/
/*
const person = {
    name: 'Gabriel',
    age: 20
}
delete person.age

console.log(person)
*/

// operadores aritimeticos

/*multiplicação *
console.log(3 * 3)*/

/*divisao /
console.log(4 / 2)*/

/*soma +
console.log(2 + 2)*/

/*subtração -
console.log(5-3)*/

/*resto da divisao %
console.log(11 % 9)*/

/*incremento ++
let increment = 0
console.log(++increment)*/

/*decremento --
let decrement = 0
console.log(--decrement)*/

/*exponencial **
console.log(3**3)*/

// grouping operator ()
/*
let total = (2 + 3) * 5
console.log(total)
*/
// operadores de comparação

// ira comparar valores e retornar um boolean como resposta a comparação
/*
let one = 1
let two = 2

// == igual a
console.log(two == 1)
console.log(one == "1")

// != diferente de 
console.log(one != two)
console.log(one != 1)
console.log(one != "1")
*/
/*
let one = 1
let two = 2
// === estritamente igual a
console.log(one === "1")
console.log(one === 1)

// !== estritamente diferente de 
console.log(two !== "2")
console.log(two !== 2)
*/
/*
let one = 1
let two = 2
// > maior que
console.log(one > two)

// >= maior igual a
console.log(one >= 1)
console.log(two >= 1)

// < menor que
console.log(one < two)

// <= menor igual a
console.log(one <= two)
console.log(one <= 1)
console.log(one <= 0)
*/
/*
// operadores de atribuição (assignment)
let x

// assignment
x=1

// addition assignment
// x = x + 2
x += 2

// subtraction assignment
// x = x - 1
x -= 1

//multiplication assignment
// x = x * 2
x *= 2

// division assignment
// x = x / 2 
x /= 2

// remaider, exponentiation 
x %= 2

// x **=2

console.log(x)
*/
// operadores logicos (logical operators)

// - 2 valores booleanos, quando verificados resultara em verdadeiro ou falso
/*
let pao = true
let queijo = false

// AND &&
console.log(pao && queijo)

// OR ||
console.log(pao || queijo)

//NOT !
console.log(!pao)
*/
/*
// operador condicional (ternario)

// dependendo da condição, nos receberemos valores diferentes

// condição entao valor 1 se nao valor 2
// condition ? value1 : value2

// exemplos
// cafe da manha top
let pao = true
let queijo = true

const niceBreakfast = pao && queijo ? 'cafe da manha top' : 'cafe da manha ruim'

console.log(niceBreakfast)

//maior de 18 anos

let age = 18

const canDrive = age >= 18 ? 'Can drive' : "Can't drive"

console.log(canDrive)
*/
/*
// operador de string (string operator)

// comparison (comparação)
// console.log('a' == 'a')

// concatenation (concatenação)
// retorna a união de duas strings
let alpha = 'alpha'

console.log(alpha += 'bet')
*/
/*
    FALSY
    quando um valor e considerado false em contextos onde um booleano e obrigatorio (condicionais e loops)

    false
    0
    -0
    ""
    null
    undefined
    NaN
*/

// console.log(-0 ? 'verdadeiro' : 'falso')

/*
    TRUTHY
    quando um valor e considerado true em contextos onde booleano e obrigatorio (condicionais e loops)

    true
    {}
    []
    1
    3.23
    "0"
    "false"
    -1
    infinity
    -infinity
*/

// console.log({} ? 'verdadeiro' : 'falso')
/*
    operador precedence
    precedencia de operadores
    true = 1 / false = 0

    * grouping                ( )
    * negação e incremento    ! ++ --
    * multiplicação e divisao   * /
    * adição e subtração        + -
    * relacional                < <= => >
    * igualdade                 == != === !==
    * AND                       &&
    * OR                        ||
    * condicional               ?:
    * assigment (atribuição)    = += -= *= %=
*/

//console.log(3 > 2 > 1)