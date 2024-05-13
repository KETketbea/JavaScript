let NumeroSorteado = Math.floor(Math.random()*10);

while (true) {
    var Usuario = prompt("digite um número de 0 a 10:");
    if(Usuario == NumeroSorteado){
        alert("Você acertou!");
        break
    } else {
        alert("Você errou,tente de novo.")
    }
}
