"use strict";

var g_sRouteTemplate = 'src/template/';
var oAppMain = {};

/*
*/
oAppMain.loadTemplate = (sRouteTemplate, sTag, oData) => {
  let sRoute = `${g_sRouteTemplate}${sRouteTemplate}.hbs`
  let sTemplate = Hbs[sRoute](oData);
  let isTemplate = (document.querySelector(sTag).getAttribute('data-template') == 'true');
  let sClassCss = document.querySelector(sTag).getAttribute('data-styles');
  
  if(isTemplate){
    document.querySelector(sTag).setAttribute('class', '');
    document.querySelector(sTag).setAttribute('class', sClassCss);
    document.querySelector(sTag).innerHTML = sTemplate;
  }
}