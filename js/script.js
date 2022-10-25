function validarEnviar() {
  //valido el nombre
  if (document.Contacto.nombre.value.length  == 0) {
      alert("Tiene que escribir su nombre")
      document.Contacto.nombre.focus()
      return 0
  }
//valido el apellido
if (document.Contacto.apellido.value.length  == 0) {
  alert("Tiene que escribir su apellido")
  document.Contacto.apellido.focus()
  return 0
}
  //valido la edad. tiene que ser entero mayor que 18
  edad = document.Contacto.edad.value
  edad = validarEntero(edad)
  document.Contacto.edad.value = edad
  if (edad == "") {
      alert("Tiene que introducir un número entero en su edad.")
      document.Contacto.edad.focus()
      return 0
  } else {
      if (edad < 18) {
          alert("Debe ser mayor de 18 años.")
          document.Contacto.edad.focus()
          return 0
      }
  }


                
    // Validación de e-mail:
    var emailField = document.getElementById('user-email');
    
    // Define our regular expression.
    var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  
    // Using test we can check if the text match the pattern
    if( validEmail.test(emailField.value) ){
      alert("Muchas gracias por enviarnos tus comentarios!!!");
      return true;
    }else{
      alert('Formato de e-mail incorrecto');
      return false;
    }
  

  
  //Finalmente, si llegó hasta aqui, se envia el form.
  alert("Muchas gracias por enviarnos tus comentarios!!!")
  document.Contacto.submit()
}

function validarEntero(valor) {
  //intento convertir a entero.
  //si era un entero no le afecta, si no lo era lo intenta convertir
  valor = parseInt(valor)

  //Compruebo si es un valor numérico
  if (isNaN(valor)) {
      //entonces (no es numero) devuelvo el valor cadena vacia
      return ""
  } else {
      //En caso contrario (Si era un número) devuelvo el valor
      return valor
  }
}