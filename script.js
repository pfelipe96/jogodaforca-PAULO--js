let entrada = document.querySelector("input");
let botaoInput = document.querySelector("button");
let outputErradas = document.querySelector(".erradas");
let palavraColocar = document.querySelectorAll("section p");
let countErradas = document.querySelector(".countErradas");
let palavraVerificacao = "palavra";
let verificaoErro = 0;

botaoInput.onclick = function(){
    let palavraInput = entrada.value;
    let verificaoErroLocal = 0;
    
    if(entrada != ""){        
      if(verificarSeGanhou()){
            if(verificaoErro < 6){
                for(let i = 0; i < palavraVerificacao.length; i++){
                    if(palavraInput == palavraVerificacao[i]){
                        palavraColocar[i].innerHTML = palavraInput;
                    }else{
                        verificaoErroLocal++;
                    }
                }
                
                if(verificaoErroLocal == palavraVerificacao.length){
                    outputErradas.innerHTML += palavraInput;
                    countErradas.innerHTML = verificaoErro; 
                    verificaoErro++;
                }
            }else{
                alert("Gamer Over");
            }
        }else{
            alert("Ganhou o jogo"); 
        }
    }else{
        alert("Insira algum valor valido"); 
    }
}

function verificarSeGanhou(){
    let returnValue = false;
        console.log("Entrou");
        if(palavraColocar.innerHTML === palavraVerificacao){
            console.log("Entrou");
            returnValue = false;
        }else{
            console.log("Entrou");
            returnValue = true;
            break;
        }
    
    return returnValue;
}