let pacientesRemove = document.querySelectorAll(".paciente");

let tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event){
    
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function(){
        event.target.parentNode.remove();
    },500);
});


/*pacientesRemove.forEach(function(paciente){
    paciente.addEventListener("dblclick", function(){
        console.log("Fui clicado");
        this.remove();
    });
});*/