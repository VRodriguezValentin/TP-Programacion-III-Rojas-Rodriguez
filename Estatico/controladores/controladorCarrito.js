class ControlCarrito{
    Modelo;
    VistaCarrito;
    constructor(p_modelo, p_vista){
        this.Modelo = p_modelo;
        this.VistaCarrito = p_vista;
        //this.cargaArray();
        this.registrarControlador();
    }


    cargaArray(){

    }

    registrarControlador(){

        this.VistaCarrito.navbar.logo.addEventListener("click", (e) =>{
            window.location.href='./index.html';
        })

        this.VistaCarrito.navbar.carrito.addEventListener("click", (e) => {
            window.location.href='./carrito.html';
        })

        this.VistaCarrito.finCarrito.btnCancelar.addEventListener("click", (e) =>{
            /* Vacia el array del carrito */
            window.location.href='./index.html';
        })

        this.VistaCarrito.finCarrito.btnFinalizar.addEventListener("click", (e) =>{
            window.location.href='./ticket.html';
        })
    }

}

export { ControlCarrito };