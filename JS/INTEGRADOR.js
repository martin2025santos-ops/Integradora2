//EJERCICIO 1
let primera;
let segunda;
let tercera;
let cuarta;
let quinta;
let sexta;

//EJERCICIO 2
primera = 3;
primera += 4;

console.log(primera);

//EJERCICIO 3
segunda = 10;
segunda -= primera;

console.log(segunda)

//EJERCICIO 4
tercera = primera * segunda;
console.log(tercera);

//EJERCICIO 5
cuarta = tercera / 1.5;
console.log(cuarta); 

//EJERCICIO 6
console.log("tipo cuarta:", typeof cuarta); 

//EJERCICIO 7
quinta = cuarta % 2;
console.log(quinta); 

if (quinta === 0) {
  quinta += 15;
} else {
  quinta += 20;
}
console.log(quinta); 

// EJERCICIO 8
sexta = quinta ** 3;
console.log(sexta); 

// EJERCICIO 9
let septima = sexta++;
console.log( sexta);   
console.log(septima); 

// EJERCICIO 10
let octava = ++sexta;
console.log(sexta);   
console.log(octava); 

// EJERCIICO 11
let novena = sexta + septima + octava;
console.log(novena); 

// EJERCICIO 12
let decima;
decima = --novena;
console.log(novena); 
console.log(decima); 

// EJERCICIO 13
let decimaPrimera;
decimaPrimera = novena--;
console.log(novena); 
console.log(decimaPrimera); 

// EJERCICIO 14
let decimaSegunda = 10;
let decimaTercera = 20;
let decimaCuarta = ++decimaSegunda * decimaTercera--;
console.log(decimaCuarta); 

// EJERCICIO 15
console.log(decimaSegunda); 
console.log(decimaTercera); 

// EJERCICIO 16
const HORAS = 8;
let diasTrabajados = 20;
let horasTrabajadas = 45;
horasTrabajadas = diasTrabajados;
horasTrabajadas *= HORAS;
console.log(horasTrabajadas);

// EJERCICIO 17
let diasCobrados = diasTrabajados;
diasCobrados += 5;
console.log(diasCobrados);

//EJERCICIO  18
let horasPorDia = 8;
let horasTotal = 0;

// restamos el día especial
diasTrabajados -= 1;

// sumamos horas normales
horasTotal += diasTrabajados * horasPorDia;

// sumamos el día que se fueron antes
horasTotal += 4;

console.log(horasTotal); 

//EJERCICIO 19

let edad = 22;
let numeroFav = "10";

console.log(edad == numeroFav);
console.log(edad === numeroFav);
console.log(edad != numeroFav);   
console.log(edad !== numeroFav);  
console.log(edad > numeroFav);    
console.log(edad < numeroFav);    
console.log(edad >= numeroFav);   
console.log(edad <= numeroFav);

//EJERCICIO 20

let edadd = 15;
let numeroFavorito = "26";

let nombre = "Martin";
let peso = 62;
let estatura = 1.75;

console.log(`Mi nombre es ${nombre} y tengo ${edad} años. Mi número favorito es ${numeroFavorito}. Mido ${estatura} 
  y peso ${peso}.`);

//EJERCICIO 21

let edadDocente = 29;

console.log(¿Tengo la misma edad que el docente? ${edad === edadDocente});

//EJERCICIO 22

let libreta = false;     
let vehiculo = false;   

if (edad >= 18 && libreta && vehiculo) {
    console.log("Puedes conducir tu propio vehículo");
} else if (edad >= 18 && libreta && !vehiculo) {
    console.log("Puedes conducir, pero no tienes vehículo propio");
} else if (edad >= 18 && !libreta && vehiculo) {
    console.log("Tienes vehículo pero no podes conducir");
} else {
    console.log("No puedes conducir");
}

//EJERCICIO 23

let numeroFavoritoo = 19;

console.log(numeroFav >= 19 
    ? "El número es mayor o igual a 19" 
    : "El número es menor que 19"
);

//EJERCICIO 24

let dia = 4;

switch (dia) {
  case 1:
    console.log("Lunes: Emprendurismo, Física");
    break;
  case 2:
    console.log("Martes: Programación Full Stack y Ingeniería de Software");
    break;
  case 3:
    console.log("Miércoles: Matemática CTS y Cálculo");
    break;
  case 4: 
    console.log("Jueves: UTU Lab, Ingeniería de Software, Programación Full Stack");
    break;
  case 5:
    console.log("Viernes: Sistemas Operativos");
    break;
  default:
    console.log("Fin de semana");
}

//EJERCICIO 25

console.log(typeof edad);   
console.log(typeof numeroFavorito);
console.log(typeof nombre);
console.log(typeof peso); 
console.log(typeof estatura); 
console.log(typeof libreta);  
console.log(typeof vehiculo); 
console.log(typeof numeroFav);