let adicionarPaciente = document.querySelector("#buscarPaciente");

adicionarPaciente.addEventListener("click", function(){
    console.log("Buscando Paciente...")
    let xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function(){
        let erro = document.querySelector("#erro-ajax");

        if( xhr.status == 200){
            erro.classList.add("invisivel");
            let resposta = xhr.responseText;
    
            let pacientes = JSON.parse(resposta);
    
            pacientes.forEach(function(paciente){
                adicionaPacienteTabela(paciente);
            }); 
        }else{
            console.log(xhr.status);
            console.log(xhr.responseText);
                        erro.classList.remove("invisivel");

        }
    });

    xhr.send();
    
});
