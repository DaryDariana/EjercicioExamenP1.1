function sumar() {
    let n1 = parseInt(document.getElementById('txtN1').value)
    let n2 = parseInt(document.getElementById('txtN2').value)
    let n3 = parseInt(document.getElementById('txtN3').value)
    let n4 = parseInt(document.getElementById('txtN4').value)
    let n5 = parseInt(document.getElementById('txtN5').value)

    if (isNaN(n1)) {
        alertify.error('Número 1 en blanco')
    } else if(isNaN(n2)) {
        alertify.error('Número 2 en blanco')
    } else if(isNaN(n3)) {
        alertify.error('Número 3 en blanco')
    } else if(isNaN(n4)) {
        alertify.error('Número 4 en blanco')
    } else if(isNaN(n5)) {
        alertify.error('Número 5 en blanco')  
    } else {
        let suma = n1 + n2 + n3 + n4 + n5;
        document.getElementById('txtSubtotal').value = suma
    }

}

function descuento(){
let subtotal = parseInt(document.getElementById('txtSubtotal'))
let descuento = parseInt(document.getElementById('txtDescuento'))

    if (subtotal <= 999.99){
       descuento = 0
    } else if (subtotal >= 1000 || subtotal <= 4999.99){
       descuento = subtotal*0.10
    } else if (subtotal >= 5000 || subtotal <= 8999.99){
       descuento = subtotal*0.20
    } else if (subtotal >= 9000 || subtotal <= 12999.99){
       descuento = subtotal*0.30
    } else {       
       let suma = descuento + subtotal*0.40;
       document.getElementById('txtDescuento').value = suma
   }
   

}

function total(){
    let total = parseInt(document.getElementById('txtTotal'))
    let descuento = parseInt(document.getElementById('txtDescuento'))
    let subtotal = parseInt(document.getElementById('txtSubtotal'))

    total = subtotal - descuento;
    document.getElementById('txtTotal').value = total
}


function limpiar() {
    document.getElementById('txtN1').value = ''
    document.getElementById('txtN2').value = ''
    document.getElementById('txtN3').value = ''
    document.getElementById('txtN4').value = ''
    document.getElementById('txtN5').value = ''
    document.getElementById('txtSubtotal').value = ''
    document.getElementById('txtDescuento').value = ''
    document.getElementById('txtTotal').value = ''
}