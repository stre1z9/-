
//начало
console.log('Denis')
//переменные
myName='Denis'
console.log(myName)
console.log('Very ' + 'Good ' + 'Boy')
//объявление переменных
let a
a=123
const b = 'abc'
console.log(a+b)
//ссылочный тип
const objectA = {
    a:32
}
const copyOfA = objectA
copyOfA.a = 20
copyOfA.c = 'abc'
//динамическая типизация
a = 'abc'//String
a = 10 //Number
let = 22
a = true
const f = () => {
    console.log('Hey there')
}
f('Hey there')
//объекты
const myCity = {
    city: 'Togliatty',
    popular: true,
    country: 'Russia',
}
myCity.city = 'Samara'
console.log(myCity);
myCity.country
delete myCity.country
console.log(myCity);
const myNumber = {
    color: 2,
}

myNumber['dude'] = true

console.log(myNumber)

const countryPropertyName = 'country'
myCity [countryPropertyName] = 'Russia'
console.log(myNumber)
//св-ва обьектов
const myRegion = {
    city: 'Togliatty',
    info: {
        isPopular: true,
        country: 'Russia'
    }
}
console.log(myRegion.info.isPopular);
console.log(myRegion.info);
delete myRegion.info ['isPopular']
console.log(myRegion)
//объекты с использованием переменных
const name = 'Denis'
const postsQty = 16
const gender = 'male'
const userProfile = {
    name,
    postsQty,
    gender,
    hasSignedAgreement: false
}
console.log(userProfile);
//глобальные объекты
globalThis.console.log(10)
//методы объекта
const myCity2 = {
    city: 'Togliatty',
    cityGreeting() {
        console.log('Greetings!!')
    }
}
myCity2.cityGreeting()
//json
const post = {

    title: 'Fake LVL',
    likeQsty: 5
}
console.log(post)
const postStringiried = JSON.stringify(post)
JSON.parse(postStringiried)
//мутация в js
const j = 10
let i = j
i = 30
console.log(j)
console.log(i)
const person = {
    name:'Denis',
    age:16
}
const person2 = person

person2.age = 29
person2.isAdult = true

console.log(person.age)
console.log(person.isAdult)
const person1 = {
    name:'Denis',
    age: 16
}
const person3 = Object.assign({}, person)

person3.age = 26
console.log(person3.age)
console.log(person.age)
