﻿/*
 * jQuery alice 2.0.0 plugin
 * Copyright (c) 2016 Shion Kirihara  (http://yzatelier.web.fc2.com/)
 * Released under the MIT license
 * http://osdn.jp/projects/opensource/wiki/licenses%2FMIT_license
 * http://www.opensource.org/licenses/mit-license.php
 */
if (!shokiYZ1){var shokiYZ1 = '名無し0,名無し1,名無し2,名無し3,名無し4,名無し5,名無し6,名無し7,名無し8,名無し9';}
if (!shokiYZ2){var shokiYZ2 = '名無し0,名無し1,名無し2,名無し3,名無し4,名無し5,名無し6,名無し7,名無し8,名無し9';}

jQuery.noConflict();
(function($) {

$(function(){
var divide = '/';
var shokiYZ1cookies = shokiYZ1.split(',');
var shokiYZ2cookies = shokiYZ2.split(',');
var i;
var c;


for (i = 0; i <= 9; i++){
	if(!$.cookie('.YZ1 .names'+i)){$('.YZ1 .names'+i).text(shokiYZ1cookies[i]);if($('.YZ1.cms').length){}else{$('.YZ1 .names'+i).attr('placeholder', shokiYZ1cookies[i]);}if(!$.cookie('yumeYZ1j')){for (c = 0; c <= shokiYZ1cookies[i].length; c++){$('.YZ1 .names'+i+'k'+c).text(shokiYZ1cookies[i].substr(c-1,1));}}}
	if(!$.cookie('.YZ2 .names'+i)){$('.YZ2 .names'+i).text(shokiYZ2cookies[i]);if($('.YZ2.cms').length){}else{$('.YZ2 .names'+i).attr('placeholder', shokiYZ2cookies[i]);}if(!$.cookie('yumeYZ2j')){for (c = 0; c <= shokiYZ2cookies[i].length; c++){$('.YZ2 .names'+i+'k'+c).text(shokiYZ2cookies[i].substr(c-1,1));}}}
}

$('#enterYZ1').click(function(){var namelistYZ1 = $('.YZ1 input.names0').val() + ',' + $('.YZ1 input.names1').val() + ',' + $('.YZ1 input.names2').val() + ',' + $('.YZ1 input.names3').val() + ',' + $('.YZ1 input.names4').val() + ',' + $('.YZ1 input.names5').val() + ',' + $('.YZ1 input.names6').val() + ',' + $('.YZ1 input.names7').val() + ',' + $('.YZ1 input.names8').val()+ ',' + $('.YZ1 input.names9').val();$.cookie('yumeYZ1j',namelistYZ1, {expires:365,path:divide});for (i = 0; i <= 9; i++){if($('.YZ1.reg').length){}else{$('.YZ1 input.names'+i).fadeTo('500', 0.1).fadeTo('500', 1);}if($('.YZ1 input.names'+i).val()){$('.YZ1 .names'+i).text(namelistYZ1.split(',')[i]);}if(!$('.YZ1 input.names'+i).val()){$('.YZ1 .names'+i).text(shokiYZ1.split(',')[i]);}}});
$('#enterYZ2').click(function(){var namelistYZ2 = $('.YZ2 input.names0').val() + ',' + $('.YZ2 input.names1').val() + ',' + $('.YZ2 input.names2').val() + ',' + $('.YZ2 input.names3').val() + ',' + $('.YZ2 input.names4').val() + ',' + $('.YZ2 input.names5').val() + ',' + $('.YZ2 input.names6').val() + ',' + $('.YZ2 input.names7').val() + ',' + $('.YZ2 input.names8').val()+ ',' + $('.YZ2 input.names9').val();$.cookie('yumeYZ2j',namelistYZ2, {expires:365,path:divide});for (i = 0; i <= 9; i++){if($('.YZ2.reg').length){}else{$('.YZ2 input.names'+i).fadeTo('500', 0.1).fadeTo('500', 1);}if($('.YZ2 input.names'+i).val()){$('.YZ2 .names'+i).text(namelistYZ2.split(',')[i]);}	if(!$('.YZ2 input.names'+i).val()){$('.YZ2 .names'+i).text(shokiYZ2.split(',')[i]);}}});

for (i = 0; i <= 9; i++){
	if($.cookie('yumeYZ1j')){var yumeYZ1j = $.cookie('yumeYZ1j').split(',');$('.YZ1 .names'+i).val(yumeYZ1j[i]).text(yumeYZ1j[i]);for (c = 0; c <= yumeYZ1j[i].length; c++){$('.YZ1 .names'+i+'k'+c).val(yumeYZ1j[i]).text(yumeYZ1j[i].substr(c-1,1));}if(!yumeYZ1j[i] || yumeYZ1j[i] === 'undefined'){$('.YZ1 .names'+i).val('').text(shokiYZ1cookies[i]);for(c = 0; c <= shokiYZ1cookies[i].length; c++){$('.YZ1 .names'+i+'k'+c).text(shokiYZ1cookies[i].substr(c-1,1));}}}
	if($.cookie('yumeYZ2j')){var yumeYZ2j = $.cookie('yumeYZ2j').split(',');$('.YZ2 .names'+i).val(yumeYZ2j[i]).text(yumeYZ2j[i]);for (c = 0; c <= yumeYZ2j[i].length; c++){$('.YZ2 .names'+i+'k'+c).val(yumeYZ2j[i]).text(yumeYZ2j[i].substr(c-1,1));}if(!yumeYZ2j[i] || yumeYZ2j[i] === 'undefined'){$('.YZ2 .names'+i).val('').text(shokiYZ2cookies[i]);for(c = 0; c <= shokiYZ2cookies[i].length; c++){$('.YZ2 .names'+i+'k'+c).text(shokiYZ2cookies[i].substr(c-1,1));}}}
}

$('#deleteYZ1').click(function(){for (i = 0; i <= 9; i++){$('.YZ1 input.names'+i).val('');$('.YZ1 .names'+i).text(shokiYZ1.split(',')[i]);}$.cookie('yumeYZ1j', null, { path: '/' });$.removeCookie('yumeYZ1j', {path:divide});$.removeCookie('yumeYZ1j', {path:'/'});});
$('#deleteYZ2').click(function(){for (i = 0; i <= 9; i++){$('.YZ2 input.names'+i).val('');$('.YZ2 .names'+i).text(shokiYZ2.split(',')[i]);}$.cookie('yumeYZ2j', null, { path: '/' });$.removeCookie('yumeYZ2j', {path:divide});$.removeCookie('yumeYZ2j', {path:'/'});});

});

})(jQuery);