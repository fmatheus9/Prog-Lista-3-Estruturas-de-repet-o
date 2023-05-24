function ex01() {
  cont = 1
  while (cont <= 5) {
    let a = Number(prompt("Valores de A" + cont + ":"))
    let b = Number(prompt("Valores de B" + cont + ":"))
    let c = Number(prompt("Valores de C" + cont + ":"))
    let d = Number(prompt("Valores de D" + cont + ":"))
    cont++
  }
}

function ex02() {
  cont = 5
  let ingressos = 120
  let desp = 200
  while (cont >= 1) {
    let lucro = cont * ingressos - desp
    console.log(
      "A R$" + cont + " e " + ingressos + " ingressos " + " = " + lucro
    )
    cont = cont - 0.5
    ingressos = ingressos + 26
  }
}

function exe3() {
  let idade
  let f1 = 0
  let f2 = 0
  let f3 = 0
  let f4 = 0
  let f5 = 0
  let conta = 1 
  while (conta <= 8) {
    idade = Number(prompt(`Informe a idade ${conta}`))
    if (idade >= 0 && idade <= 15) {
      f1++ 
    } else if (idade >= 16 && idade <= 30) {
      f2++
    } else if (idade >= 31 && idade <= 45) {
      f3++
    } else if (idade >= 46 && idade <= 60) {
      f4++
    } else if (idade > 60) {
      f5++
    }
    conta++ 
  }
  alert(`Fx1: ${f1} Fx2: ${f2} Fx3: ${f3} Fx4: ${f4} Fx5: ${f5}`)
  alert(`% Fx1: ${(f1 / 8) * 100} %Fx5: ${(f5 / 8) * 100}`)
}

function exe4() {
  let numero = prompt(`Informe o número desejado`)
  let saida = ""
  for (let conta = 0; conta <= 10; conta++) {
    saida = saida + "\n " + `${numero} x ${conta} = ${numero * conta}`
  }
  alert(saida)
}

function exe05(){
  let i=1; 
  let k=1
  do{
    while(i<=10){
      console.log(`${k}x${i}=${k*i}`)
      i++
    }
    k++
    i=1
    console.log("=-=-=-=-=-=-=-=-=-=-=-=-=")
  }while(k<=10)
}

function exe06() {
  let codigo
  let valor
  let totalVista = 0
  let conta = 1
  let totalPrazo = 0
  while (conta <= 5) {
    codigo = prompt("Informe P ou V").toUpperCase()
    valor = Number(prompt("Informe valor"))
    if (codigo == "P") {
      totalPrazo += valor
    } else if (codigo == "V") {
      totalVista += valor
    } else {
      alert("Código inválido, valor não será considerado")
      continue
    }
    conta++
  }
  let total = totalVista + totalPrazo
  let valorParcela = totalPrazo / 3
  document.getElementById("result6").innerHTML = `Total à vista ${totalVista} Total à prazo ${totalPrazo} Total ${total} Primeira parcela ${valorParcela.toFixed(2)}`
}


function exe07() {
  let idade, altura, peso, qidade, media, v, ip, porc, p
  for (i = 0; i >= 5; i++) {
    idade = parseInt(prompt("Digite a idade: "))
    altura = parseInt(prompt("Digite a altura: "))
    peso = parseInt(prompt("Digite o peso: "))
    if (idade >= 50) {
      qidade++
    }
    if (idade >= 10 && idade <= 20) {
      v++
      ip += altura
    }
    if (peso <= 40) {
      p++
    }
  }
  media = ip / v
  porc = (p * 100) / 5
  console.log("Pessoas com idade superior a 50: ", qidade)
  console.log("Media da altura das pessoas entre 10 e 20 anos: ", media)
  console.log("Porcentagem de pessoas com peso inferior a 40kg: ", porc)
}


function exe08() {
  let idade, peso, altura, olhos, q, cabelo, a, midade, o, r
  for (let i = 0; i >= 6; i++) {
    idade = parseInt(prompt("Digite a idade: "))
    altura = parseInt(prompt("Digite a altura em cm: "))
    peso = parseInt(prompt("Digite o peso: "))
    olhos = prompt("Entre a cor do seu olho: ")
    cabelo = prompt("Entre a cor do seu cabelo: ")
    if (idade >= 50 && peso <= 60) {
      q++
    }
    if (altura <= 150) {
      a++
      midade += idade
    }
    if (olhos == "A") {
      o++
    }
    if (cabelo == "R" && olhos != "A") {
      r++
    }
  }
  let media = midade / a
  let porc = (o * 100) / 6
  console.log("Pessoas com mais de 50 anos e menos de 60kg de peso: ", q)
  console.log("Media da idade das pessoas com menos de 1,50m: ", media)
  console.log("Porcentagem de pessoas com olhos azuis: ", porc)
  console.log("Quantidade de ruivos que não possuem olhos azuis: ", r)
}

function ex09() {
  let idade = 0
  let peso = 0
  let altura = 0
  for (cont = 1; cont <= 10; cont++) {
    let x = Number(prompt(`Informe a idade ${cont}: `))
    let y = Number(prompt(`Informe o peso ${cont}: `))
    let z = Number(prompt(`Informe a altura ${cont}: `))

    idade = idade + x

    if ((y > 90 && z < 1, 50)) {
      peso++
    }

    if ((x >= 10 && x <= 30 && z > 1, 90)) {
      altura++
    }
  }
  alert(idade / 10)
  alert(peso)
  alert((altura * 10) / 100)
}

function ex10() {
  amcP = 0
  acmPrimo = 0
  for (cont = 1; cont <= 10; cont++) {
    let n = Number(prompt(`Informe o ${cont}º número: `))
    if (n % cont == 0) {
      amcP = amcP + n
    }
    //"2, 3, 7, 11, 13, 17, 19, 23, 29, 31"
    if (n % cont != 0) {
      acmPrimo = acmPrimo + n
    }
  }
  alert(amcP)
  alert(acmPrimo)
}

function exe20() {
  let opcao
  do {
    opcao = Number(
      prompt(
        "Menu de opções \n 1. Média aritmética \n 2. Média ponderada \n 3. Sair"
      )
    )
    switch (opcao) {
      case 1:
        let nota1 = Number(prompt("Nota 1"))
        let nota2 = Number(prompt("Nota 2"))
        alert("Média aritmética " + (nota1 + nota2) / 2)
        break
      case 2:
        let nota1p = Number(prompt("Nota 1"))
        let peso1 = Number(prompt("Peso da Nota 1"))
        let nota2p = Number(prompt("Nota 2"))
        let peso2 = Number(prompt("Peso da Nota 2"))
        let nota3p = Number(prompt("Nota 3"))
        let peso3 = Number(prompt("Peso da Nota 3"))
        alert(
          "Média ponderada " +
            (nota1p * peso1 + nota2p * peso2 + nota3p * peso3) /
              (peso1 + peso2 + peso3)
        )
        break
      case 3:
        alert("Opção 3 selecionada, programa será encerrado")
        break
      default:
        alert("Opção inválida")
    }
  } while (opcao != 3) 
}
function ex21() {
  let codigo
  let cont1 = 0
  let cont2 = 0
  let cont3 = 0
  let cont4 = 0
  let cont5 = 0
  let cont6 = 0
  let cont7 = 0
  do {
    codigo = Number(
      prompt(
        "Informe o código da votação: \n1 - Candidato 1.\n2 - Candidato 2.\n3 - Candidato 3.\n4 - Candidato 4.\n5 -  Voto nulo.\n6 - Voto em branco.\n0 - Encerrar contagem."
      )
    )
    switch (codigo) {
      case 0:
        alert("Contagem encerrada.")
      case 1:
        cont1++
        break
      case 2:
        cont2++
        break
      case 3:
        cont3++
        break
      case 4:
        cont4++
        break
      case 5:
        cont5++
        break
      case 6:
        cont6++
        break
      default:
        alert("Código inválido.")
    }
    cont7++
  } while (codigo != 0)
  alert("Total de votos: " + cont7)
  alert(
    `Quantidade de votos do primeiro candidato: ${cont1}\nQuantidade de votos do segundo candidato: ${cont2}\nQauntidade de votos do terceiro candidato: ${cont3}\nQunatidade de votos do quarto candidato: ${cont4}\nQuantidade de votos nulos: ${cont5}\nQuantidade de votos em branco: ${cont6}`
  )
  alert(
    `Porcentagem de votos nulos sobre o total de votos: ${(
      (cont5 * 100) /
      cont7
    ).toFixed(2)}%`
  )
  alert(
    `Porcentagem de votos brancos sobre o total de votos: ${(
      (cont6 * 100) /
      cont7
    ).toFixed(2)}%`
  )
}

function ex23() {
  let opcao
  do {
    opcao = Number(
      prompt(
        "Menu de opções: \n1-Novo salário.\n2-Férias.\n3-Décimo terceiro.\n4-Sair."
      )
    )
    switch (opcao) {
      case 1:
        let salario = Number(prompt("Informe o salário atual: "))
        let nsalario
        if (salario < 210) {
          nsalario = (salario / 100) * 15
          alert(`Novo salário com o aumento de 15% = ${nsalario + salario}`)
        } else if (salario >= 210 && salario < 600) {
          nsalario = (salario / 100) * 10
          alert(`Novo salário com o aumento de 10% = ${nsalario + salario}`)
        } else {
          nsalario = (salario / 100) * 5
          alert(`Novo salário com o aumento de 5% = ${nsalario + salario}`)
        }
        break

      case 2:
        let salariof = Number(prompt("Informe o salario: "))
        let salariofe
        salariofe = salariof + (1 / 3) * salariof
        alert(`Salário durante as férias: R$${salariofe.toFixed(2)}`)
        break

      case 3:
        let sala = Number(prompt("Informe o salário: "))
        let mes = Number(
          prompt("Informe o número de meses trabalhados no ano: ")
        )
        let decter = (sala * mes) / 12
        alert("Décimo terceiro: R$" + decter.toFixed(2))
        break

      case 4:
        alert("Programa finalizado.")
        break

      default:
        alert("Valor inválido.")
    }
  } while (opcao != 4)
}
