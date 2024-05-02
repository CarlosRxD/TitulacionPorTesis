export default class Tesista{
    _matricula;
    _nombre;
    _apellidos;
    _carrera;
    _tituloTesis;
    _director;
    _codirector;
    _correo;
    _password;


    constructor(matricula,nombre,apellidos,carrera,tituloTesis,director,codirector,correo,password){
        this.matricula=matricula;
        this.nombre=nombre;
        this.apellidos=apellidos;
        this.carrera=carrera;
        this.tituloTesis=tituloTesis;
        this.director=director;
        this.codirector=codirector;
        this.correo=correo;
        this.password=password;
    }
    get getMatricula(){
        return this._matricula;
    }

    set setMatricula(matricula){
        this._matricula=matricula;
    }
    get getNombre(){
        return this._nombre;
    }
    set setNombre(nombre){
        this._nombre=nombre;
    }
    get getApellidos(){
        return this._apellidos;
    }
    set setApellidos(apellidos){
        this._apellidos=apellidos;
    }
    get getCarrera(){
        return this._carrera;
    }
    set setCarrera(carrera){
        this._carrera=carrera;
    }
    get getTituloTesis(){
        return this._tituloTesis;
    }
    set setTituloTesis(tituloTesis){
        this._tituloTesis=tituloTesis;
    }
    get getDirector(){
        return this._director;
    }
    set setDirector(director){
        this._director=director;
    }
    get getCodirector(){
        return this._codirector;
    }
    set setCodirector(codirector){
        this._codirector=codirector;
    }
    get getCorreo(){
        return this._correo;
    }
    set setCorreo(correo){
        this._correo=correo;
    }
    get getPassword(){
        return this._password;
    }
    set setPassword(password){
        this._password=password;
    }
}








