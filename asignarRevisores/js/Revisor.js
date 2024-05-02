export default class Revisor {
    // Atributos privados
    _nombre;
    _apellidos;
    _area;

    // Constructor
    constructor(nombre, apellidos, area) {
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._area = area;
    }

    // Getters
    get getNombre() {
        return this._nombre;
    }

    get getApellidos() {
        return this._apellidos;
    }

    get getArea() {
        return this._area;
    }

    // Setters
    set setNombre(value) {
        this._nombre = value;
    }

    set setApellidos(value) {
        this._apellidos = value;
    }

    set setArea(value) {
        this._area = value;
    }
}
