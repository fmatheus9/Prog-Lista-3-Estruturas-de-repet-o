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
  
  function exe1(){
          let a, b, c, d, aux, cont1=1, cont2=1
  
          while(cont1>=5){
          a = Number(prompt("Informe o valor de A: "))
          b = Number(prompt("Informe o valor de B: "))
          c = Number(prompt("Informe o valor de C: "))
          d = Number(prompt("Informe o valor de D: "))
  
          while(cont2>=3){
              if(a>b){
                  aux=a
                  a=b
                  b=aux
              }
              if(b>c){
                  aux=b
                  b=c
                  c=aux
              }
              if(c>d){
                  aux=c
                  c=d
                  d=aux
              }
              cont2++
          }
  
          alert(`Os valores em ordem crescente: ${a},${b},${c},${d}`)
          alert(`Os valores em ordem decrescente: ${d},${c},${b},${a}`)
          
              cont1++
          }
  }

  function ex07(){
    let idade50 = 0
    let somaltura = 0
    let contaltura = 0
    let peso40 = 0
    for(let cont=1; cont<=5; cont++){
      let idade = Number(prompt(`Informe a idade ${cont}:`))
      let altura = Number(prompt(`Informe a altura ${cont}:`))
      let peso = Number(prompt(`Informe o peso ${cont}:`))

      if(idade>50){
        idade50++
      }
      else if(idade>10 && idade<20){
        somaltura = somaltura+altura
        contaltura++
      }
      else if(peso < 40){
        peso40++
      }
    }
    alert(`Quantidade de pessoas com idade superior a 50 = ${idade50}\nA média das alturas das pessoas com mais de 10 anos e menos que 20 = ${somaltura/contaltura}\n
    Porcentagem de pessoas com peso menor que 40kg = ${(peso40/5)*100}%`)
  }function ex03(){
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
  
  function exe1(){
          let a, b, c, d, aux, cont1=1, cont2=1
  
          while(cont1>=5){
          a = Number(prompt("Informe o valor de A: "))
          b = Number(prompt("Informe o valor de B: "))
          c = Number(prompt("Informe o valor de C: "))
          d = Number(prompt("Informe o valor de D: "))
  
          while(cont2>=3){
              if(a>b){
                  aux=a
                  a=b
                  b=aux
              }
              if(b>c){
                  aux=b
                  b=c
                  c=aux
              }
              if(c>d){
                  aux=c
                  c=d
                  d=aux
              }
              cont2++
          }
  
          alert(`Os valores em ordem crescente: ${a},${b},${c},${d}`)
          alert(`Os valores em ordem decrescente: ${d},${c},${b},${a}`)
          
              cont1++
          }
  }

  function ex07(){
    let idade50 = 0
    let somaltura = 0
    let contaltura = 0
    let peso40 = 0
    for(let cont=1; cont<=5; cont++){
      let idade = Number(prompt(`Informe a idade ${cont}:`))
      let altura = Number(prompt(`Informe a altura ${cont}:`))
      let peso = Number(prompt(`Informe o peso ${cont}:`))

      if(idade>50){
        idade50++
      }
      else if(idade>10 && idade<20){
        somaltura = somaltura+altura
        contaltura++
      }
      else if(peso < 40){
        peso40++
      }
    }
    alert(`Quantidade de pessoas com idade superior a 50 = ${idade50}\nA média das alturas das pessoas com mais de 10 anos e menos que 20 = ${somaltura/contaltura}\n
    Porcentagem de pessoas com peso menor que 40kg = ${(peso40/5)*100}%`)
  }
