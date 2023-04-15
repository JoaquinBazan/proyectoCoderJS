const btnCalcular = document.getElementById('btnCalcular'),
inputMonto = document.querySelector("input[type='number']"),
opcionCuotas = document.getElementById('cantCuotas'),
txtMonto = document.getElementById('txtModificable'),
nombreUser = document.getElementById('nombreUser'),
dniUser = document.getElementById('dniUser'),
btnIngreso = document.getElementById('btnIngreso');

function Usuario(nombre, dni) {
    this.nombre = nombre;
    this.dni = dni;
}

function cuota (a, b) {
    let resultado = a / b
    return resultado
}

usuarios = [];

btnIngreso.onclick=(eventito)=>{
    let usuario = new Usuario (nombreUser.value, dniUser.value);
    eventito.preventDefault();
    sessionStorage.setItem('usuario',JSON.stringify(usuario));
    console.log(sessionStorage.getItem('usuario'));
    usuarios.push(usuario);

}


btnCalcular.onclick=(evento)=>{
    
    const cuotas = cuota(inputMonto.value,opcionCuotas.value);
    evento.preventDefault();
    txtMonto.innerText = '$' + cuotas.toFixed(2);

    console.log(inputMonto.value);
    console.log(opcionCuotas.value);
    console.log(txtMonto);
}

// function cliente (nombre,telefono) {
//     this.nombre = nombre;
//     this.telefono = telefono;
// }

// const listaClientes = [ {nombre:'Agustin Antello',telefono:111222333},{nombre:'Leonardo Cabrera',telefono:444555666} ];

// let monto = parseInt(prompt('Ingrese el importe que desea solicitar. El monto mínimo es de $10000'));
// if(monto<10000){
//     alert('Monto no permitido');
// } else {
//     let cuotas = parseInt(prompt('Ingrese la cantidad de cuotas deseadas. Mínimo cuotas 6 y máximo 18'));
//     while ((cuotas>18)||(cuotas<6)) {
//         alert('Número de cuotas no permitidas');
//         cuotas = parseInt(prompt('Ingrese otra cantidad de cuotas'))
//     }
    
//     let resultadoCuota = cuota(monto,cuotas);
//     alert('El monto de su cuota sin interes será de $' + resultadoCuota);
    
// }
// let interesado = parseInt(prompt('¿Desea solicitar el prestamo?, digíte 1 para si o 2 para no'));
// if (interesado===1) {

// let nombre = prompt('Ingrese su nombre');
// let telefono = prompt('Ingrese su número de teléfono');

// let cliente1 = {nombre,telefono};

// listaClientes.push(cliente1);

// alert('Muchas gracias, nos estaremos comunicando conusted a la brevedad');

// } else {
//     alert('Gracias por interactuar con nosotros')
// }

// console.log(listaClientes);



