 var elementosDuvida = document.querySelectorAll(".bloger")

 elementosDuvida.forEach(function (bloger){
    bloger.addEventListener('click', function () {
        bloger.classList.toggle('ativa')
    })
 })