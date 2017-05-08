'use strict';

$(document).ready(function(){

    $('a[href="#"]').click(function(event){
        event.preventDefault();
    });

    var $tab = $('header ul li a'),
        $nav = $('header p a');

    $tab.on('click', function(){
        $tab.stop(false, false).removeClass('act');
        $(this).stop(false, false).addClass('act');
    });

    // SideMenu
    $nav.on('click', function(){
        $(this).parents().next().stop(false, true).animate({
            width: 'toggle'
        }, 400);
    });

});
