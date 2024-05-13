let PesoDoUsuario = Number(prompt("escreva seu peso"))
let AlturaDoUsuario = Number(prompt("escreva sua altura"))
let imc = PesoDoUsuario / (AlturaDoUsuario * 2)
if (imc >= 18.0 && imc <= 24.9){
    alert("você está saudável")
} else {
    alert("você nao está saudável")
}