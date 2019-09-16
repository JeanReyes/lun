function validaciones (){
    var nombre      = document.getElementById('nombre');
    var apellido    = document.getElementById('apellido');
    var email       = document.getElementById('email');
    var rut         = document.getElementById('rut');
    var telefono    = document.getElementById('telefono');
    var bases      = document.getElementById('bases');
    var region      = document.getElementById('region');
   
    var digito      = document.getElementById('digito');
    var digitoSelect = digito.options[digito.selectedIndex];
    var valida;

    //mensajes

    
    
    
    expresion = {
        nombreExpresion : /^[áéíóúAÉÍÓÚÑña-zA-Z]+$/,
        emailExpresion  :/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/,
       
        //numeroExpresion : /^[\(]?[\+]?(\d{2}|\d{3})[\)]?[\s]?((\d{6}|\d{8})|(\d{3}[\*\.\-\s]){3}|(\d{2}[\*\.\-\s]){4}|(\d{4}[\*\.\-\s]){2})|\d{8}|\d{10}|\d{12}$/
        numeroExpresion : /^(0?9)(\s?)[98765432]\d{7}$/
    }

    if (nombre.value.trim() === ""){
        nombreMensaje.style.display= "block";
        nombre.classList.add("is-invalid");
		nombre.focus();
        return false;
    }  
    
    
    if(!expresion.nombreExpresion.test(nombre.value)){
        alert('El nombre NO cumple con las espcificaciones');
        nombre.classList.add("is-invalid");
		nombre.focus();
        return false;
    }else{
        nombre.classList.add("is-valid");
    }

  
    if (apellido.value.trim() === ""){
        apellidoMensaje.style.display= "block";
        apellido.classList.add("is-invalid");
        apellido.focus();
        return false;
    }  
    if(!expresion.nombreExpresion.test(apellido.value)){
		alert('El apellido NO cumple con las espcificaciones');
        apellido.classList.add("is-invalid");
		apellido.focus();
        return false;
    }
    else{
        apellido.classList.add("is-valid");
    }
    
  
    if (email.value.trim() === ""){
        emailMensaje.style.display= "block";
        email.classList.add("is-invalid");
        email.focus();
        return false;
    }  
    if(!expresion.emailExpresion.test(email.value)){
        alert('El correo ingresado no es valido');
        email.classList.add("is-invalid");
        email.focus();
        return false;
    }
    else{
        email.classList.add("is-valid");
    }
 
    
    if (rut.value.trim() === ""){
        rutMensaje.style.display= "block";
        rut.classList.add("is-invalid");
		rut.focus();
        return false;
    }
    else{
        rut.classList.add("is-valid");
    }

         var valida = validarRut(rut);
    

    if(valida === false){
        alert('El Rut que ha ingresaso es Invalido');
        rut.classList.add("is-invalid");
		rut.focus();
		return false;
    }else{
        rut.classList.add("is-valid");
    }

    if (digitoSelect.value != "9"){
        if (telefono.value.trim() === ""){
            telefonoMensaje.style.display= "block";
            telefono.classList.add("is-invalid");
            telefono.focus();
            return false;
        }

        if (telefono.value.length != 6 ){
            alert("El telefono Fijo debe tener 6 numeros");
            telefono.classList.add("is-invalid");
            telefono.focus();
            return false; 
        }
        else{
            telefono.classList.add("is-valid");
        }

        // digitoSelect = digitoSelect.value+"2";
        
    }else{
        if (telefono.value.trim() === ""){
            telefonoMensaje.style.display= "block";
            telefono.classList.add("is-invalid");
            telefono.focus();
            return false;
        }
        
        if (telefono.value.length != 8 ){
            alert("El telefono Movil debe tener 8 numeros");
            telefono.classList.add("is-invalid");
            telefono.focus();
            return false; 
        }
        else{
            telefono.classList.add("is-valid");
        }

       
    }

  /*
    if(!expresion.numeroExpresion.test(telefono.value)){
        alert("El telefono es invalido");
        telefono.classList.add("is-invalid");
        telefono.focus();
        return false;
    }else{
        telefono.classList.add("is-valid");
    }
*/


    
    
    if (region.value === "0"){
        alert("Seleccione región");
      
        return false;
    }
    var enterar = comoSeEntero(bases);
    if(enterar < 1){
        alert('Debe aceptar las bases y terminos de condición');
        return false;
    }

    //aquihacer validacion si se encuentra el rut en la bd.
    
        insertar(nombre, apellido, email, rut, digitoSelect, telefono, region);

}



function sacarMensaje(){
    var nombreMensaje = document.getElementById('nombreMensaje');
    var apellidoMensaje = document.getElementById('apellidoMensaje');
    var emailMensaje = document.getElementById('emailMensaje');
    var rutMensaje = document.getElementById('rutMensaje');
    var telefonoMensaje = document.getElementById('telefonoMensaje');

    nombreMensaje.style.display= "none";
    apellidoMensaje.style.display= "none";
    emailMensaje.style.display="none";
    rutMensaje.style.display="none";
    telefonoMensaje.style.display="none";
}

function validaRut(rut){
    var xhttp;
    

    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    } else {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");   
    }
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       

        console.log(this.responseText);
        }    
    };
    xhttp.open("GET", "command.php?cmd=validar&rut="+rut.value, true);
    xhttp.send(); 
}


function rutvalidar(rut){
    var xhttp;
  

    patron = ".",
    patron2 = "-",
    nuevoValor    = "",
    nuevaCadena = rut.value.replace(patron, nuevoValor);
    nuevaCadena2 = nuevaCadena.replace(patron,nuevoValor);
    nuevaCadena3 = nuevaCadena2.replace(patron2,nuevoValor);

    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    } else {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");   
    }
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        comprobarRutFinal (respuesta = this.responseText);
            
        }    
    };
    xhttp.open("GET", "command.php?cmd=rutvalidar&rut="+nuevaCadena3, true);
    xhttp.send(); 
} 

function comprobarRutFinal (respuesta){
    if(respuesta === "1"){
        alert("El Rut ya se encuentra registrado");
        rut.classList.add("is-invalid");
        rut.focus();
        return false;
    }
}


function insertar(nombre, apellido, email, rut, digitoSelect, telefono, region){
    var xhttp;
    var regiones="";
    var region = document.getElementById('region');

    var registro = document.getElementById('registroExitoso');
    var nombreRegistro = document.getElementById('nombreRegistro');
    var mensajeExitoso = document.getElementById('mensajeExitoso');
    var textoseccion2 = document.getElementById('textoseccion2');
    var formularioDelete = document.getElementById('formularioDelete');
    var imagenenPackMobile = document.getElementById('imagenenPackMobile');
    var imagenes2 = document.getElementById('imagenes2');
    var banner = document.getElementById('banner');
    
    var nombre      = document.getElementById('nombre');
    var apellido    = document.getElementById('apellido');

    patron = ".",
    patron2 = "-",
    nuevoValor    = "",
    nuevaCadena = rut.value.replace(patron, nuevoValor);
    nuevaCadena2 = nuevaCadena.replace(patron,nuevoValor);
    nuevaCadena3 = nuevaCadena2.replace(patron2,nuevoValor);

    telefonoFinal = digitoSelect.value+telefono.value;

    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    } else {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");   
    }
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
            var respuesta = this.responseText;

            if(respuesta === "1"){
                alert("El Rut ya se encuentra registrado");
                rut.classList.add("is-invalid");
                rut.focus();
                return false;

            }else{
                
                textoseccion2.style.display = 'none';
                formularioDelete.style.display = 'none';
                registro.style.display = 'block';
                registro.classList.add("efecto");
                mensajeExitoso.classList.add("col-lg-12");
                imagenenPackMobile.style.marginTop = "250px";
               // imagenes2.style.marginLeft = "750px";
                //banner.style.height = "900px";
                nombreRegistro.innerHTML = '<h1>'+nombre.value+' '+apellido.value+'</h1>';
               // location.reload();
            }
        }    
    };
    xhttp.open("GET", "command.php?cmd=insertar&nombre="+nombre.value+"&apellido="+apellido.value+"&email="+email.value+"&rut="+nuevaCadena3+"&telefono="+telefonoFinal+"&region="+region.value, true);
    xhttp.send(); 
} 

//funcion para traer regiones
function traerRegion (){
    var xhttp;
    var regiones="";
    var region = document.getElementById('region');

    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    } else {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");   
    }
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
               
        var regiones = JSON.parse(this.responseText);
            
            for (var i in regiones){
                region.innerHTML += '<option value="'+regiones[i].idregion+'">"'+regiones[i].nombre+'"</option>';
            }
            
        }    
    };
    xhttp.open("GET", "command.php?cmd=region", true);
    xhttp.send();    
}

function quitarEspacio(texto){
    texto.value = texto.value.trim();
}

function comoSeEntero(bases){
    var contador = 0;

    if (bases.checked){
        contador++;
    }
    return contador;
}

function formatoRut (rut){
    rut.value = rut.value.replace(/[.-]/g, '').replace( /^(\d{1,2})(\d{3})(\d{3})(\w{1})$/, '$1.$2.$3-$4');
}

//funcion validar rut
function validarRut(rute){
    var tmpstr = "";
	var intlargo = rute.value
	if (intlargo.length> 0)
	{
		crut = rute.value
		largo = crut.length;
		if ( largo < 2 )
		{
			alert('Rut invalido')
			rute.focus()
			return false;
		}
		for ( i=0; i <crut.length ; i++ )
		if ( crut.charAt(i) != ' ' && crut.charAt(i) != '.' && crut.charAt(i) != '-' )
		{
			tmpstr = tmpstr + crut.charAt(i);
		}
		rut = tmpstr;
		crut=tmpstr;
		largo = crut.length;
 
		if ( largo> 2 )
			rut = crut.substring(0, largo - 1);
		else
			rut = crut.charAt(0);
 
		dv = crut.charAt(largo-1);
 
		if ( rut == null || dv == null )
		return 0;
 
		var dvr = '0';
		suma = 0;
		mul  = 2;
 
		for (i= rut.length-1 ; i>= 0; i--)
		{
			suma = suma + rut.charAt(i) * mul;
			if (mul == 7)
				mul = 2;
			else
				mul++;
		}
 
		res = suma % 11;
		if (res==1)
			dvr = 'k';
		else if (res==0)
			dvr = '0';
		else
		{
			dvi = 11-res;
			dvr = dvi + "";
		}
 
		if ( dvr != dv.toLowerCase() )
		{
			
			return false;
		}	
	}
}








