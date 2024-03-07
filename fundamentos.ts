//  TIPO NUMBER
let numero: number = 7
numero = 3
//numero = 'Elvis'

// TIPO STRINNG
let palavra:string = 'Soares'
palavra = 'casa'

// TIPO BOOLEAN
let verdade: boolean = true
let falso: boolean = false

// TIPO ARRAY
let num:number[] = [1 , 3, 5, 7]
let letras: string[] = ['a', 'b', 'c', 'd']
let misto:any[] = ['a', 1, 'b', 2, 'c']

const nomes:Array<string> = ['João', 'Maria', 'Teresa']
const numerosPares: Array<Number> = [2, 6, 8, 12]
const mistoArray: Array<any> = [2, 'Mario', false]

function minhasLetras(a:string, b:string){
    console.log(a, b)
}
minhasLetras('p', 'b')

function soma(x:number, y:number):number{
    let somar: number = x + y
    return somar
}



function coordenadas(cord: {x: number, y: number}){
    console.log(`A cordenada x é: ${cord.x}`)
    console.log(`A cordenada y é: ${cord.y}`)
}

const minhaCoordenada = {x: 329, y:72.6}
coordenadas(minhaCoordenada)

function mostreNumeros (a: number, b: number, c?: number){
    console.log(`A: ${a} `)
    console.log(`B: ${b} `)
    console.log(`C: ${c} `)
}
mostreNumeros(1,2,3)
mostreNumeros(1,2)

function validaOpcao(opcao: string|number, opcao2: number|boolean){
    console.log(opcao, opcao2)
}

validaOpcao('Paulo', true)
validaOpcao(23,24)

// ALIAS
type myAlias = number | string
function showId(id: myAlias){
    console.log(`o ID é: ${id}`)
}

showId(15)
showId('15')

function showCpf(cpf: myAlias){
    console.log(`O cpf é: ${cpf}`)
}

showCpf(12344566777)
showCpf('11232435665')

type ObjectAlias = {
    name: string,
    idade: number

}
function userDetails(user: ObjectAlias){
    console.log(`Nome: ${user.name}`)
    console.log(`Idade:${user.idade}`)

}
userDetails({name: 'Paulo', idade:26})

// INTERFACES - consegue colocar novos elementos 
interface coords{
    x: number,
    y: number,
    z: number,
}
function showCoords(myObject: coords){
    console.log(`x = ${myObject.x}, y = ${myObject.y} e z = ${myObject.z}`)
}

let minhasCoordenadas = {
    x: 10,
    y: 15,
    z: 20
}
showCoords(minhasCoordenadas)

// DIFERENÇA ENTRE ALIAS E INTERFACES
type myPet = {
    nome: string,
    peso: number,
    raca: string,
    idade: number
} 
function showPet(meuPet:myPet){
    console.log(meuPet.nome)
    console.log(meuPet.raca)
    console.log(meuPet.idade)
    console.log(meuPet.peso)
}

showPet({nome: 'Lula', peso: 4, raca: 'Cachorro', idade: 2})

type myPet = {
    tipoRacao : string
}