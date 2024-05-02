import Revisor from "./Revisor.js";

class ListaRevisores {
    constructor() {
        // Inicializa la lista de revisores vacía
        this.listaRevisores = [];

        // Cargar la lista de revisores desde un archivo fijo o base de datos
        this.cargarRevisores();
    }

    // Método para cargar la lista de revisores desde una fuente fija
    cargarRevisores() {
        // Aquí puedes cargar la lista de revisores desde un archivo JSON fijo, base de datos, o definir los revisores directamente en código.
        // Por ejemplo, puedes definir una lista de revisores como objetos Revisor:
        this.listaRevisores = [
            new Revisor("Carlos", "Pérez", "Matemáticas"),
            new Revisor("María", "Gómez", "Física"),
            new Revisor("Luis", "Fernández", "Química"),
            new Revisor("Ana", "Rodríguez", "Biología"),
            // Agrega más revisores según sea necesario
        ];
    }

    // Método para obtener todos los revisores
    getRevisores() {
        return this.listaRevisores;
    }

    // Método para obtener un revisor por nombre y apellidos
    getRevisor(nombre, apellidos) {
        return this.listaRevisores.find(revisor => revisor._nombre === nombre && revisor._apellidos === apellidos);
    }
}

export default ListaRevisores;
