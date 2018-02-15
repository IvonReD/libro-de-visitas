var textOut = document.getElementById('text-out');

/* ----- Funcion de Agrandar Texto ---- */
var fontLarge = document.getElementById('font-large');
fontLarge.addEventListener("click", fontSizeLarge);
function fontSizeLarge() {
  textOut.style.fontSize = 60 + 'px';
}

/* ----- Funcion de Texto Mediana ---- */
var fontMedium = document.getElementById('font-medium');
fontMedium.addEventListener("click", fontSizeMedium);
function fontSizeMedium() {
  textOut.style.fontSize = 35 + 'px';
}

/* ----- Funcion de Texto Chico ---- */
var fontSmall = document.getElementById('font-small');
fontSmall.addEventListener("click", fontSizeSmall);
function fontSizeSmall() {
  textOut.style.fontSize = 10 + 'px';
}

/* ----- Funcion cambia color de texto ---- */
var colorText = document.getElementById('color-text');
colorText.addEventListener("click", colorFont);
function colorFont() {
  colorText = prompt("Escriba el color del texto:");
  textOut.style.color = colorText;
}

/* ----- Funcion cambia fondo del texto ---- */

var backColor = document.getElementById('color');
backColor.addEventListener("click", backColorFont);
function backColorFont() {
  backColor = prompt("Escriba el color de fondo:");
  textOut.style.background = backColor;
}

/* ----- Funcion cambia el texto a la izquierda ---- */
var textLeft = document.getElementById('left-text');
textLeft.addEventListener("click", leftFont);
function leftFont() {
  textOut.style.textAlign="left";
}

/* ----- Funcion centrar el Texto ---- */

var textCenter = document.getElementById('center-text');
textCenter.addEventListener("click", centerFont);
function centerFont() {
  textOut.style.textAlign="center";
}


/* ----- Funcion cambia el texto a la izquierda ---- */
var textRight = document.getElementById('right-text');
textRight.addEventListener("click", rightFont);
function rightFont() {
  textOut.style.textAlign="right";
}
