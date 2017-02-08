/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$( ".menu" ).click(function() {
		$(this).toggleClass('m c');
		$('.menu').toggleClass('fa fa-times');
		$('#menu-item').toggleClass( "show-menu hide-menu" );
	});

	$( "#menu-item a" ).click(function() {
		$('.menu').toggleClass('c m');                
		$('.menu').toggleClass('fa fa-times');
		$('#menu-item').toggleClass( "show-menu hide-menu" );
	});

