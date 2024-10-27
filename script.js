function validarRespuesta() {
    const respuestaCorrecta = "B";
    const radios = document.getElementsByName("respuesta");
    let seleccionada = "";

    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            seleccionada = radios[i].value;
            break;
        }
    }

    const resultado = document.getElementById("resultado");
    
    if (seleccionada === "") {
        resultado.textContent = "Por favor, selecciona una respuesta.";
        resultado.style.color = "red";
    } else if (seleccionada === respuestaCorrecta) {
        resultado.textContent = "¡Correcto! Has seleccionado la respuesta correcta.";
        resultado.style.color = "green";
    } else {
        resultado.textContent = "Incorrecto. Intenta de nuevo.";
        resultado.style.color = "red";
    }
}
