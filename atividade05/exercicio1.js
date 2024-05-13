let valor = 1000
let cupom = prompt("informe qual é código promocional");

switch (cupom.toUpperCase()) {
    case "DESC1":
        valorCupom = 0.005
        desconto = valor - (valorCupom * valor)

        alert(`você conseguiu ${valorCupom * 100}% de desconto da sua compra de ${valor}, o valor final ficou em ${desconto}`);
        break;


    case "DESC2":
        valorCupom = 0.10
        desconto = valor - (valorCupom * valor)

        alert(`você conseguiu ${valorCupom * 100}% de desconto da sua compra de ${valor}, o valor final ficou em ${desconto}`);
        break;


    case "DESC3":
        valorCupom = 0.15
        desconto = valor - (valorCupom * valor)

        alert(`você conseguiu ${valorCupom * 100}% de desconto da sua compra de ${valor}, o valor final ficou em ${desconto}`);
        break;


    case "DESC4":
        valorCupom = 0.20
        desconto = valor - (valorCupom * valor)

        alert(`você conseguiu ${valorCupom * 100}% de desconto da sua compra de ${valor}, o valor final ficou em ${desconto}`);
        break;


    case "DESC5":
        valorCupom = 0.25
        desconto = valor - (valorCupom * valor)

        alert(`você conseguiu ${valorCupom * 100}% de desconto da sua compra de ${valor}, o valor final ficou em ${desconto}`);
        break;

    default: alert("erro, o código que você informou não existe!")
    break;
}
