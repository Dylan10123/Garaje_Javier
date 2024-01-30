$(document).ready(function () {
    $('.slide').glider();

    $('#btn-solicitud1').hover(function () {
        $('#img1').animate({
            width: '+=15px',
            height: '+=5px',
        }, 200).css('box-shadow', '0px 1.3px 1.5px -8px rgba(0, 0, 0, 0.108), 0px 4.7px 3.7px -8px rgba(0, 0, 0, 0.138), 0px 10.9px 6.9px -8px rgba(0, 0, 0, 0.155), 0px 21px 12.3px -8px rgba(0, 0, 0, 0.167), 0px 37px 23px -8px rgba(0, 0, 0, 0.176), 0px 61px 55px -8px rgba(0, 0, 0, 0.19)')
    }, function () {
        $('#img1').animate({
            width: '-=15px',
            height: '-=5px'
        }, 200).css('box-shadow', 'none')
    })

    $('#btn-solicitud2').hover(function () {
        $('#img2').animate({
            width: '+=15px',
            height: '+=5px'
        }, 200).css('box-shadow', '0px 1.3px 1.5px -8px rgba(0, 0, 0, 0.108), 0px 4.7px 3.7px -8px rgba(0, 0, 0, 0.138), 0px 10.9px 6.9px -8px rgba(0, 0, 0, 0.155), 0px 21px 12.3px -8px rgba(0, 0, 0, 0.167), 0px 37px 23px -8px rgba(0, 0, 0, 0.176), 0px 61px 55px -8px rgba(0, 0, 0, 0.19)')
    }, function () {
        $('#img2').animate({
            width: '-=15px',
            height: '-=5px'
        }, 200).css('box-shadow', 'none')
    })


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

    $( "#marca" ).autocomplete({
        source: marcasDeCoches
      });
});