
/*7 - Storage y Json*/

localStorage.setItem(scriptBox, 'Transporte Ramirez');
var local=localStorage.getItem(scriptBox);
console.log(local);


sessionStorage.setItem(origen, 'Santa Fe');
var sesion=sessionStorage.getItem(origen);
console.log(sesion);



/*8 - DOM */

/* Formas de acceder a un nodo mediante Js*/

var content= document.getElementById("logo");
console.log(content);
console.log(content.attributes[0]);



var content=document.getelementByClassname(); 
console.log(content[0].innerHTML);

var parrafos=document.getElementsByTagName();
console.log(parrafos[0].innerHTML);

/*Agregar o quitar nodos*/

var parrafo=document.createElement("p");
console.log(parrafo);
parrafo.innerHTML="Hola";
console.log(parrafo);
parrafo.classList.add('mi_parrafo'); 

document.body.appendChild(parrafo); 
/*Otro caso*/

var lista=document.createElement("div");
lista.classList.add("mi_lista");
for(var i=0; i<5;i++){
    var parrafo=document.createElement("p");
    lista.appendChild(parrafo);
    };

/*9- Eventos */

/* OPCION 1 Dentro del elemento <input type="Button" onclick="alert('Mensaje de click')"  ----la funcion es con ON seguido de la funcion que 
hace el usuario(ya definido). Puedo tambien llamar a una función..."..=funcion_1" */

/*OPCION 2.Dentro del Html o en JS, pero en un script(HTML) y a través de DOM. El evento que agregamos es CHANGE. (A continuacion en Js..)*/
    
        document.getElementById("nombre").addEventListener("change", mostrarAlert);
        function mostrarAlert() {
            alert('Escribiste algo');
             }


/*OPCION 3 -Muy parecido al anterior, pero se define la función directamente sobre el nombre del evento. */

        document.getElementById("nombre").onchange=mostrarAlert;
        function mostrarAlert() {
            alert('Hiciste algo');
        }
/* RECIBIR INFO DEL EVENTO qué tecla se presionó, etc.*/

window.onload=function(){
    document.getElementoById("seccion").onmouseover= resalta;
    };

function resalta(elEvento) {
    var evento=elEvento;
    switch(evento.type){
        case 'mouseover':
            var parrafo =document.getElementById("estiloparrafo");
            var bold=document.createElement("b");
            bold.appendChild(parrafo);
            document.getElementById('seccion').appendChild('bold');
            break;

    }
}

/*EVENTOS DEL TELADO*/
onkeypress="apretarEnter(event);" /* dentro del elemento*/
function apretarEnter(elEvento) {
    
    if (elEvento.keyCode==13){
        alert("Ya le responderemos a la brevedad");
    }
    
}



/*Workshop*/

/* &&=y ; != distinto; "dos rayas verticales"= or*/




/*JQUERY*/

$("p");
$("#nombre_id");
$(".class");

var parrafos = $("p");
for(var i=0; i<parrafos.length; i++ );
console.log(parrafos[i]);

var selector_id = $("#primerid");
console.log(selector_id)

$("p,a"); //selecciona todas las a dentro de los p

$("li.nombreclase #caja"); // selecciona los li que tengan esa clase y que tengan ese id

$("p:last")[0];

console.log($(":text")[0]);
console.log($(":checkbox"));
console.log($(":submit"));
console.log($(":selected"));

var inputs = $(":input");
for (var i=0; i<inputs.lenght; i++);
console.log(inputs[i]);

//Eventos
$(".button_1").click(function(){
    alert("click simple")
});

$(".classinput").focus(function(){
    console.log("hayfocus");
    }
    );


$("#hover").hover(
    function(){
        $(this).css("color","red");
    },
    function(){
        $(this).css("color", "blue");
    }
);
//Metodos
$(".button_2").click
    (function(){
        $(".otraclass").remove();
    }
    );
$(".undiv").append("Hello");


// AJAX CON JQUERY

//Metodo GET
const URLGET=
"https://jsonplaceholder.com..."
$("body").prepend('<button id="btn1">GET</button>');

/*$("#btn1").click(()=>{
    $.get(URLGET, function(respuesta, estado){
        if(estado==="success"){
            let misDatos= respuesta;
            for(const dato of misDatos){
                $("body").prepend('<div>
                <h3>dato.title</h3>
                <p>dato.body</p>
                </div>');
                }
        }
    })
}); */

//METODO POST
const URLGET=
"https://jsonplaceholder.com..."
const infoPost = {nombre:"Ana", profesion:"Program"}
("body").prepend('<button id="btn1">POST</button>');

/*$("#btn1").click(()=>{
    $.post(URLGET, infoPost,(respuesta, estado){
        if(estado==="success"){
            $("body").prepend('<div>Guardado:${respuesta.nombre}</div>');
        }
    }
}); */

/*API*/



