class RevisionAsignada {
    _alumno;
    _tituloTesis;
    _revisor;

    constructor(alumno, tituloTesis, revisor) {
        this._alumno = alumno;
        this._tituloTesis = tituloTesis;
        this._revisor = revisor;
    }

    // Getters
    get gatAlumno() {
        return this._alumno;
    }

    get getTituloTesis() {
        return this._tituloTesis;
    }

    get getRevisor() {
        return this._revisor;
    }

    // Setters
    set setAlumno(value) {
        this._alumno = value;
    }

    set setTituloTesis(value) {
        this._tituloTesis = value;
    }

    set setRevisor(value) {
        this._revisor = value;
    }
}

export default RevisionAsignada;
