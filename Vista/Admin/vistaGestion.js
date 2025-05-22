class VistaGestion {
    /*NAVBAR en cliente*/
    editorContainer;
    constructor(){
        this.editorContainer = {
            inputId: this.$("idtxt"),
            inputMarca: this.$("marcatxt"),
            inputPrecio: this.$("preciotxt"),
            inputSelectType: this.$("selectType"),
            inputModelo: this.$("modelotxt"),
            inputColor: this.$("colortxt"),
            inputAlmacenamiento: this.$("almacenamientotxt"),
            inputRam: this.$("ramtxt"),
            inputTipo: this.$("tipotxt"),
            inputCompatibilidad: this.$("compatibilidadtxt"),
            btnCancelar: this.$("btnGestionCancelar"),
            btnAceptar: this.$("btnGestionAceptar")
        }

    }
        
    $(id){
        return document.getElementById(id);
    }
}

export { VistaGestion };