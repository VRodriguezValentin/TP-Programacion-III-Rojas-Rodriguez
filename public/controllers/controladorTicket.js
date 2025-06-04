class ControlTicket{
    Modelo;
    VistaTicket;
    constructor(p_modelo, p_vista){
        this.Modelo = p_modelo;
        this.VistaTicket = p_vista;
        //this.cargarTicket();
        this.registrarControlador();
    }


    cargarTicket(){

    }

    registrarControlador(){

        this.VistaTicket.navbar.logo.addEventListener("click", (e) =>{
            window.location.href='./home.html';
        })

        this.VistaTicket.navbar.carrito.addEventListener("click", (e) => {
            window.location.href='./carrito.html';
        })

        this.VistaTicket.ticket.btnSalir.addEventListener("click", (e) =>{
            /* Vacia el array del Ticket */
            window.location.href='./index.html';
        })

        const nombreCliente = localStorage.getItem('nombreCliente');
        if (nombreCliente) {
            this.VistaTicket.navbar.titulo.textContent = `Gracias por tu Compra ${nombreCliente}!`;
        }else {
            this.VistaTicket.navbar.titulo.textContent = 'Gracias por tu Compra!';
        }
    }

}

export { ControlTicket };