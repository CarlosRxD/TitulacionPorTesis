/**

La clase Tarea representa una tarea con atributos como id, actividad, estado y fecha.
@class Tarea
@property {string} _id - Identificador único de la tarea.
@property {string} _actividad - Descripción de la actividad a realizar.
@property {string} _estado - Estado de la tarea (Completado, En Proceso, Pendiente).
@property {Date} _fecha - Fecha de la tarea.
*/
class Tarea {
    // Constructor de la clase Tarea
    constructor(_id, _actividad, _estado, _fecha) {
        this._id = _id; // Identificador único de la tarea
        this._actividad = _actividad; // Descripción de la actividad
        this._estado = _estado; // Estado de la tarea
        this._fecha = _fecha; // Fecha de la tarea
    }// Métodos getters y setters para los atributos de la tarea
    get id() {
        return this._id;
    }
    set id(_id) {
        this._id = _id;
    } get actividad() {
        return this._actividad;
    }
    set actividad(_actividad) {
        this._actividad = _actividad;
    } get estado() {
        return this._estado;
    }
    set estado(_estado) {
        this._estado = _estado;
    } get fecha() {
        return this._fecha;
    }
    set fecha(_fecha) {
        this._fecha = _fecha;
    }
}

export default Tarea;