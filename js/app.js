$(document).ready(function() {
  // Declarando Variables

  let input = $('#encryption');  
  let btnDecipher = $('#decipher');
  let btnCipher = $('#cipher');
  let content = $('#conten');
  let centinel = false;
	
  // Funcion para el boton Cifrar

  btnCipher.on('click', () => {
    let valueInput = input.val();
    if (valueInput.match(/[a-z]/i)) {
      let cifrado = '';
      for (let i = 0; i < valueInput.length; i++) {
        let toAscci = valueInput.charCodeAt(i);
        let toAscci2 = valueInput[i];
        if ((toAscci >= 65) && (toAscci <= 90)) {
          toAscci2 = String.fromCharCode(((toAscci - 65 + 33) % 26) + 65);
        } else if ((toAscci >= 97) && (toAscci <= 122)) {
          toAscci2 = String.fromCharCode(((toAscci - 97 + 33) % 26) + 97);
        }
        cifrado += toAscci2;
      } 
      content.text(cifrado);
    } else {
      alert('Ingresa un Texto Válido');
    }
  });
});