swal.fire({
    title: "Bienvenido Amigo!",
    text: "Por favor, responde ¿Sigues alguno de los 5 Grandes?",
    confirmButtonText: "Si",
    footer:"Esta pagina esta hecha con fines de apreciasion y hacer la disfrutacion de esta misma",
    padding:"90px",
    background:"#015",
    backdrop:"true",
    icon: "question",
    showCancelButton:"true",
    cancelButtonText:"No!",
    cancelButtonAriaLabel:"No!",
    allowOutsideClick: false,
});

window.addEventListener("load", function() {
 var imagenes = document.querySelectorAll ("img");
 var imagengrande = document.createElement ("img")

 var mostrarFotoGrande = (f) => {
    switch(f.target.id){
        case "riversito":
        cambioImagen ("riversito");    
        break;
        case "boquita":
            cambioImagen ("boquita");     
        break;
        case "elrojo":
            cambioImagen ("elrojo");     
        break;
        case "cuervito":
            cambioImagen ("cuervito");     
        break;
        case "laacade":
            cambioImagen ("laacade");     
        break;
    }
 }

 var cambioImagen = (id) => {
    var espacio = document.getElementById ("espacio");
    var source = document.getElementById (id).getAttribute("src");
    imagengrande.setAttribute("src",source)
    imagengrande.classList.add("expandir");
    espacio.appendChild(imagengrande);
 }
 
 imagenes.forEach((i) => {
    i.addEventListener("mousemove", mostrarFotoGrande);
 });

})

var inputs = document.getElementsByClassName('formulario__input');
for (var i = 0; i < inputs.length; i++){
    inputs [i].addEventListener ('keyup', function(){
        if (this.value.length>=1) {
            this.nextElementSibling.classList.add('fijar');
        } else {
            this.nextElementSibling.classList.remove('fijar');
        }
    });

}
