/* ### Transformar notas escolares

Crie um algoritmo que transforme as notas do sistema numerico para sistema de notas em caracteres tipo A B C

* de 90 para cima - A
* entre 80 - 90 - B
* entre 70 - 79 - C
* entre 60 - 69 - D
* menor que 60 - F


function getNote(note) {
    let highGrade = note >= 90 && note <=100
    let averageGrade = note < 90 && note >= 80
    let goodGrade = note < 80 && note >= 70
    let lowScore = note < 70 && note >= 60
    let badGrade = note < 60 && note >= 0
    let noteFinal;
    
    if(highGrade) {
        noteFinal = 'Nota A'
    } else if(averageGrade) {
        noteFinal = 'Nota B'
    } else if(goodGrade) {
        noteFinal = 'Nota C'
    } else if( lowScore) {
        noteFinal = 'Nota D'
    } else if(badGrade) {
        noteFinal = 'Nota F'
    } else{
        noteFinal = 'Nota invalida'
    }

    return noteFinal
}

console.log(getNote(101))
console.log(getNote(70))
console.log(getNote(51))
console.log(getNote(-75))
console.log(getNote(7,5))
console.log(getNote(100))
*/

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
*/
/* ### Sistema de gastos familiar

Crie um objeto que possuira 2 propriedades, ambas do tipo array:
    * receitas: []
    * despesas: []
Agora, crie uma função que ira calcular o total de receitas e despesas e ira mostrar uma mensagem se a familia esta com saldo positivo ou negativo, seguido do valor do saldo


let family = {
    incomes: [2200, 3200, 250.43, 360.45],
    expenses: [320.34, 128.45, 176.87, 1450, 2000]
}

function sum(array) {
    let total = 0;
    for(let value of array) {
        total += value
    }       
    return total
}

function calculateBalance() {
    const calculateIncomes = sum(family.incomes)
    const calculateExpenses = sum(family.expenses)

    const total = calculateIncomes - calculateExpenses

    const itsOk = total >= 0
    
    let balanceText = "negativo"

    if (itsOk) {
        balanceText = "positivo"
    }
    
    console.log(`Seu saldo é ${balanceText}: R$${total.toFixed(2)}`)
}

calculateBalance() 
*/       

/* ### Celsius em fahrenheit

    Crie uma função que receba um string em celsius ou fahrenheit e faça a transformação de uma unidade para outra

    C = (F - 32) * 5/9
    F = C * 9/5 + 32

// transformDegree('50F')
function transformDegree(degree) {
    const celsiusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')

    // fluxo de erro
    if(!celsiusExists && !fahrenheitExists) {
        throw new Error('Grau não identificado')
    }

    // fluxo ideal, F -> C
    let updatedDegree = Number(degree.toUpperCase().replace("F", ""));
    let formula = fahrenheit => (fahrenheit - 32) * 5/9
    let degreeSign = 'C'

    // fluxo alternativo, C -> fahrenheit
    if(celsiusExists){
         updatedDegree = Number(degree.toUpperCase().replace("C", ""));
         formula = celsius => celsius * 9/5 + 32
         degreeSign = 'F'
    } 

    return formula(updatedDegree) + degreeSign
}

try{
    console.log(transformDegree('10C'))
    console.log(transformDegree('50F'))
    transformDegree('50Z')
} catch(error){
    console.log(error)
}
*/
 
/* ### Buscando e contando dados em Arrays

    Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios

        * Contar o numero de categorias e o numero de livros em cada categoria
        * Contar o numero de autores
        * Mostrar livros do autor Augusto Cury
        * Transformar a função acima em uma função que ira receber o nome do autor e devolver os livros desse autor.


const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionaria",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilonia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligencia Emocional",
        books: [
            {
                title: "Você é Insubstituivel",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - Como enfrentar o mal do seculo",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 habitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

const totalCategories = booksByCategory.length

console.log(totalCategories)
for(let category of booksByCategory){
    console.log('Total de livros da categoria: ', category.category)
    console.log(category.books.length)
}

function countAuthor() {
    let authors = []

    for(let category of booksByCategory){
        for(let book of category.books){
            if(authors.indexOf(book.author) == -1) {
                authors.push(book.author)
            }
        }
    }
    console.log("Total de autores: ", authors.length)
}

countAuthor();

function booksOfAugustoCury() {
    let books = []

    for(let category of booksByCategory){
        for(let book of category.books){
            if(book.author === 'Augusto Cury') {
                books.push(book.title)
            }
        }
    }

    console.log("Livros do autor: ", books)
}
booksOfAugustoCury()

function booksOfAuthor(author) {
    let books = []

    for(let category of booksByCategory){
        for(let book of category.books){
            if(book.author === author) {
                books.push(book.title)
            }
        }
    }

    console.log(`Livros do autor ${author}: ${books.join(", ")}`)
}
booksOfAuthor('George S. Clason')
*/