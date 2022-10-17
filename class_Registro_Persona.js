class Registro_Persona{
    constructor(){
        this.vectorObjetos = [];
    }
    insertarRegistro(tipoInsercion){
        //tipoInsercion: 1-> Inserte al final 0-> Inserte al principio
        let nombre = document.getElementById('nombre').value;
        let apellido = document.getElementById('apellido').value;
        let ci = document.getElementById('ci').value;
        if(nombre == "" || apellido == "" || ci == ""){
            alert("Debe introducir todos los datos.");
        }
        else{
            let objetoConstruido = {
                'nombre': nombre,
                'apellido': apellido,
                'ci': ci
            }
            if(tipoInsercion == 0)
                this.vectorObjetos.unshift(objetoConstruido);
            else
                this.vectorObjetos.push(objetoConstruido);
            this.mostrarInformacion();
            this.limpiarCampos();
        }
    }
    mostrarInformacion(){
        console.clear();
        for(let i = 0; i < this.vectorObjetos.length; i++){
            console.log("Nombre Completo: "+this.vectorObjetos[i].nombre+" "+this.vectorObjetos[i].apellido+" -- C.I.: "+this.vectorObjetos[i].ci);
        }
    }
    limpiarCampos(){
        document.getElementById('nombre').value = '';
        document.getElementById('apellido').value = '';
        document.getElementById('ci').value = '';
        document.getElementById('busqueda').value = ''
        document.getElementById('nombre').focus();
    }
    eliminarRegistro(tipoEliminacion){
        //tipoEliminacion: 1-> Elimina el ultimo 0-> Elimina el primero
        if(this.vectorObjetos.length>0){
            if(tipoEliminacion == 0)
                this.vectorObjetos.shift();
            else
                this.vectorObjetos.pop();
            this.mostrarInformacion();
        }
        else{
            alert("NO se tiene registros para borrar.");
        }
    }
    ordenarBurbuja(tipoOrdenacion){
        //tipoOrdenacion: 1-> Ordenar por apellido 0->Ordenar por Ci
        var k;
        for(var i = 1; i < this.vectorObjetos.length; i++)
        {
            for(var j = 0; j < (this.vectorObjetos.length-i); j++)
            {
                if(tipoOrdenacion == 1){
                    if(this.vectorObjetos[j].apellido > this.vectorObjetos[j+1].apellido)
                     {
                        k = this.vectorObjetos[j+1];
                        this.vectorObjetos[j+1] = this.vectorObjetos[j];
                        this.vectorObjetos[j] = k;
                    }
                }
                else{
                    if(this.vectorObjetos[j].ci > this.vectorObjetos[j+1].ci)
                     {
                        k = this.vectorObjetos[j+1];
                        this.vectorObjetos[j+1] = this.vectorObjetos[j];
                        this.vectorObjetos[j] = k;
                    }
                }
            }
        }
        this.mostrarInformacion();
    }

    buscarRegistro(){
        let tipoBusqueda = document.getElementById('tipoBusqueda').value;
        let criterioBusqueda = document.getElementById('busqueda').value;
        if(criterioBusqueda == ''){
            alert("Debe introducir el criterio de busqueda");
            document.getElementById('busqueda').focus();
        }
        else{
            if(tipoBusqueda == "A"){//Busqueda debe ser por nombre
                for(let i = 0; i < this.vectorObjetos.length; i++){
                    if(this.vectorObjetos[i].nombre == criterioBusqueda){
                        document.getElementById('nombre').value = this.vectorObjetos[i].nombre;
                        document.getElementById('apellido').value = this.vectorObjetos[i].apellido;
                        document.getElementById('ci').value = this.vectorObjetos[i].ci;
                        break;
                    }
                    else{
                        if(this.vectorObjetos.length-1 == i){
                            alert("No existe ese registro");
                            this.limpiarCampos();
                        }
                    }
                }
            }
            else
            if(tipoBusqueda == "B"){//Busqueda debe ser por apellido
                for(let i = 0; i < this.vectorObjetos.length; i++){
                    if(this.vectorObjetos[i].apellido == criterioBusqueda){
                        document.getElementById('nombre').value = this.vectorObjetos[i].nombre;
                        document.getElementById('apellido').value = this.vectorObjetos[i].apellido;
                        document.getElementById('ci').value = this.vectorObjetos[i].ci;
                        break;
                    }
                    else{
                        if(this.vectorObjetos.length-1 == i){
                            alert("No existe ese registro");
                            this.limpiarCampos();
                        }
                    }
                }
            }
            else
            if(tipoBusqueda == "C"){//Busqueda debe ser por C.I.
                for(let i = 0; i < this.vectorObjetos.length; i++){
                    if(this.vectorObjetos[i].ci == criterioBusqueda){
                        document.getElementById('nombre').value = this.vectorObjetos[i].nombre;
                        document.getElementById('apellido').value = this.vectorObjetos[i].apellido;
                        document.getElementById('ci').value = this.vectorObjetos[i].ci;
                        break;
                    }
                    else{
                        if(this.vectorObjetos.length-1 == i){
                            alert("No existe ese registro");
                            this.limpiarCampos();
                        }
                    }
                }
            }
        }
    }
}