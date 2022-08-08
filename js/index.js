class Auto{
    constructor(propietario, patente, hora){
        this.propietario = propietario
        this.patente = patente
        this.hora = hora
    }
}

let autos = []
const capacidad = 10
let autosIngresados = 0
let opcion = 0

function ingresarAutos(){
    if(autosIngresados>capacidad-1){
        alert('NO HAY LUGAR DISPONIBLE')
    }else{
        let nombre = prompt('Ingrese su nombre: ')
        let placa = prompt('Ingrese la patente del vehiculo: ')
        let ingreso = new Date()
        ingreso.toLocaleDateString()
        autos.push(new Auto(nombre,placa,ingreso))
        console.table(autos)
        autosIngresados = autosIngresados + 1
    }
}


function retirarAutoPorPatente(){
    let placa = prompt('Ingrese la patente del vehiculo a retirar: ')
    let existe= autos.findIndex(Auto=>Auto.patente === placa)
    if(existe != -1){
        alert('¡Su auto fue retirado con éxito!')
        autos.splice(existe,1)
    }else{
        alert('El vehiculo con patente: '+placa+' nunca fue ingresado o ya ha sido retirado')
    }
    console.table(autos)
}

do{
    opcion = parseInt(prompt('Ingrese una opcion:\n[1- Ingresar vehiculo]\n[2- Retirar vehiculo]\n[3- Salir]'))
    switch(opcion){
        case 1:
            ingresarAutos()
            break;
        case 2:
            retirarAutoPorPatente()
            break;
        case 3:
            alert('Hasta luego, regrese pronto')
            break;
        default:
            alert('Ingrese una opcion válida')
    }
}while(opcion != 3)