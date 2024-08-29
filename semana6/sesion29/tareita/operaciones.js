import{suma} from "./suma.js";
import{resta} from "./resta.js";
import{multiplicacion} from "./multiplicacion.js";
import{division} from "./division.js";

let dato1= parseInt(prompt("Primer valor de la suma:"));
let dato2= parseInt(prompt("Segundo valor de la suma:"));
let resultado= suma(dato1, dato2);
document.getElementById("suma").innerHTML = resultado;

let dat1= parseInt(prompt("Primer valor de la resta"));
let dat2= parseInt(prompt("Segundo valor de la resta"));
let resultad= resta(dat1, dat2);
document.getElementById("resta").innerHTML = resultad;

let da1= parseInt(prompt("Primer dato de la multiplicacion"));
let da2= parseInt(prompt("Segundo dato de la multiplicacion"));
let resulta= multiplicacion(da1, da2);
document.getElementById("multiplicacion").innerHTML = resulta;

let d1= parseInt(prompt("Divisor"));
let d2= parseInt(prompt("Dividendo"));
let result= division(d1, d2);
document.getElementById("division").innerHTML = result;
