$(document).ready(function() {
    // Desplazamiento suave al hacer clic en los enlaces del menú lateral
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 50 // Ajusta el desplazamiento para el margen superior
            }, 1000);
        }
    });

    // Efecto de movimiento en los enlaces del menú al pasar el cursor
    $('.sidebar nav ul li a').hover(
        function() {
            $(this).parent().css('transform', 'translateX(10px)');
        },
        function() {
            $(this).parent().css('transform', 'translateX(0)');
        }
    );

    // Manejo del formulario de contacto
    $('#formContacto').submit(function(event) {
        event.preventDefault();  // Prevenir el envío del formulario

        // Obtener los valores del formulario
        var nombre = $('#nombre').val();
        var email = $('#email').val();
        var mensaje = $('#mensaje').val();

        // Validación básica
        if (nombre === '' || email === '' || mensaje === '') {
            alert('Todos los campos son requeridos.');
        } else {
            alert('Gracias por tu mensaje, ' + nombre + '. Nos pondremos en contacto contigo pronto.');
            $(this)[0].reset();  // Reiniciar el formulario
        }
    });
});
