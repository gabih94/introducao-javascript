let adicionarPaciente = document.querySelector("#buscarPaciente");

adicionarPaciente.addEventListener("click", function(){
    console.log("Buscando Paciente...")
    let xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function(){
        let resposta = xhr.responseText;

        let pacientes = JSON.parse(resposta);

        pacientes.forEach(function(paciente){
            adicionaPacienteTabela(paciente);
        }) 
    });
    
    xhr.send();
});
