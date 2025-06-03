class ControlTicket{
    Modelo;
    VistaTicket;
    constructor(p_modelo, p_vista){
        this.Modelo = p_modelo;
        this.VistaTicket = p_vista;
        //this.cargaArray();
        this.registrarControlador();
    }


    cargaArray(){

    }

    registrarControlador(){

        this.VistaTicket.navbar.logo.addEventListener("click", (e) =>{
            window.location.href='./home.html';
        })

        this.VistaTicket.navbar.carrito.addEventListener("click", (e) => {
            window.location.href='./carrito.html';
        })

        this.VistaTicket.finTicket.btnSalir.addEventListener("click", (e) =>{
            /* Vacia el array del Ticket */
            window.location.href='./index.html';
        })
    }

}

export { ControlTicket };