function ex03(){
  cont = 1
  ft1 = 0
  ft2 = 0
  ft3 = 0
  ft4 = 0
  ft5 = 0
  while(cont <= 8){
    let idade = Number(prompt("Informe a idade "+cont))
    cont++
  
    if (idade <= 15) {
      ft1++
    } 
    else if (idade > 15 && idade <= 30) {
      ft2++
    } 
    else if (idade > 30 && idade <= 45) {
      ft3++
    }
    else if((idade>46) && (idade<=60)){
      ft4++
    }
    else if((idade>60)){
      ft5++
  }
}
  console.log("A= 1ª: "+ft1+", 2ª: "+ft2+", 3ª: "+ft3+", 4ª: "+ft4+ ", 5ª: "+ft5)
  console.log("B= "+(ft1*100)/8+"%")
  console.log("C= " + (ft5 * 100) / 8+"%")
}

function ex04(){
  x = Number(prompt("Informe um número: "))
  cont = 1
  while(cont <= 10){
    console.log(x +" x "+ cont + " = "+ x*cont)
    cont++
  }
}

function ex05(){
  n1 = 1
  n2 = 2
  n3 = 3
  n4 = 4
  n5 = 5
  n6 = 6
  n7 = 7 
  n8 = 8 
  n9 = 9 
  n10 = 10
  cont = 1
  while(cont <=10){
    console.log(n1 + " x " + cont + " = " + n1 * cont)
    console.log(n2 + " x " + cont + " = " + n2 * cont)
    console.log(n3 + " x " + cont + " = " + n3 * cont)
    console.log(n4 + " x " + cont + " = " + n4 * cont)
    console.log(n5 + " x " + cont + " = " + n5 * cont)
    console.log(n6 + " x " + cont + " = " + n6 * cont)
    console.log(n7 + " x " + cont + " = " + n7 * cont)
    console.log(n8 + " x " + cont + " = " + n8 * cont)
    console.log(n9 + " x " + cont + " = " + n9 * cont)
    console.log(n10 + " x " + cont + " = " + n10 * cont)
    cont++
  }
}

function ex01(){
  cont = 1
  while(cont <= 5){
    let a =Number(prompt("Valores de A" + cont + ":"))
    let b = Number(prompt("Valores de B" + cont + ":"))
    let c = Number(prompt("Valores de C" + cont + ":"))
    let d = Number(prompt("Valores de D" + cont + ":"))
    cont++
  }
  

}

function ex02(){
  cont = 5
  let ingressos = 120
  let desp = 200
  while(cont>=1){
    let lucro = cont * ingressos - desp
    console.log("A R$"+cont+" e " + ingressos + " ingressos " + " = "+ lucro)
    cont = cont - 0.5
    ingressos = ingressos + 26
  }
}
