/** 
 * La clase ListaTareas representa una lista de elementos.
 * 
 * @class ListaTareas
 * @property {Array} _elementos - Lista de elementos.
 */
class ListaTareas {
    // Constructor de la clase ListaTareas
    constructor() {
        this._elementos = []; // Inicializa la lista de elementos vacía
    }

    // Método para agregar un elemento a la lista
    agregarElemento(elemento) {
        this._elementos.push(elemento); // Agrega el elemento al final de la lista
    }

    // Método para buscar el índice de un elemento en la lista
    buscarIndice(elemento) {
        // Utiliza la función findIndex para buscar el índice del elemento
        return this._elementos.findIndex(function (el) {
            return el === elemento; // Compara si el elemento es igual al elemento actual en la iteración
        });
    }

    // Método para actualizar un elemento en la lista
    actualizarElemento(elemento) {
        const index = this.buscarIndice(elemento); // Busca el índice del elemento
        if (index !== -1) { // Si se encuentra el elemento en la lista
            this._elementos[index] = elemento; // Actualiza el elemento en la lista
        }
    }

    // Método para eliminar un elemento de la lista
    eliminarElemento(elemento) {
        const index = this.buscarIndice(elemento); // Busca el índice del elemento
        if (index !== -1) { // Si se encuentra el elemento en la lista
            this._elementos.splice(index, 1); // Elimina el elemento de la lista
        }
    }

    // Método para obtener todos los elementos de la lista
    obtenerElementos() {
        return this._elementos; // Retorna la lista de elementos
    }
}

export default ListaTareas;