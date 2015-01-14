/*!
 * Picker Color v1.0 (http://atmpl.ru/publ/adaptive_elements/generator_cvetov_hsl_hsla_rgb_rgba_hex/22-1-0-54)
 * Copyright 2014-2015 aTmpl.ru.
 * Licensed under MIT (https://github.com/aTmpl/Picker-Color/blob/master/LICENSE)
 */
var browserPrefix = getPrefix();
function getPrefix() {
var myJS = document.getElementsByTagName('script')[0];
if('WebkitOpacity' in myJS.style) return 'webkit';
var regex = /^(Moz|Ms|O)(?=[A-Z])/;
for(var property in myJS.style) {
if(regex.test(property)) {
return property.match(regex)[0];
}
}
return '';
}
function createHSLA(h, s, l, a){
var h = h || document.getElementById('hsl-h').value * 1.0;
var s = s || document.getElementById('hsl-s').value * 1.0;
var l = l || document.getElementById('hsl-l').value * 1.0;
var a = a ||document.getElementById('hsl-a').value * 1.0;
var hslapicker = "";
document.getElementById('hslah').innerHTML = hslapicker;
document.getElementById('hslas').style.background =
'-' + browserPrefix + '-linear-gradient(0deg, hsl('+h+', 0%, '+ l +'%) 0%, hsl('+h+', 100%, '+ l +'%) 100%)';
document.getElementById('hslal').style.background =
'-' + browserPrefix + '-linear-gradient(0deg, hsla('+h+', '+ s +'%, 0%, 1) 0%, hsla('+h+', '+ s +'%, 50%, 1) 50%,  hsla('+h+', '+ s +'%, 100%, 1) 100%)';
document.getElementById('hslaa').style.background =
'-' + browserPrefix + '-linear-gradient(0deg, hsla('+h+', '+ s +'%, '+l+'%, 0) 0%, hsla('+h+', '+ s +'%, '+l+'%, 1) 100%)';}
function changeHSL() {
var h = document.getElementById('hsl-h').value * 1.0;
var s = document.getElementById('hsl-s').value * 1.0;
var l = document.getElementById('hsl-l').value * 1.0;
var a = document.getElementById('hsl-a').value * 1.0;
var hex = '';
a = ((a < 1 && a > 0) ? a : a / 100).toFixed(2);
var el = document.getElementById('hsl-example');
if(a == 1){
var hsla = 'hsl(' + h + ', ' + s + '%, ' + l + '%)'
} else {
var hsla = 'hsla(' + h + ', ' + s + '%, ' + l + '%, ' + a + ')'
}
el.style.backgroundColor = hsla;
var rgba = el.style.backgroundColor;
if(a == 1){
hex = '<br/>' + colorToHex(rgba);
}
el.innerHTML = hsla + " <br/>" + rgba + hex;
document.getElementById('hsl-h-value').textContent = (h < 100)? h + ', ': h + ',';
document.getElementById('hsl-s-value').textContent = (s < 100)? s + '%, ': s + '%,';
document.getElementById('hsl-l-value').textContent = (l < 100)? l + '%, ': l + '%,';
document.getElementById('hsl-a-value').textContent = a + '';
createHSLA(h, s, l, a);
}
function colorToHex(color) {
var digits = /(.*?)rgb\((\d+), (\d+), (\d+)\)/.exec(color);
var red = parseInt(digits[2]);
var green = parseInt(digits[3]);
var blue = parseInt(digits[4]);
var rgb = blue | (green << 8) | (red << 16);
return digits[1] + '#' + rgb.toString(16);
};
changeHSL();
createHSLA();

// - Style browser

navigator.sayswho = (function(){
var ua= navigator.userAgent, tem,
M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
if(/trident/i.test(M[1])){
tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
return 'IE '+(tem[1] || '');
}
if(M[1]=== 'Chrome'){
tem= ua.match(/\bOPR\/(\d+)/)
if(tem!= null) return 'Opera '+tem[1];
}
M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
return M[0];
})();
var browser = navigator.sayswho.toLowerCase();
(function($) {
$('body').addClass(browser);
})(jQuery);
