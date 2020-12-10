String.prototype.replaceAt = function(index, replacement) {
  if (index >= this.length) {
      return this.valueOf();
  }
  return this.substring(0, index) + replacement + this.substring(index + 1);
}

function jugar() {
  // var arrayPalabras = ['abrelatas','disposicion','altavoz','aire','mesa','libros','escuela','pelusa','esfera','periferico','animal','esquina','perro', 'casco','piscina','pasto','cuaderno','planta','atomo','francia','posavasos','galleta','programa','puerta'];

  // var palabra = arrayPalabras[Math.floor(Math.random()* arrayPalabras.length)];

  // var huecos = '';
  // for (let i = 0; i < palabra.length; i++) { huecos += '_' };

  // Palabra pre-definida
  var palabra = 'c a r';
  var huecos = '_ _ _'; 
  
  var letra = document.getElementById('letra');
  var render = document.getElementById('dibujo');

  var fallos = 5;
  do {
    // var letra = prompt(`Adivina la palabra: \n ${huecos} \n (Te quedan ${fallos} fallos)`);
    console.log(letra);

    for (var j = 0; j <= palabra.length; j++) {
      if (palabra.includes(letra)) {
        if (palabra.charAt(j) == letra) {
          huecos = huecos.replaceAt(j, palabra.charAt(j));
          if (palabra == huecos) {
            return alert(`Has ganado!, la palabra oculta era: ${palabra}`);
          }
          break;
        }
      } else {
        // alert('Esa letra no aparece en la palabra. Prueba de nuevo.');
        // console.log('fallo');
        render.innerHTML = `<p>Esa letra no aparece en la palabra. Prueba de nuevo.</p><img src="img/ahorcado${fallos}.jpg">`;
        fallos--;
        break;
      }
    }

  } while (fallos > 0);
};

let boton = document.getElementById('boton');
boton.addEventListener('click', jugar);