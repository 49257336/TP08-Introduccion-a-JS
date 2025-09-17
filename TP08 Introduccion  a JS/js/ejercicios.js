
//1
function CalcularEdad() {
    let nombre = "";
    let fechaNacimiento = "";
    let edad = 0;
    nombre = prompt("Ingrese su nombre");
    fechaNacimiento = prompt("Ingrese su fecha de nacimiento (YYYY-MM-DD)");
    let parts = fechaNacimiento.split("-");
    let FECHAnacimiento = new Date(parts[0], parts[1] - 1, parts[2]);
    let fechaActual = new Date();
    edad = fechaActual.getFullYear() - FECHAnacimiento.getFullYear();
    if (
        fechaActual.getMonth() < FECHAnacimiento.getMonth() ||
        (fechaActual.getMonth() === FECHAnacimiento.getMonth() && fechaActual.getDate() < FECHAnacimiento.getDate())
    ) {
        edad--;
    }
    console.log(`Hola ${nombre}, tienes ${edad} anios!`);
}
//2
function BuscarFruta() {
    const frutas = ["manzana", "banana", "kiwi", "sandia", "naranja", "tomate", "uvas", "mandarina", "frutilla", "arandanos"];
    let arrayOrdenado = frutas.sort();
    for (const fruta of arrayOrdenado) {
        console.log(fruta);
    }
    let frutaPedida = prompt("Ingrese una fruta");
    if (frutas.indexOf(frutaPedida) == -1) {
        console.log("no tenemos :(");
    } else {
        console.log(`Si, tenemos ${frutaPedida} :D`);
    }
}
//3
function num10(){
    if(10 == "10"){
        console.log("10 == '10'");
    }else{
        console.log("10 != '10'");
    }
    if(10 === "10"){
        console.log("10 === '10");
    }else{
        console.log("10 !== '10'");
    }
    let numDec = 10.6;
    console.log(typeof numDec);
}
//4
function ciudad(){
const ciudad= new Object();

ciudad["nombre"]= "Roma";
ciudad["fechaFundacion"]= '01-01-2000';
ciudad["poblacion"]= 120000;
ciudad["extencion"]= 16000;
for(let valor in ciudad){
    console.log(`${valor} : ${ciudad[valor]} `);
}
}
//5
function doble(array){
    const doble = array.map(num => array[num-1]*2);
    doble.forEach(element => {
        console.log(element);
    });
}
//6
function triangulos(){
    
//A)
for(let i = 1; i<=5; i++){
    let char = '*'
    console.log(char.repeat(i));
}
//B)
let j = 1;
for(let i = 4; i>=0; i--){
    
    let charDash = '-';
    let charStar = '*';
    console.log(charDash.repeat(i) + charStar.repeat(j)+charDash.repeat(i));
    j+=2;
    }
}
//7
function nombres_A(){
    let listaNombres = prompt("Ingrese una lista de nombres separados por ','");
    const nombres = listaNombres.split(',').map(nombre => nombre.trim());
    const nombresA = nombres.filter(palabra => palabra[0] == 'A');
    OutputResult(nombresA.join(', '));
}
//8
function reemplazarPalabra(){
    let cadenaOG = prompt("Ingrese un texto");
    let palabraAReemplazar = prompt("Ingrese una palabra a reemplazar");
    let parabraReemplazo = prompt(`Ingrese una palabra para reemplazar '${palabraAReemplazar}'`);
    let cadenaReemplazada = cadenaOG.replaceAll(palabraAReemplazar,parabraReemplazo);
    OutputResult(cadenaReemplazada);
}
//9
function cortarTexto(){
    let texto = prompt("Ingrese un texto");
    let num = prompt("Ingrese un numero");
    if(texto.length > num){
        let textoCortado = texto.substring(0,num);
        OutputResult(textoCortado);
    }else{
       OutputResult("El numero debe ser menor que la cantidad de caracteres del texto!!");
    }
}
//10
function separarPorDash(){
    const ArrayOG = prompt("Ingrese una lista de elementos separados por coma");
    const ArraySeparado = ArrayOG.split(',').map(elemento => elemento.trim());
    const ArrayReUnificado = ArraySeparado.join('-');
    OutputResult(ArrayReUnificado);
}
//11
function CalcularTotal(){
    const Pedido = prompt("Ingrese una lista de objetos pedidos con sus subtotales, separado por comas");
    const subPedidos = Pedido.split(',').map(elemento => elemento.trim());
    let monto = 0;
   subPedidos.forEach(subpedido => {
    const precio = subpedido.split(':')[1]; 
    monto += parseFloat(precio);
});
OutputResult(monto);
}
CalcularTotal();





