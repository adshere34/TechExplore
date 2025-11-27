$(document).ready(function () {

    let index = 0;
    const slides = $(".banner-diapositivas img").length;

    function cambiarSlide() {
        index = (index + 1) % slides;
        $(".banner-diapositivas").css("transform", `translateX(-${index * 100}%)`);
    }
    setInterval(cambiarSlide, 3000);

    $('#signup').on('submit', function(e){
        e.preventDefault();
        
        const nombre = $('#nombre').val().trim();
        const email = $('#email').val().trim();

        if(!nombre || !email){
            $('#msg').text('Por favor completa todos los campos.');
            return;
        }
        $('#msg').text('Gracias ' + nombre + '! Te hemos enviado un correo a ' + email + '.');

        this.reset();
    });

});

