/**

La clase Mensaje representa un mensaje con atributos como mensaje, fecha, autor, destinatario y caducidad.
@class Mensaje
@property {string} _mensaje - Contenido del mensaje.
@property {Date} _fecha - Fecha de envío del mensaje.
@property {string} _autor - Autor del mensaje.
@property {string} _destinatario - Destinatario del mensaje.
@property {Date} _caducidad - Fecha de caducidad del mensaje.
*/
class Mensaje {
    // Constructor de la clase Mensaje
    constructor(mensaje, fecha, autor, destinatario, caducidad) {
        this._mensaje = mensaje; // Contenido del mensaje
        this._fecha = fecha; // Fecha de envío del mensaje
        this._autor = autor; // Autor del mensaje
        this._destinatario = destinatario; // Destinatario del mensaje
        this._caducidad = caducidad; // Fecha de caducidad del mensaje
    }// Métodos getters y setters para los atributos del mensaje
    get mensaje() {
        return this._mensaje;
    }
    set mensaje(nuevoMensaje) {
        this._mensaje = nuevoMensaje;
    } get autor() {
        return this._autor;
    }
    set autor(nuevoAutor) {
        this._autor = nuevoAutor;
    } get fecha() {
        return this._fecha;
    }
    set fecha(nuevaFecha) {
        this._fecha = nuevaFecha;
    } get destinatario() {
        return this._destinatario;
    }
    set destinatario(nuevoDestinatario) {
        this._destinatario = nuevoDestinatario;
    } get caducidad() {
        return this._caducidad;
    }
    set caducidad(nuevaCaducidad) {
        this._caducidad = nuevaCaducidad;
    }
}
export default Mensaje;