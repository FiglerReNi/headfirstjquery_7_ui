$(document).ready(function () {
    $('#datepicker').datepicker({
        //hány hónapot ugorjon
        stepMonths: 3,
        //hónap, év választás
        changeMonth: true,
        changeYear: true
    });

    //egy esetén
    // $('#radio1').button();
    //ha több választási lehetőséget akarunk
    $('#type_select').buttonset();

    //csúszka
    $('#myslider1').slider({
        value: 0, //kezdő érték
        min: 0, //min érték
        max: 500, //max érték
        step: 10, //lépésköz
        orientation: 'horizontal', //csúszka vízszintes vagy függőleges
        slide: function( event, ui ) {
            $('#value1').val( ui.value);
        }
    });
    $('#myslider2').slider({
        value: 0, //kezdő érték
        min: 0, //min érték
        max: 5000, //max érték
        step: 5, //lépésköz
        orientation: 'horizontal', //csúszka vízszintes vagy függőleges
        slide: function( event, ui ) {
            $('#value2').val( ui.value);
        }
    });
    $('#myslider3').slider({
        value: 0, //kezdő érték
        min: 0, //min érték
        max: 20, //max érték
        step: 1, //lépésköz
        orientation: 'horizontal', //csúszka vízszintes vagy függőleges
        slide: function( event, ui ) {
            $('#value3').val( ui.value);
        }
    });
});




/* UI
-effects plug-ins
-interaction plug-ins
-widget plug-ins
 */