function cuota (a, b) {
    let resultado = a / b
    return resultado
}

function cliente (nombre,telefono) {
    this.nombre = nombre;
    this.telefono = telefono;
}

const listaClientes = [ {nombre:'Agustin Antello',telefono:111222333},{nombre:'Leonardo Cabrera',telefono:444555666} ];

let monto = parseInt(prompt('Ingrese el importe que desea solicitar. El monto mínimo es de $10000'));
if(monto<10000){
    alert('Monto no permitido');
} else {
    let cuotas = parseInt(prompt('Ingrese la cantidad de cuotas deseadas. Mínimo cuotas 6 y máximo 18'));
    while ((cuotas>18)||(cuotas<6)) {
        alert('Número de cuotas no permitidas');
        cuotas = parseInt(prompt('Ingrese otra cantidad de cuotas'))
    }
    
    let resultadoCuota = cuota(monto,cuotas);
    alert('El monto de su cuota sin interes será de $' + resultadoCuota);
    
}
let interesado = parseInt(prompt('¿Desea solicitar el prestamo?, digíte 1 para si o 2 para no'));
if (interesado===1) {

let nombre = prompt('Ingrese su nombre');
let telefono = prompt('Ingrese su número de teléfono');

let cliente1 = {nombre,telefono};

listaClientes.push(cliente1);

alert('Muchas gracias, nos estaremos comunicando conusted a la brevedad');

} else {
    alert('Gracias por interactuar con nosotros')
}

console.log(listaClientes);



