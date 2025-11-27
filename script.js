$(document).ready(function(){

    const slides = $('.banner-slides');
    const total = slides.children().length;
    let index = 0;

    function goTo(i){
        slides.css('transform', 'translateX(' + (-i * 100) + '%)');
    }
    setInterval(function(){
        index = (index + 1) % total;
        goTo(index);
    }, 3000);

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
