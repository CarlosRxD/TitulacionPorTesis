import RevisionAsignada from "./RevisionAsignada.js";

class ListaRevisionAsignada {
    revisionesAsignadas;
    constructor() {
        // Inicializa la lista de revisiones asignadas vacía
        this.revisionesAsignadas = [];

        // Cargar las revisiones asignadas desde el localStorage al inicializar
        this.cargarRevisionesAsignadas();
    }

    // Método para agregar una nueva revisión asignada a la lista
    agregarRevisionAsignada(revision) {
        this.revisionesAsignadas.push(revision);
        this.guardarRevisionesAsignadasEnLocalStorage(); // Guardar la lista actualizada en el localStorage
    }

    // Método para obtener todas las revisiones asignadas
    obtenerRevisionesAsignadas() {
        return this.revisionesAsignadas;
    }

    // Método para cargar las revisiones asignadas desde el localStorage
    cargarRevisionesAsignadas() {
        const revisionesGuardadas = localStorage.getItem('revisionesAsignadas');
        if (revisionesGuardadas) {
            this.revisionesAsignadas = JSON.parse(revisionesGuardadas).map(revision => new RevisionAsignada(
                revision.alumno,
                revision.tituloTesis,
                revision.revisor
            ));
        }
    }

    // Método para guardar las revisiones asignadas en el localStorage
    guardarRevisionesAsignadasEnLocalStorage() {
        localStorage.setItem('revisionesAsignadas', JSON.stringify(this.revisionesAsignadas));
    }
}

export default ListaRevisionAsignada;
