"use strict";
// let variavel = 10
// let numero: number = 10
// let string:string = "Isso é uma string"
// const boleano = true //false
// let vetorString: string[] = []
// const vetor:number[] = []
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// //Adicionar um valor no vetor
// vetor.push(10)
// vetorString.push("Terezinho")
// console.log(vetor)
// let nomeMateria:string = "Frameworks 1"
// console.log(nomeMateria)
// //OBjetos em javascript
// const objEstudante = {
//     nome: "Laurizy Perdida",
//     idade:17,
//     cpf:"064.126.876-30"
// }
// objEstudante.cpf = "135.679.854-60"
// console.log(objEstudante)
// //crie um vetor com dois objetos de Estudantes
// //nome, cpf, idade
// //mostre no console.log
// const vetorojb2Estudante = [
//     {
//         nome: "Laurizy Perdida",
//         idade:17,
//         cpf:"064.126.876-30"
//     },
//     {
//         nome: "Laurizy Perdida",
//         idade:17,
//         cpf:"064.126.876-30"
//     }
// ]
// //Type
// const objPessoa: {
//     nome: string;
//     idade: number;
// } = {
//     nome: "Geovanna",
//     idade:17
// }
// //Funçoes
// function soma (a,b){
//     return a+b;
// }
//  function somaA(a,b){
//     return a+b;
//  }
// const somaB = function (a,b){
//     return a+b;
// }
// const somaC = (a,b)=>{
//     return a+b;
// }
// const somD= (a,b)=>a+b;
// const v = [1,2,3,4,5]
// function f(x){
//     if(x==5){
//         return true
//     }
//     else{
//         return false
//     }
// }
// v.find(f)
// v.find((x)=>x==5)
// //crie uma funçao que receba um vetor e some 
// //os numeros do vetor 
// //somaNumeros([1,2,3,4])
// //10
// //Quando o vetor passado for vazio
// //Retorna undefined
// function somanumeros(vetor) {
//     if (vetor.length === 0) {
//         return undefined;
//     }
//     return vetor.reduce((a,b) => a + b, 0);
// }
// console.log(somaNumeros([1, 2, 3, 4])); 
// console.log(somaNumeros([])); 
// //quando o vetor passado for vazio:
// ///Retorna undefined
// function somaNumeros(vetor:number[]){
//     if (vetor.length === 0){
//         return undefined
//     } 
// let soma = 0
// for (let i = 0; i < vetor.length;i++){
//     const element = vetor[i];
//     soma = soma+element
// }
// return soma
// }
// console.log(`o valor da soma é: ${somaNumeros([1,2,3,4])}`)
// //Elevado(2**2)
// //Crie uma funçao que receba um vetor e um numero
// //Sua funçao deve somar as posiçoes do vetor elevando 
// // ao numero recebido por parametro
// //Exemplo
// //somaElevado([1,2,3],2) //12
// //Se o vetor for vazio devolva undefined
// function somaElevado(vetor:number[],numero:number){
//     if(vetor.length===0) return undefined
//     let soma = 0
// for (let i = 0; i < vetor.length;i++){
//     const element = vetor[i]**numero;
//     soma = soma+element
// }
// return soma
// }
// console.log(somaElevado([1,2,3],3))
// //Faça uma função que receba 2 numeros e devolva um vetor da sequencia dos numeros
// //Ex sequencia(10,16) // [10,11,12,13,14,15,16]
// //Ex sequencia(10,11) // [10,11]
// // Ex sequencia(10,10) // [10]
const promise_1 = __importDefault(require("mysql2/promise"));
const access = {
    host: "localhost",
    user: 'root',
    password: "",
    database: 'banco1023b',
    port: 3306
};
const conn = promise_1.default.createConnection(access);
conn
    .then((conn) => {
    console.log("Conectou no banco");
    conn.query("SELECT * FROM estudantes")
        .then(query => {
        // const resultado = query[0]
        // const estruturaTabela = query[1]
        const [resultado, estruturaTabela] = query;
        console.log(resultado);
    })
        .catch((erro) => {
        if (erro.code === "ER_NO_SUCH_TABLE") {
            console.log("ERRO: Não existe a tabela que você está tentando usar. Crie a tabela no banco de dados.");
        }
        else if (erro.code === "ER_PARSE_ERROR") {
            console.log("ERRO: VOCÊ DIGITOU SUA QUERY DE FORMA ERRADA. CONFIRA OS PARENTESES, VIRGULAS E NOME DAS COLUNAS");
        }
        else {
            console.log(erro);
        }
    });
    conn.end()
        .then(() => console.log("Finalizei a conexão"))
        .catch(() => console.log("Não Finalizei a conexão"));
    //.finally(()=>console.log("Não importa se executou o THEN OU CATCH vou executar o FINALLY"))
})
    .catch(erro => {
    console.log("Não conectou :(");
    if (erro.code === "ECONNREFUSED") {
        console.log("ERRO: LIGUE O LARAGÃO!!! CABEÇA!");
    }
    else if (erro.code === "ER_BAD_DB_ERROR") {
        console.log("ERRO: CONFIRA O NOME DO BANCO DE DADOS OU CRIE UM NOVO BANCO COM O NOME QUE VOCÊ COLOCOU LÁ NA CONEXÃO");
    }
    else if (erro.code === "ER_ACCESS_DENIED_ERROR") {
        console.log("ERRO: CONFIRA O USUÁRIO E SENHA NA CONEXÃO");
    }
    else {
        console.log(erro);
    }
});
