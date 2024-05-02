import Tesista from "./Tesista.js";
class ListaTesistas {
    constructor() {
        // Inicializa la lista de tesistas vacía
        this.listaTesistas = [];

        // Cargar la lista de tesistas desde el localStorage
        this.pullLista();
    }

    // Método para obtener un tesista por matrícula
    getTesista(matricula) {
        return this.listaTesistas.find(tesista => tesista.getMatricula === matricula);
    }

    // Método para agregar un nuevo tesista a la lista
    agregarTesista(tesista) {
        this.listaTesistas.push(tesista);
        this.pushLista(); // Guardar la lista actualizada en el localStorage
    }

    // Método para eliminar un tesista por matrícula
    eliminarTesista(matricula) {
        this.listaTesistas = this.listaTesistas.filter(tesista => tesista.getMatricula !== matricula);
        this.pushLista(); // Guardar la lista actualizada en el localStorage
    }

    // Método para editar un tesista con la matrícula especificada
    editarTesista(matricula, datosActualizados) {
        const tesista = this.getTesista(matricula);
        if (tesista) {
            // Actualizar los datos del tesista según los datos actualizados proporcionados
            if (datosActualizados.nombre) tesista.setNombre = datosActualizados.nombre;
            if (datosActualizados.apellidos) tesista.setApellidos = datosActualizados.apellidos;
            if (datosActualizados.carrera) tesista.setCarrera = datosActualizados.carrera;
            if (datosActualizados.tituloTesis) tesista.setTituloTesis = datosActualizados.tituloTesis;
            if (datosActualizados.director) tesista.setDirector = datosActualizados.director;
            if (datosActualizados.codirector) tesista.setCodirector = datosActualizados.codirector;
            if (datosActualizados.correo) tesista.setCorreo = datosActualizados.correo;
            if (datosActualizados.password) tesista.setPassword = datosActualizados.password;
        }

        // Guardar la lista actualizada en el localStorage
        this.pushLista();
    }

    // Método para cargar la lista de tesistas desde el localStorage
    pullLista() {
        const tesistas = localStorage.getItem('listaTesistas');
        if (tesistas) {
            // Convertir la lista guardada a objetos `Tesista`
            const listaConvertida = JSON.parse(tesistas);
            this.listaTesistas = listaConvertida.map(datos => new Tesista(
                datos._matricula,
                datos._nombre,
                datos._apellidos,
                datos._carrera,
                datos._tituloTesis,
                datos._director,
                datos._codirector,
                datos._correo,
                datos._password
            ));
        }
    }

    // Método para guardar la lista de tesistas en el localStorage
    pushLista() {
        // Convertir la lista de tesistas a JSON y guardarla en el localStorage
        localStorage.setItem('listaTesistas', JSON.stringify(this.listaTesistas));
    }
}
export default ListaTesistas;