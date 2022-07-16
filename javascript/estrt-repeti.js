// Estrutura de repetição
// for
// break - para a execução do loop
// continue - pula a execução do momento
/*
for( let i = 10; i > 0; i--) {
    if(i === 5){
        break;
    }
    console.log(i)
}
*/
// while - utilizamos quando nao sabemos o momento da parada
/*
let i = 464543543435
while(i > 10) {
    console.log (i)
    i /= 35
}
*/
// for...of - cria loop atraves de uma variavel
/*
let name = 'Mayk'
let names = ['João', 'Paulo', 'Pedro']

for(let name of names) {
    console.log(name)
}
*/
// for...in - pega informações dentro de um objeto
/*
let person = {
    name: 'Gabriel',
    age: 20,
    weight: 73.5
}

for(let property in person) {
    console.log(property)
    console.log(person[property])
}
*/