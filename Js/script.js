function cuota (a, b) {
    let resultado = a / b
    return resultado
}

let monto = parseInt(prompt('Ingrese el importe que desea solicitar. El monto mínimo es de $10000'));
if(monto<10000){
    alert('Monto no permitido');
} else {
    let cuotas = parseInt(prompt('Ingrese la cantidad de cuotas deseadas. Mínimo cuotas 6 y máximo 18'));
    while ((cuotas>24)||(cuotas<6)) {
        alert('Número de cuotas no permitidas');
        cuotas = parseInt(prompt('Ingrese otra cantidad de cuotas'))
    }
    
    let resultadoCuota = cuota(monto,cuotas);
    alert('El monto de su cuota sin interes será de $' + resultadoCuota);
    
}



