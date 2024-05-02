import Tarea from './Tarea.js';
import ListaTareas from './ListaTareas.js';
import { menu } from './Menu.js';

var lista = new ListaTareas;

$(document).ready(function () {
    limpiarLocalStorage();
    cargarLocalStorage();
    cargarTareasDesdeLocalStorage();

    $('#guardarDatos').click(function () {
        agregarTarea();

    });
    $('.btn-toggle').click(function () {
        menu();
    });
    // Manejar el cambio en la selección del estado
    $("#selectEstado").change(function () {
        let estadoSeleccionado = $(this).val(); // Obtener el estado seleccionado
        filtrarTareasPorEstado(estadoSeleccionado); // Filtrar y mostrar las tareas por el estado seleccionado
    });
});
function limpiarLocalStorage() {
    localStorage.clear();
}
// Función para filtrar tareas por estado
function filtrarTareasPorEstado(estado) {
    limpiarTabla();
    // Obtener todas las tareas del servidor o de donde sea que las estés almacenando
    let todasLasTareas = lista._elementos; // Reemplaza esto con la función que obtiene todas las tareas
    if (estado == "tareas") {
        for (let i = 0; i < todasLasTareas.length; i++) {
            let tarea = todasLasTareas[i];
            todasLasTareas[i] = new Tarea(tarea._id, tarea._actividad, tarea._estado, tarea._fecha);

            mostrarTareas(todasLasTareas[i]);
        }
    } else {
        // Filtrar tareas según el estado seleccionado
        let tareasFiltradas = todasLasTareas.filter(function (tarea) {
            return tarea._estado === estado;
        });

        for (let i = 0; i < tareasFiltradas.length; i++) {
            let tarea = tareasFiltradas[i];
            tareasFiltradas[i] = new Tarea(tarea._id, tarea._actividad, tarea._estado, tarea._fecha);

            mostrarTareas(tareasFiltradas[i]);
        }
    }
    
}


function cargarTareasDesdeLocalStorage() {
    let cadenaArray = localStorage.getItem("lista");
    if (cadenaArray != null) {
        lista = JSON.parse(cadenaArray);
        cargarTareas();
    }
}
function agregarTarea() {
    let tarea = obtenerDatos()
    lista._elementos.push(tarea);
    localStorage.setItem("lista", JSON.stringify(lista));
    mostrarTareas(tarea);
}
function obtenerDatos() {
    let actividad = $('#actividad_input').val();
    let estado = $('#estado_input').val();
    let fechaLimite = $('#fecha_limite_input').val();
    let id = Math.floor(Math.random() * 100) + 1;
    while (verificarIdExistente(id)) {
        id = Math.floor(Math.random() * 100) + 1;
    }
    let tarea = new Tarea(id, actividad, estado, fechaLimite);
    return tarea;
}
function verificarIdExistente(nuevoId) {
    for (let i = 0; i < lista.length; i++) {
        if (lista._elementos[i].id === nuevoId) {
            return true;
        }
    }
    return false;
}
function cargarLocalStorage() {
    let tareasEjemplo = [
        new Tarea(1, "Enviar Borrador Tesis", "Completo", "4/27/2024"),
        new Tarea(2, "Revisar Informe Mensual", "En Proceso", "4/30/2024"),
        new Tarea(3, "Preparar Presentación", "En Proceso", "5/5/2024"),
        new Tarea(4, "Realizar Capacitación", "Atrasado", "4/20/2024"),
        new Tarea(5, "Organizar Reunión", "Atrasado", "4/15/2024"),
        new Tarea(6, "Finalizar Proyecto", "Completo", "4/25/2024"),
        new Tarea(7, "Enviar Correos Electrónicos", "En Proceso", "4/29/2024"),
        new Tarea(8, "Investigar Nuevas Tecnologías", "En Proceso", "5/3/2024")
    ];
    for (let i = 0; i < tareasEjemplo.length; i++){
        lista.agregarElemento(tareasEjemplo[i]);
    }
    
    localStorage.setItem("lista", JSON.stringify(lista));
}
function cargarTareas() {
    let elementos = lista._elementos;

    for (let i = 0; i < elementos.length; i++) {
        let tarea = elementos[i];
        elementos[i] = new Tarea(tarea._id, tarea._actividad, tarea._estado, tarea._fecha);

        mostrarTareas(elementos[i]);
    }
}
function limpiarTabla() {
    
    $("#listaTareas").empty();
}
function mostrarTareas(item) {
    let ids = item.id;

    $("#listaTareas").append(`
                <tr id="${ids}">
                    <th>${item.actividad}</th>
                    <td>${item.estado}</td>
                    <td>${item.fecha}</td>
                    <td><button id="btn${ids}" class="btn btn-outline-info" data-toggle="modal" data-target="#taskModal ">Actualizar</button></td>
                </tr>
            `);
    $("#btn" + ids).attr("indice", ids);
    $("#btn" + ids).click(function () {
        let indice = $("#" + this.id).attr("indice");
        //lista._elementos.splice(indice - 1, 1);
        //lista.actualizarElemento(obtenerDatos());
        localStorage.setItem("lista", JSON.stringify(lista));
       // $(`#${ids}`).remove();
        
    });
}
