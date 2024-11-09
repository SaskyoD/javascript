base = 10;
altura = 20;
function areadoretangulo(base,altura){                   //funcão
    let areadoretangulo = base * altura;
    return areadoretangulo;
}
console.log(areadoretangulo(base,altura));     //aqui voce imprime

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function saudacao(){
    return "Bom Dia!";       
}
saudacao();     //aqui voce chama a funcao, "chamada" se nao por nao aparece
console.log(saudacao());                 //aqui vc imprime tbm, "imprime,imprime,imprime... tipo impressora"

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function saudacao2(nome2) {
    return `Bom Dia ${nome2}`;            //dentro do desse return consigo alterar a informação
}
console.log(saudacao2('João'));
console.log(saudacao2('José'));
console.log(saudacao2('Julia'));

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
                         //arrows
const saudacao3 = nome3 => `Bom Dia ${nome3}`;
console.log(saudacao3('Jean'));
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

valor1 = 5
valor2 = 15
function somade2numeros(valor1,valor2){           //Como poderia ser feita uma função para somar dois valores 
    let resultado = valor1 + valor2;             //e retornar o numero no console?
    return resultado;
}
console.log(somade2numeros(valor1,valor2));

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
                   //funcao de raiz
const raiz = function(n){     //raiz dentro da funcao
    return n ** 0.5;
};    //ponto e virgula pq foi criado uma linha
console.log(raiz(25));

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
                 //segunda forma mais nova
const raiz2 = n => n ** 0.5;     //no ECMA , arrows
console.log(raiz2(275));

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
           //estrutura do if-else
//if (condição) {//se                                               //jogo http://lab.reaal.me/jsrobot/
    //bloco de codigo executado se a condicao for verdadeira
//} else {//se nao
    ////bloco de codigo executado se a condicao for falsa
//}

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function verificarParOuImpar(numero) {
    let resultado9;
    if (numero % 2 === 0) {
        resultado9 = numero + " é par";
    } else if (numero % 2 === 0) {
        resultado9 = numero + " é impar";
    }
    return resultado9;
}
console.log(Number(verificarParOuImpar('a'))); //chamada da funcao 

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function verificarParOuImpar1(numero0) {
    let resultado8;
    if (numero0 % 2 === 0) {
        resultado8 = Number(numero0) + " é par";
    } else if (numero0 % 2 === 1) {
        resultado8 = Number(numero0) + " é impar";
    }
    return resultado8;
}
console.log((verificarParOuImpar1(5))); //chamada da funcao

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function verificarMaioridade(idade) {
    if (idade >= 18) {
        return 'Maior de Idade';
    } else {
        return 'Menor de Idade';
    }
}
console.log(verificarMaioridade(20));

