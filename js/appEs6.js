$(document).ready(function() {
  // Declarando Variables

  let input = $('#encryption');  
  let btnDecipher = $('#decipher');
  let btnCipher = $('#cipher');
  let content = $('#conten');
	
  // Funcion para el boton decifrar

  btnCipher.on('click', () => {
    // Variable para el valor del input
    const valueInput = input.val();
    if (valueInput.match(/[a-z]/i)) {
      // Variable para almacenar el resultado
      let cipher = '';
      // Recorriendo el valor del input
      for (var i = 0; i < valueInput.length; i++) {
        let toAscci = valueInput.charCodeAt(i);
        let toAscci2 = valueInput[i];
        if ((toAscci >= 65) && (toAscci <= 90)) {
          toAscci2 = String.fromCharCode(((toAscci - 65 + 33) % 26) + 65); // Utilizando el Algoritmo de Cifrado de Cesar para cifrar
        } else if ((toAscci >= 97) && (toAscci <= 122)) {
          toAscci2 = String.fromCharCode(((toAscci - 97 + 33) % 26) + 97);
        }
        cipher += toAscci2;
      } 
      // Agregando al contenedor
      content.text(cipher);
      valueInput = '';
    } else {
      content.text('Ingresa un Texto Válido');     
    }
  });

  // Funcion para el boton Cifrar

  btnDecipher.on('click', () => {
    // Variable para el valor del input
    const valueInput = input.val();
    if (valueInput.match(/[a-z]/i)) {
      // Variable para almacenar el resultado
      let decipher = '';
      // Recorriendo el valor del input
      for (var i = 0; i < valueInput.length; i++) {
        let toAscci = valueInput.charCodeAt(i);
        let toAscci2 = valueInput[i];
        if ((toAscci >= 65) && (toAscci <= 90)) {
          toAscci2 = String.fromCharCode(((toAscci - 65 - 7 + 52) % 26) + 65); // Utilizando el Algoritmo de Cifrado de Cesar para decifrar
        } else if ((toAscci >= 97) && (toAscci <= 122)) {
          toAscci2 = String.fromCharCode(((toAscci - 97 - 7 + 52) % 26) + 97);
        }
        decipher += toAscci2;
      }
      // Agregando al contenedor
      content.text(decipher);
      valueInput = '';
    } else {
      content.text('Ingresa un Texto Válido');
    }
  });
});