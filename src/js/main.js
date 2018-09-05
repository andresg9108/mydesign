"use strict";

var g_sRouteTemplate = 'src/template/';

$(function(){
});

/*
*/
function openModalWindow(sSelector){
	$('#'+sSelector).addClass('is-active');
}

/*
*/
function closeModalWindow(sSelector){
	$('#'+sSelector).removeClass('is-active');
}