"use strict";

var g_sRouteTemplate = 'src/template/';

$(function(){
});

/*
*/
function myd_openModalWindow(sSelector){
	$('#'+sSelector).addClass('is-active');
}

/*
*/
function myd_closeModalWindow(sSelector){
	$('#'+sSelector).removeClass('is-active');
}

/*
*/
function openFloatHeaderSearch(){
    $('.my-floatheader-search').addClass('is-active');
}

/*
*/
function closeFloatHeaderSearch(){
    $('.my-floatheader-search').removeClass('is-active');
}

/*
*/
function sideMenuController(){
	let oBackground = $(".my-sidebar #background");
	let oMenu = $(".my-sidebar #menu");
    let iTime = 400;

    if(oBackground.css('display') != 'block'){
    	oBackground.css('display','block');

    	oMenu.animate({
    		width: '100%'
    	}, iTime, function() {
    		oMenu.addClass('is-active');
    	});
    }else{
    	oMenu.removeClass('is-active');
    	oMenu.animate({
    		width: 0
    	}, iTime, function() {
    		oBackground.css('display','none');
    	});
    }
}
