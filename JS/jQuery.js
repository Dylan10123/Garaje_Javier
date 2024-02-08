$(document).ready(function () {
    $('.slide').glider();

    $('#btn-solicitud1').hover(function () {
        $('#img1').animate({
            backgroundSize: '105%',
        }, 200)
    }, function () {
        $('#img1').animate({
            backgroundSize: '100%',
        }, 200).css('box-shadow', 'none')
    })

    $('#btn-solicitud2').hover(function () {
        $('#img2').animate({
            backgroundSize: '105%',
        }, 200)
    }, function () {
        $('#img2').animate({
            backgroundSize: '100%',
        }, 200).css('box-shadow', 'none')
    })

    // Array cin todas las marcas que contempla el autocompletado
    const marcasDeCoches = [
        "Audi",
        "BMW",
        "Mercedes-Benz",
        "Toyota",
        "Honda",
        "Ford",
        "Chevrolet",
        "Ferrari",
        "Lamborghini",
        "Porsche",
        "Volkswagen",
        "Tesla",
        "Volvo",
        "Nissan",
        "Subaru",
        "Mazda",
        "Jeep",
        "Hyundai",
        "Kia",
        "Renault"
    ];

    // llamada a la función de autocompletado
    $( "#marca" ).autocomplete({
        source: marcasDeCoches
      });
});