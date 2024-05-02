import ListaTesistas from "../../registrarTesista/js/ListaTesistas.js";
import Tesista from "../../registrarTesista/js/Tesista.js";
import RevisionAsignada from "./RevisionAsignada.js";
import ListaRevisionAsignada from "./ListaRevisionAsignada.js";

export default function agregarT() {
    let lista = new ListaTesistas();
    let matricula = $("#txtMatricula").val();
    let nombre = $("#txtNombre").val();
    let apellidos = $("#txtApellidos").val();
    let carrera;
    if ($('#selectorCampus').val() == "campus1") {
        carrera = $("#campus1").val();
    } else {
        carrera = $("#campus2").val();
    }
    let tituloTesis = $("#txtTituloTesis").val();
    let director = $("#txtDirector").val();
    let codirector = $("#txtCodirector").val();
    let correo = $("#txtCorreo").val();
    let password = $("#password").val();
    let tesista = new Tesista(matricula, nombre, apellidos, carrera, tituloTesis, director, codirector, correo, password);
    alert("nuevo tesista");
    lista.agregarTesista(tesista);
}

// Función para manejar la lógica de agregar una revisión asignada
export function agregarRevisionAsignada() {
    let listaRevisiones = new ListaRevisionAsignada();
    // Capturamos los valores del formulario
    let alumno = $('#alumnoInput').val();
    let tituloTesis = $('#tesisInput').val();
    let revisorId = $('#revisorSelect').val();

    // Verificamos si los campos están completos
    if (alumno && tituloTesis && revisorId) {
        // Obtenemos el revisor correspondiente al ID seleccionado
        let revisor = obtenerRevisorPorId(revisorId);

        if (revisor) {
            // Creamos una nueva instancia de RevisionAsignada
            let revisionAsignada = new RevisionAsignada(alumno, tituloTesis, revisor);

            // Agregamos la revisión asignada a la lista y la guardamos en el localStorage
            listaRevisiones.agregarRevisionAsignada(revisionAsignada);

            // Limpiamos los campos del formulario
            $('#alumnoInput').val('');
            $('#tesisInput').val('');
            $('#revisorSelect').val('');
        } else {
            alert('Error: No se encontró el revisor seleccionado.');
        }
    } else {
        alert('Por favor, complete todos los campos.');
    }
}
function obtenerRevisorPorId(id) {
    // Obtenemos el texto del option seleccionado en el select de revisores
    let revisorSeleccionado = $('#revisorSelect option[value="' + id + '"]').text().trim();

    return revisorSeleccionado;
}