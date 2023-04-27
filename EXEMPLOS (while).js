function exemplo1(){
    let conta = 1
    while(conta <= 10){
        console.log("Boa noite! " + conta)
        conta = conta+1 // incremento de 1, valia eu somei 1 vira 2, valia 2 soma 1 vira 3 ...
    }
    console.log("Depois do while " + conta)
}

function somaidades(){
    n1 = 1
    soma = 0
    while(n1 <= 10){
        let idade = Number(prompt("Informe idade: "+n1))
        n1 = n1+1 //contador
        soma = soma+idade // acumulador
        console.log("Soma = "+soma)
    }
    console.log("Média de idades = " + soma/10)
}

function somaidades2(){
    let n2 = Number(prompt("Quantas idades vao ser? "))
    n1 = 1
    soma = 0
    while(n1 <= n2){
        let idade = Number(prompt("Informe idade: "+n1))
        n1 = n1+1 //contador
        soma = soma+idade // acumulador
        console.log("Soma = "+soma)
    }
    console.log("Média de idades = " + soma/n2)
}

function tabuada(){
    let n = Number(prompt("Informe o número: "))
    x = 0
    while(x <= 10){
        console.log(n+" x "+ x + " = "+n*x)
        x = x+1
    }
}
