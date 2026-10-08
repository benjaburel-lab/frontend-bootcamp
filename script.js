let mensajeMostrado= false;  

const boton = document.getElementById("botonProyectos");
const descripcion = document.getElementById("descripcion");

console.log(boton);
console.log(descripcion);

boton.addEventListener("click", function() {

    if (mensajeMostrado === false) {
        descripcion.textContent = "¡Gracias por visitar mi web!";
        mensajeMostrado = true;
    } else {
        descripcion.textContent = "Creación de páginas web para tu negocio.";
        mensajeMostrado = false;
    }

});
function presentar (nombre, profesion) {
    console.log("Hola, mi nombre es " + nombre + " y soy " + profesion);

}
presentar("Benja", "desarrollador web");
presentar("Juan", "diseñador gráfico");
presentar("María", "especialista en marketing digital");        

function sumar(a, b) {
    return a + b;
}
let resultado = sumar(10, 5);
console.log("El resultado de la suma es: " + resultado);
const servicios = ["Diseño Web", "Desarrollo Web", "Marketing Digital"];
console.log(servicios[1]    );

for (let i = 0; i < servicios.length; i++) {
    console.log("Servicio: " + servicios[i]);
}