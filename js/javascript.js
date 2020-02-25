function mostrar(){
    document.getElementById("llaves").style.display = 'none';
    document.getElementById("medicion").style.display = 'none';
    document.getElementById("autos").style.display = 'none';
    document.getElementById("pinzas").style.display = 'none';
    document.getElementById().style.display = 'block';
}
function mostrarMedicion(){
    document.getElementById("llaves").style.display = 'none';
    document.getElementById("medicion").style.display = 'block';
    document.getElementById("autos").style.display = 'none';
    document.getElementById("pinzas").style.display = 'none';
}
function mostrarAutos(){
    document.getElementById("llaves").style.display = 'none';
    document.getElementById("medicion").style.display = 'none';
    document.getElementById("autos").style.display = 'block';
    document.getElementById("pinzas").style.display = 'none';
}
function mostrarPinzas(){
    document.getElementById("llaves").style.display = 'none';
    document.getElementById("medicion").style.display = 'none';
    document.getElementById("autos").style.display = 'none';
    document.getElementById("pinzas").style.display = 'block';
}

$(document).ready(function(){
    $('.subir').click(function(){
        $('body, html').animate({
            scrollTop:'0px'
        });
    });
});