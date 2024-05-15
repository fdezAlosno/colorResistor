let primeraBanda = document.querySelectorAll(".primera-banda");
let segundaBanda = document.querySelectorAll(".segunda-banda");
let terceraBanda = document.querySelectorAll(".tercera-banda");
let cuartaBanda = document.querySelectorAll(".cuarta-banda");

let bandaResistencia1 = document.getElementById("banda-1-1");
let bandaResistencia2 = document.getElementById("banda-2-1");
let bandaResistencia3 = document.getElementById("banda-3-1");
let bandaResistencia4 = document.getElementById("banda-4-1");

let unidad = 0;
let decena = 0;
let multiplicador;
let tolerancia = 0;
let result;
let color;

function calcularResistencia() {
    let resistenciaTotal = (unidad+decena)*multiplicador

    if (resistenciaTotal <1000) {
        result = (resistenciaTotal + "Ω" + " ±" + tolerancia + "%")
    } else if (resistenciaTotal >= 1000 && resistenciaTotal < 1000000) {
        resistenciaTotal = resistenciaTotal /1000
        result=(resistenciaTotal + "kΩ" + " ±" + tolerancia + "%")
    } else if (resistenciaTotal >= 1000000 && resistenciaTotal < 1000000000) {
        resistenciaTotal = resistenciaTotal /1000000
        result=(resistenciaTotal + "MΩ" + " ±" + tolerancia + "%")
    } else if (resistenciaTotal >= 1000000000) {
        resistenciaTotal = resistenciaTotal /1000000000
        result=(resistenciaTotal + "GΩ" + " ±" + tolerancia + "%")
    } else {
        result = "Faltan datos"
    }
    return (result)
}

function mostrarValorResistencia() {
    if (result !== undefined) {
        alert ("EL valor de la resistencia es de: " + result)
    } else {
        alert ("Faltan datos")
    }
    
}

primeraBanda.forEach(element => {
    element.addEventListener("click", (element => {
        primeraBanda.forEach(element => {
            element.style.border="1px solid #333";
        });
        let primeraBandaSeleccionada = element.target;
        primeraBandaSeleccionada.style.border="1px solid #999";
        unidad = parseFloat(primeraBandaSeleccionada.dataset.valor);
        color = window.getComputedStyle(primeraBandaSeleccionada).getPropertyValue('background-color');
        bandaResistencia1.style.backgroundColor = color
        calcularResistencia()

    }));
});

segundaBanda.forEach(element => {
    element.addEventListener("click", (element => {
        segundaBanda.forEach(element => {
            element.style.border="1px solid #333";
        });
        let segundaBandaSeleccionada = element.target;
        segundaBandaSeleccionada.style.border="1px solid #999";
        decena = parseFloat(segundaBandaSeleccionada.dataset.valor);
        color = window.getComputedStyle(segundaBandaSeleccionada).getPropertyValue('background-color');
        bandaResistencia2.style.backgroundColor = color
        calcularResistencia()
    }));
});

terceraBanda.forEach(element => {
    element.addEventListener("click", (element => {
        terceraBanda.forEach(element => {
            element.style.border="1px solid #333";
        });
        let terceraBandaSeleccionada = element.target;
        terceraBandaSeleccionada.style.border="1px solid #999";
        multiplicador =parseFloat(terceraBandaSeleccionada.dataset.valor);
        color = window.getComputedStyle(terceraBandaSeleccionada).getPropertyValue('background-color');
        bandaResistencia3.style.backgroundColor = color
        calcularResistencia()
    }));
});

cuartaBanda.forEach(element => {
    element.addEventListener("click", (element => {
        cuartaBanda.forEach(element => {
            element.style.border="1px solid #333";
        });
        let cuartaBandaSeleccionada = element.target;
        cuartaBandaSeleccionada.style.border="1px solid #999";
        tolerancia = cuartaBandaSeleccionada.dataset.valor;
        color = window.getComputedStyle(cuartaBandaSeleccionada).getPropertyValue('background-color');
        bandaResistencia4.style.backgroundColor = color
        calcularResistencia()
    }));
});
