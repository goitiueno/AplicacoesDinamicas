function converterTemperatura(event) {
    event.preventDefault();
    var valorTemperatura = document.getElementById("temperatura").value;
    var valorOrigem = document.getElementById("origem").value;
    var valorDestino = document.getElementById("destino").value;
    var valorResultado = valorTemperatura;
    if(valorOrigem == "1" && valorDestino == "2"){
       valorResultado = (valorTemperatura -32)/1.8     
    }
    if(valorOrigem == "2" && valorDestino == "1"){
       valorResultado = (valorTemperatura *1.8) + 32   
    }
    document.getElementById("resultado").value = valorResultado;
}