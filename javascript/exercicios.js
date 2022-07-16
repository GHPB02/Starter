/*
console.log({
    name: "Gabriel",
    idade: 20,
    andar: function() {
        console.log('andar')
    }
})
*/
/*
console.log([
    "Leite",
    "Ovos",
    3,
    2
])
*/

//Scope

//Var é global e podera funcionar fora de um escopo de bloco
/*
console.log('> existe x antes do bloco?', x)

{
      var x = 0
}

console.log('> existe x depois do bloco?', x)
*/

//Const e Let sao locais e so funcionam no escopo onde foi criada
/*
const y = 1

{
    let y = 0
    console.log('> existe y antes do bloco?', y)
}

console.log('> existe y depois do bloco?', y)
*/

// object

/*
const person = {
    name: 'Gabriel',
    age: 20,
    weight: 73.5,
    isAdmin: true
}

console.log(`${person.name} tem ${person.age} anos`)
*/

//Array
/*
const animals = [
    'Lion',
    'Monkey',
    {
        name: 'Cat',
        age: 3
    }
]

// acessar valores dentro do Array
console.log(animals[2].name)
*/

// 1. Declare uma variavel de nome weight
//let weight;
// 2. Que tipo de  dado e a variavel acima?
//console.log(typeof weight)
/*
   3. Declare uma variavel e atribua valores para cada um dos dados:
        * name: String
        * age: Number (integer)
        * stars: Number (float)
        * isSubscribed: Boolean

    let name = "Gabriel"
    let age = 20
    let stars = 15.5
    let isSubscribed = true
 */

/*
4. A variavel student abixo e de que tipo de dado?

4.1 Atribua a ela as mesmas propriedades e valores do exercicio 3.

4.2 Mostre no console a seguinte mensagem:

    <name> de idade <age> pesa <weight> kg.
    
    Atenção, sbstitua <name> <age> e <weight>  pelos valores de cada propriedade do objeto.

let student = {
    name: "Gabriel",
    age: 20,
    weight: 73.5,
    height: 1.78
}
*/

//console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg.`)

/*
    5. Declare uma variavel do tipo Array, de nome students e atribua a ela nenhum valor, ou seja. somente o Array vazio.

*/

//let students = []

/*
    6. Reatribua valor para a variavel acima, colocando dentro dela o objeto student da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array)
*/

/*
students = [
    student
]
*/

//console.log(students)

/*
    7. Coloque no console o valor da posição zero do Array acima.
*/

//console.log(students[0])

/*
    8. Crie um novo student e coloque na posição 1 do array students.

const student1 = {
    name: "Ana",
    age: 19,
    weight: 80,
    height: 1.65
}
students = [
    student,
    student1
]
console.log(students)
/*

/*
    9. Sem rodar o codigo responda qual e a resposta do codigo abaixo e porque? Apos sua resposta, rode o codigo e veja se voce acertou.

    console.log(a)
    var a = 1
*/
/*
Praticando

let student = {
    name: 'Joao',
    age: 30,
    weight: 65,
    isSubscribed: true
}


console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg`)
*/