// Cargar la página con jQuery
$(document).ready(function() {
  // DESHABILIAR BOTÓN CON UNA SOLA CLASE EN INPUTS
  // Fijar al botón como deshabilitado
/*  $('.btn').prop('disabled', true);
  // Habilitar el botón cuando haya contenido en al menos 1 de los inputs
  $('.text-input').keyup(function(){
    if ($(this).val() != '') {
      $('.btn').prop('disabled', false);
    // Cierre de if
    }
  // Cierre de segunda función
  });
*/
  // DESHABILIAR BOTÓN CON DIFERENTES CLASES EN CADA INPUT O MANERAS
  // Crear variables para cada input
  var input1 = $('.text-input-1');
  var input2 = $('iput').first().next();
  var input3 = $('input').last().prev();
  // Crear variable para el input que funciona como botón
  var btn = $('.btn');
  // Fijar al botón como deshabilitado
  $(btn).prop('disabled', true);
  // Habilitar el botón cuando haya contenido en los inputs
  $('.text-input').keyup(function() {
    // Validar que los 3 inputs contengan texto
    if ($(input1).val() != '' && $(input2).val() != '' && $(input3).val() != '') {
      $(btn).prop('disabled', false);
      // Agregar color negro al botón después de validad los 3 input y hacer que tenga negrita
      $(btn).css({
        'color' : 'inherit',
        'fontWeight' : 'bold'
      // Cierre de propiedad CSS
      });
    // Cierre de if
    }
  // Cierre de segunda función
  });
// Cierre de función general
});
