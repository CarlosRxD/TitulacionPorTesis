/** 
 * La clase ListaMensajes representa una lista de mensajes.
 * 
 * @class ListaMensajes
 * @property {Array} _elementos - Lista de mensajes.
 */
class ListaMensajes {
    // Constructor de la clase ListaMensajes
    constructor() {
        this._elementos = []; // Inicializa la lista de mensajes vacía
    }

    // Método para agregar un mensaje a la lista
    agregarElemento(elemento) {
        this._elementos.push(elemento); // Agrega el mensaje al final de la lista
    }

    // Método para buscar el índice de un mensaje en la lista
    buscarIndice(elemento) {
        // Utiliza la función findIndex para buscar el índice del mensaje
        return this._elementos.findIndex(function (el) {
            return el === elemento; // Compara si el mensaje es igual al mensaje actual en la iteración
        });
    }

    // Método para actualizar un mensaje en la lista
    actualizarElemento(elemento) {
        const index = this.buscarIndice(elemento); // Busca el índice del mensaje
        if (index !== -1) { // Si se encuentra el mensaje en la lista
            this._elementos[index] = elemento; // Actualiza el mensaje en la lista
        }
    }

    // Método para eliminar un mensaje de la lista
    eliminarElemento(elemento) {
        const index = this.buscarIndice(elemento); // Busca el índice del mensaje
        if (index !== -1) { // Si se encuentra el mensaje en la lista
            this._elementos.splice(index, 1); // Elimina el mensaje de la lista
        }
    }

    // Método para obtener todos los mensajes de la lista
    obtenerElementos() {
        return this._elementos; // Retorna la lista de mensajes
    }
}

export default ListaMensajes;
