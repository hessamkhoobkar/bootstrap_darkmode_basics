$(document).ready(function() {

    // if ($('#dark_mode_switch').is(':checked')) {
    //     $('body').attr('data-theme','dark')
    //     alert('checked')
    // }
    // else {
    //     $('body').attr('data-theme','light')
    //     alert('unchecked')
    // }

    // if ($("#dark_mode_switch").attr('checked',true)) { 
    //     alert('checked'); 
    // } 
    // else { 
    //     alert('not checked');
    // }

    // $('input#darkmode').onClick( function () {
    //     $('input#darkmode').is(':checked');
    // })
    
    $('input#darkmode').change(function() {
        $(this).prop('checked');
        // $('body').attr('data-theme','dark')

        $('body').attr('data-theme', function(index, attr){
            return attr == 'dark' ? null : 'dark';
        });
    })

    // $('input#darkmode').is(':checked')

    if ($('input#darkmode').is(':checked')) {
        console.log('checked');
    } else {
        console.log('not checked');  
    }

    console.log('document ready');
});


