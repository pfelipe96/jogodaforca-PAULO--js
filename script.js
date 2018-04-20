let entrada = document.querySelector("input");
let botaoInput = document.querySelector("button");
let palavraColocar = document.querySelectorAll("section p");
let palavraVerificacao = "palavra";
let verificaoErro = 0;

botaoInput.onclick = function(){
    let palavraInput = entrada.value;

    if(verificaoErro  <= 6){
        for(let i = 0; i < palavraVerificacao.length; i++){
            if(palavraInput == palavraVerificacao[i]){
                palavraColocar[i].innerHTML = palavraInput;
            }
        }
    }else{
        alert("Gamer Over");
    }
}