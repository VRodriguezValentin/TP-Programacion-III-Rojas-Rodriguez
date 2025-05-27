class ControlGestion {
    Modelo;
    VistaGestion;
    constructor(a_vista, a_modelo){
        this.Modelo = a_modelo;
        this.VistaGestion = a_vista;
    }
}

export { ControlGestion };