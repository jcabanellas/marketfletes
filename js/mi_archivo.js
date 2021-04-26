/*Transportes */

class transportes{

    
    constructor(nombre, destino, capacidad, puntaje,modalidad,whatsapp,disponible){
    this.nombre=nombre;
    this.destino=destino;
    this.capacidad=capacidad;
    this.puntaje=puntaje;
    this.modalidad=modalidad;
    this.whatsapp=whatsapp;
    this.disponible=disponible;
}
    
    
                     
    
};

var transporte_1= new transportes("Transporte Ramirez",["Santa fe","Cordoba","Misiones","Entre Rios"], "30tn", 7,"Granel","+5493416444444", "si");
var transporte_2= new transportes("Transporte Gabriel", ["Santa Fe","Buenos Aires","La Pampa"], "30 tn", 8, "Palletizado","+54340222222");
var transporte_3= new transportes("Transporte Condor", ["Mendoza", "San Luis", "San Juan"],"30 tn",8,"Palletizado", "+540205111111");
var transporte_4= new transportes("Transporte Botti", "Santa Fe", "30 tn",9,"Palletizado", "+543416333333");
var transporte_5= new transportes("Transporte Romero",["Santa Cruz","Chubut","Rio Negro","Neuquen"], "30tn", 7,"Palletizado","+54116444444");
var transporte_6= new transportes("Transporte Aguila", ["Salta","Jujuy","Tucuman"], "30 tn", 8, "Palletizado","+54340222222");
var transporte_7= new transportes("Transporte Formoseño", ["Chaco", "Formosa"],"30 tn",8,"Palletizado", "+540205111111");
var transporte_8= new transportes("Transporte El Porteño", "CABA", "30 tn",9,"Palletizado", "+543416333333");

/*Dadores */


class dadores{
    constructor(nombre, origen, puntaje){
        this.nombre=nombre;
        this.origen=origen;
        this.puntaje=puntaje;
    }
};







/*Arrays*/


/*Agregamos Dom*/

var usuario_1 = document.getElementById("dador");
console.log(usuario_1.innerHTML);

var usuario_2 = document.getElementById("transporte");
console.log( usuario_2.innerHTML );

var parrafos= document.getElementsByTagName("p");
console.log(parrafos[0].innerHTML);

/*Agregamos elementos*/


parrafos[0].classList.add('estiloparrafo');

/*Agregamos eventos*/

function es_transporte() {
    alert("Manda tus datos a yyy@market.com.ar así te ingresamos en nuestra base de datos!")
};




/*Colocamos título al form si es que presiona en Dador*/


$("#dador").one("mouseover",function mouse() {
    $("#aviso").append("<p>Te ayudamos a buscar el mejor transporte</p>");
    $("#aviso").addClass('titulodador');
    
})



/*Tomamos Datos Confirmacion de Form*/

var form = document.getElementById("abrirform");
form.addEventListener('submit',function(event){
    event.preventDefault()
    

    
});

/* Local Storage*/

localStorage.setItem(scriptBox, 'Transporte Ramirez');
var local=localStorage.getItem(scriptBox);
console.log(local); 


/*Session Sorage*/
sessionStorage.setItem(origen, 'Santa Fe');
var sesion=sessionStorage.getItem(origen);
console.log(sesion);

/*Json*/ /*Seria resultado de una búsqueda*/

var resultadoJSON={
    "resultados": [{
                    "Nombre":"Transporte Ramirez",
                    "fecha": "25 de marzo",
                    },
                    {"Nombre": "Transporte Condor",
                    "fecha": "26 de marzo",
                    }]
};
console.log(resultadoJSON["resultados"]);







/*Empezamos a tratar de resumir y buscar resultados a la búsqueda*/


/*Incorporamos J query*/




$("#confirmar").click(function(){
    $("#confirmado").append("Tu solicitud ha sido enviada");
}
);


$("#confirmar").click(function()
    {var modalidadcarga =$("#modalidad option:selected").val();
    console.log("En formato"+ " " + modalidadcarga);}
);
var origen_1 =$("#selectProvincias option:selected").val();
$("#confirmar").click(function()
    {var origen_1 =$("#selectProvincias option:selected").val();
    console.log("Provincia origen"+ " " + origen_1);}
);
 
$("#confirmar").click(function()
    {var destino =$("#destino option:selected").val();
    console.log("Con destino"+ " " + destino);}
);

$("#confirmar").click(function()
    {var datetime =$("#datetime") .val();
    console.log("En fecha"+ " " + datetime);}
);

$("#confirmar").click(function()
    {var toneladas =$("#toneladas").val();
    console.log("La cantidad de "+ " " + toneladas);}
);





/*Animaciones*/





$("h1")
    .fadeOut(2000)
        .fadeIn(1000);


$("#block").prepend('<h4 id="opciones">Las mejores alternativas para tu viaje son</h4>');
$("#confirmar").click(()=>{
    $("#opciones").fadeOut(2000)
            .fadeIn(1000);

});
$("#opciones").addClass("alternativas");

/*Boton nueva busqueda. Reset*/

function recargar(){
    document.getElementById("abrirform").reset()
};


/*Campos origen carga*/
const APIPROVINCIAS = "https://apis.datos.gob.ar/georef/api/provincias"


$(document).ready(function(){
    console.log('Aviso Dom');
    $.get(APIPROVINCIAS, function(datos){
        console.log(datos.provincias);
        $("#selectProvincias").empty();
        for (const provincia of datos.provincias){
            $("#selectProvincias").append(`<option value="${provincia.id}">${provincia.nombre}</option>`)
        }
        
        
    });

});


$("#selectProvincias").change(function(e){
   console.log($(this).val());
   let apiMunicipios = `https://apis.datos.gob.ar/georef/api/municipios?provincia=${this.value}&campos=id,nombre&max=100`;
   console.log(apiMunicipios);
   $.get(apiMunicipios, function(datos){
    console.log(datos.municipios);
    $("#origen").empty();
    for (const municipio of datos.municipios){
        $("#origen").append(`<option val="${municipio.id}">${municipio.nombre}</option>`)
    }
});
});

$(document).ready(function(){
    console.log('Aviso Dom');
    $.get(APIPROVINCIAS, function(datos){
        console.log(datos.provincias);
        $("#destino").empty();
        for (const provincia of datos.provincias){
            $("#destino").append(`<option value="${provincia.id}">${provincia.nombre}</option>`)
        }
    });

});






/*Abrimos append*/

/*Destino Misiones, Cordoba, Entre Ríos y Santa Fe--Transporte 1*/
$("#confirmar").click(function(){
    if ((($("#destino option:selected").val()==14) ||($("#destino option:selected").val()==54)||($("#destino option:selected").val()==30) ||($("#destino option:selected").val()==82)  ) && ($("#modalidad").val())=="Granel" && (($("#toneladas").val())<="30") ){

        
        $("#resultado").append(`<ul><li>"${transporte_1.nombre}"</li></ul>`);
        $("#rtdopuntaje").append(`<ul><li>"${transporte_1.puntaje}"</li></ul>`);
        $("#rtdowhats").append(`<ul><li>"${transporte_1.whatsapp}"</li></ul>`);
        }
        else if ((($("#destino option:selected").val()==14) ||($("#destino option:selected").val()==54)||($("#destino option:selected").val()==30) ||($("#destino option:selected").val()==82)  ) && ($("#modalidad").val())=="Palletizado" ){    
            $("#negativa").append(`<p>${transporte_1.nombre} carga para tu destino pero sólo en modalidad Granel. Si quieres avanzar, modifica la búsqueda.</p>`);
        }
        else if ((($("#destino option:selected").val()==14) ||($("#destino option:selected").val()==54)||($("#destino option:selected").val()==30) ||($("#destino option:selected").val()==82)  ) && ($("#modalidad").val())=="Granel" && (($("#toneladas").val())>"30") ){    
            $("#negativa").append(`<p>${transporte_1.nombre} carga para tu destino pero sólo hasta 30 toneladas. Si quieres avanzar, modifica la búsqueda.</p>`);
            }

        });


/* Destino Bs As, Santa Fe y La Pampa -- Transporte 2*/ 
$("#confirmar").click(function(){
    if ((($("#destino option:selected").val()==06) ||($("#destino option:selected").val()==82)||($("#destino option:selected").val()==42)) && ($("#modalidad").val())=="Palletizado" && (($("#toneladas").val())<="30") ){
        
        $("#resultado").append(`<ul><li>"${transporte_2.nombre}"</li></ul>`);
        $("#rtdopuntaje").append(`<ul><li>"${transporte_2.puntaje}"</li></ul>`);
        $("#rtdowhats").append(`<ul><li>"${transporte_2.whatsapp}"</li></ul>`);
        }
        else if ((($("#destino option:selected").val()==06) ||($("#destino  option:selected").val()==82)||($("#destino option:selected").val()==42)) && ($("#modalidad").val())=="Granel" ){
            $("#negativa").append(`<p>${transporte_2.nombre} carga para tu destino pero sólo en modalidad Palletizado. Si quieres avanzar, modifica la búsqueda.</p>`);
        }
        else if ((($("#destino option:selected").val()==06) ||($("#destino option:selected").val()==82)||($("#destino option:selected").val()==42)) && ($("#modalidad").val())=="Palletizado" && (($("#toneladas").val())>"30") ){
            $("#negativa").append(`<p>${transporte_2.nombre} carga para tu destino pero sólo hasta 30 toneladas. Si quieres avanzar, modifica la búsqueda.</p>`);
        }

    });

/*Destino San Luis, San Juan y Mendoza -- Transporte 3 */
$("#confirmar").click(function(){
    if ((($("#destino option:selected").val()==74) ||($("#destino option:selected").val()==70)||($("#destino option:selected").val()==50)) && ($("#modalidad").val())=="Palletizado" && (($("#toneladas").val())<="30") ){
            
            $("#resultado").append(`<ul><li>"${transporte_3.nombre}"</li></ul>`);
            $("#rtdopuntaje").append(`<ul><li>"${transporte_3.puntaje}"</li></ul>`);
            $("#rtdowhats").append(`<ul><li>"${transporte_3.whatsapp}"</li></ul>`);
            }
            else if ((($("#destino option:selected").val()==74) ||($("#destino  option:selected").val()==70)||($("#destino option:selected").val()==50)) && ($("#modalidad").val())=="Granel" ){
                $("#negativa").append(`<p>${transporte_3.nombre} carga para tu destino pero sólo en modalidad Palletizado. Si quieres avanzar, modifica la búsqueda.</p>`);
            }
            else if ((($("#destino option:selected").val()==74) ||($("#destino option:selected").val()==70)||($("#destino option:selected").val()==50)) && ($("#modalidad").val())=="Palletizado" && (($("#toneladas").val())>"30") ){
                $("#negativa").append(`<p>${transporte_3.nombre} carga para tu destino pero sólo hasta 30 toneladas. Si quieres avanzar, modifica la búsqueda.</p>`);

            }


        });

/*Destino Santa Fe -- Transporte 4*/
$("#confirmar").click(function(){
    
    if ((($("#destino option:selected").val()==82)) && ($("#modalidad").val())=="Palletizado" && (($("#toneladas").val())<="30") ){
                
                $("#resultado").append(`<ul><li>"${transporte_4.nombre}"</li></ul>`);
                $("#rtdopuntaje").append(`<ul><li>"${transporte_4.puntaje}"</li></ul>`);
                $("#rtdowhats").append(`<ul><li>"${transporte_4.whatsapp}"</li></ul>`);
                }
            else if ((($("#destino option:selected").val()==82)) && ($("#modalidad").val())=="Granel" ){
                $("#negativa").append(`<p>${transporte_4.nombre} carga para tu destino pero sólo en modalidad Palletizado. Si quieres avanzar, modifica la búsqueda.</p>`);
            }
            else if ((($("#destino option:selected").val()==82) ) && ($("#modalidad").val())=="Palletizado" && (($("#toneladas").val())>"30") ){

                $("#negativa").append(`<p>${transporte_4.nombre} carga para tu destino pero sólo hasta 30 toneladas. Si quieres avanzar, modifica la búsqueda.</p>`);

            }    
            });

/*Destino Santa Cruz, Rio Negro, Chubut y Neuquen - Transporte 5 */
 $("#confirmar").click(function(){
    
    if ((($("#destino option:selected").val()==78) || ($("#destino option:selected").val()==62) || ($("#destino option:selected").val()==26) || ($("#destino option:selected").val()==58) ) && ($("#modalidad").val())=="Palletizado" && (($("#toneladas").val())<="30") ){
                
                $("#resultado").append(`<ul><li>"${transporte_5.nombre}"</li></ul>`);
                $("#rtdopuntaje").append(`<ul><li>"${transporte_5.puntaje}"</li></ul>`);
                $("#rtdowhats").append(`<ul><li>"${transporte_5.whatsapp}"</li></ul>`);
                }
                
    else if ((($("#destino option:selected").val()==78) || ($("#destino option:selected").val()==62) || ($("#destino option:selected").val()==26) || ($("#destino option:selected").val()==58) ) && ($("#modalidad").val())=="Palletizado" && (($("#toneladas").val())>"30") ){
                $("#negativa").append(`<p>${transporte_5.nombre} está disponible pero no carga más de 30 toneladas. Si quieres avanzar, modifica la búsqueda.</p>`);
             }

    else if ((($("#destino option:selected").val()==78) || ($("#destino option:selected").val()==62) || ($("#destino option:selected").val()==26) || ($("#destino option:selected").val()==58) ) && ($("#modalidad").val())=="Granel" ){
            $("#negativa").append(`<p>${transporte_5.nombre} carga para tu destino pero sólo en modalidad Palletizado. Si quieres avanzar, modifica la búsqueda.</p>`);
            }
             
    
   });
    

/* Destino Salta, Jujuy y Tucuman -- Transporte 6 */
$("#confirmar").click(function(){
    
    if ((($("#destino option:selected").val()==66) || ($("#destino option:selected").val()==38) || ($("#destino option:selected").val()==90) ) && ($("#modalidad").val())=="Palletizado" && (($("#toneladas").val())<="30") ){
               
                $("#resultado").append(`<ul><li>"${transporte_6.nombre}"</li></ul>`);
                $("#rtdopuntaje").append(`<ul><li>"${transporte_6.puntaje}"</li></ul>`);
                $("#rtdowhats").append(`<ul><li>"${transporte_6.whatsapp}"</li></ul>`);
                }
                
    else if ((($("#destino option:selected").val()==66) || ($("#destino option:selected").val()==38) || ($("#destino option:selected").val()==90) ) && ($("#modalidad").val())=="Palletizado" && (($("#toneladas").val())>"30") ){
                $("#negativa").append(`<p>${transporte_6.nombre} está disponible pero no carga más de 30 toneladas. Si quieres avanzar, modifica la búsqueda.</p>`);
             }

    else if ((($("#destino option:selected").val()==66) || ($("#destino option:selected").val()==38) || ($("#destino option:selected").val()==90) ) && ($("#modalidad").val())=="Granel" ){
            $("#negativa").append(`<p>${transporte_6.nombre} carga para tu destino pero sólo en modalidad Palletizado. Si quieres avanzar, modifica la búsqueda.</p>`);
            }
             
    
   });

/* Destino Formosa, Chaco -- Transporte 7 */
$("#confirmar").click(function(){
    
    if ((($("#destino option:selected").val()==22) || ($("#destino option:selected").val()==34)  ) && ($("#modalidad").val())=="Palletizado" && (($("#toneladas").val())<="30") ){
                 
                $("#resultado").append(`<ul><li>"${transporte_7.nombre}"</li></ul>`);
                $("#rtdopuntaje").append(`<ul><li>"${transporte_7.puntaje}"</li></ul>`);
                $("#rtdowhats").append(`<ul><li>"${transporte_7.whatsapp}"</li></ul>`);
                }
                
    else if ((($("#destino option:selected").val()==22) || ($("#destino option:selected").val()==34)  ) && ($("#modalidad").val())=="Palletizado" && (($("#toneladas").val())>"30") ){
                $("#negativa").append(`<p>${transporte_7.nombre} está disponible pero no carga más de 30 toneladas. Si quieres avanzar, modifica la búsqueda.</p>`);
             }

    else if ((($("#destino option:selected").val()==22) || ($("#destino option:selected").val()==34)) && ($("#modalidad").val())=="Granel" ){
            $("#negativa").append(`<p>${transporte_7.nombre} carga para tu destino pero sólo en modalidad Palletizado. Si quieres avanzar, modifica la búsqueda.</p>`);
            }
             
    
   });

/*Destino CABA 02--Transporte 8*/
$("#confirmar").click(function(){
    
    if ((($("#destino option:selected").val()==02) ) && ($("#modalidad").val())=="Palletizado" && (($("#toneladas").val())<="30") ){
                 
                $("#resultado").append(`<ul><li>"${transporte_8.nombre}"</li></ul>`);
                $("#rtdopuntaje").append(`<ul><li>"${transporte_8.puntaje}"</li></ul>`);
                $("#rtdowhats").append(`<ul><li>"${transporte_8.whatsapp}"</li></ul>`);
                }
                
    else if ((($("#destino option:selected").val()==02) ) && ($("#modalidad").val())=="Palletizado" && (($("#toneladas").val())>"30") ){
                $("#negativa").append(`<p>${transporte_8.nombre} está disponible pero no carga más de 30 toneladas. Si quieres avanzar, modifica la búsqueda.</p>`);
             }

    else if ((($("#destino option:selected").val()==02) ) && ($("#modalidad").val())=="Granel" ){
            $("#negativa").append(`<p>${transporte_8.nombre} carga para tu destino pero sólo en modalidad Palletizado. Si quieres avanzar, modifica la búsqueda.</p>`);
            }
             
    
   });

/*Destinos sin transporte*/
$("#confirmar").click(function(){
    
    if ((($("#destino option:selected").val()!=02)) &&
        (($("#destino option:selected").val()!=22)) &&
        (($("#destino option:selected").val()!=34)) &&
        (($("#destino option:selected").val()!=66)) &&
        (($("#destino option:selected").val()!=38)) &&
        (($("#destino option:selected").val()!=90)) &&
        (($("#destino option:selected").val()!=78)) &&
        (($("#destino option:selected").val()!=62)) &&
        (($("#destino option:selected").val()!=26)) &&
        (($("#destino option:selected").val()!=58)) &&
        (($("#destino option:selected").val()!=82)) &&
        (($("#destino option:selected").val()!=74)) &&
        (($("#destino option:selected").val()!=70)) &&
        (($("#destino option:selected").val()!=50)) &&
        (($("#destino option:selected").val()!=06)) &&
        (($("#destino option:selected").val()!=42)) &&
        (($("#destino option:selected").val()!=14)) &&
        (($("#destino option:selected").val()!=54)) &&
        (($("#destino option:selected").val()!=30)) 
    
    
        ){
        $("#negativa").append(`<p>Lo sentimos. Aún no hay transportes registrados para tu provincia. Esperamos pronto poder ayudarte!</p>`)
                }
        

            });  

   
$("#confirmar").click(function(){    
$("#reset").addClass('claseblock')
});


$("#nuevabusqueda").click(function() {
    $("#resultado").empty();
    $("#rtdopuntaje").empty();
    $("#rtdowhats").empty();
    $("#confirmado").empty();
    $("#negativa").empty();
    $("#resultado").append("Transporte");
    $("#rtdopuntaje").append("Calificación");
    $("#rtdowhats").append("Contacto");
    
    $("#reset").removeClass('claseblock');
    
    
    
    
});

$("#destino").change(function(){
    
    if ($("#destino option:selected").val()==14){
        alert("Cordoba: solicita certificado circulación")
    }
    }
    );

    





