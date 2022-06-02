let titulo = document.querySelector('.titulo');
titulo.textContent = 'Aparecida Nutricionista';

let pacientes = document.querySelectorAll(".paciente");

for (let i = 0; i < pacientes.length; i++) {

    let paciente = pacientes[i];

    const tdPeso = paciente.querySelector(".info-peso");
    let peso = tdPeso.textContent;

    let tdAltura = paciente.querySelector(".info-altura");
    let altura = tdAltura.textContent;

    let tdImc = paciente.querySelector(".info-imc");

    let pesoEhValido = validaPeso(peso);
    let alturaEhValida = validaAltura(altura);

    if (!pesoEhValido) {
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    } 
    if (!alturaEhValida) {
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }

    if (alturaEhValida && pesoEhValido) {
        let imc = calculaImc(peso,altura);
        tdImc.textContent = imc;
       
    } 
}

function validaPeso(peso){
    return !!(peso >= 0 && peso <= 400);
    /* mesmo código, mesma função
    if (peso >= 0 && peso <= 400){
        return true;
    }else{
        return false;
    }*/
}


function validaAltura(altura){
    return !!(altura >=0 && altura <=3.00);
}

function calculaImc(peso, altura){
    let imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);  
    // define a quantidade de unidades decimais vai ser imprimida no navegador//
}