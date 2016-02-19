/*
 * jQuery alice 2.0.0 plugin
 * Copyright (c) 2016 Shion Kirihara  (http://yzatelier.web.fc2.com/)
 * Released under the MIT license
 * http://osdn.jp/projects/opensource/wiki/licenses%2FMIT_license
 * http://www.opensource.org/licenses/mit-license.php
 */
if (!shokiYZ1){var shokiYZ1 = '名無し0';}
if (!shokiYZ2){var shokiYZ2 = '名無し0';}

jQuery.noConflict();
(function($) {

$(function(){
var divide = '/';
var shokiYZ1cookies = shokiYZ1;
var shokiYZ2cookies = shokiYZ2;
var i;
var c;


if(!$.cookie('.YZ1 .names0')){$('.YZ1 .names0').text(shokiYZ1cookies);if($('.YZ1.cms').length){}else{$('.YZ1 .names0').attr('placeholder', shokiYZ1cookies);}if(!$.cookie('yumeYZ1a')){for (c = 0; c <= shokiYZ1cookies.length; c++){$('.YZ1 .names0k'+c).text(shokiYZ1cookies.substr(c-1,1));}}}
if(!$.cookie('.YZ2 .names0')){$('.YZ2 .names0').text(shokiYZ2cookies);if($('.YZ2.cms').length){}else{$('.YZ2 .names0').attr('placeholder', shokiYZ2cookies);}if(!$.cookie('yumeYZ2a')){for (c = 0; c <= shokiYZ2cookies.length; c++){$('.YZ2 .names0k'+c).text(shokiYZ2cookies.substr(c-1,1));}}}

$('#enterYZ1').click(function(){var namelistYZ1 = $('.YZ1 input.names0').val();$.cookie('yumeYZ1a',namelistYZ1, {expires:365,path:divide});if($('.YZ1.reg').length){}else{$('.YZ1 input.names0').fadeTo('500', 0.1).fadeTo('500', 1);}if($('.YZ1 input.names0').val()){$('.YZ1 .names0').text(namelistYZ1);}if(!$('.YZ1 input.names0').val()){$('.YZ1 .names0').text(shokiYZ1);}});
$('#enterYZ2').click(function(){var namelistYZ2 = $('.YZ2 input.names0').val();$.cookie('yumeYZ2a',namelistYZ2, {expires:365,path:divide});if($('.YZ2.reg').length){}else{$('.YZ2 input.names0').fadeTo('500', 0.1).fadeTo('500', 1);}if($('.YZ2 input.names0').val()){$('.YZ2 .names0').text(namelistYZ2);}if(!$('.YZ2 input.names0').val()){$('.YZ2 .names0').text(shokiYZ2);}});

if($.cookie('yumeYZ1a')){var yumeYZ1a = $.cookie('yumeYZ1a');$('.YZ1 .names0').val(yumeYZ1a).text(yumeYZ1a);for (c = 0; c <= yumeYZ1a.length; c++){$('.YZ1 .names0k'+c).val(yumeYZ1a).text(yumeYZ1a.substr(c-1,1));}if(!yumeYZ1a || yumeYZ1a === 'undefined'){$('.YZ1 .names0').val('').text(shokiYZ1cookies);for(c = 0; c <= shokiYZ1cookies.length; c++){$('.YZ1 .names0k'+c).text(shokiYZ1cookies.substr(c-1,1));}}}
if($.cookie('yumeYZ2a')){var yumeYZ2a = $.cookie('yumeYZ2a');$('.YZ2 .names0').val(yumeYZ2a).text(yumeYZ2a);for (c = 0; c <= yumeYZ2a.length; c++){$('.YZ2 .names0k'+c).val(yumeYZ2a).text(yumeYZ2a.substr(c-1,1));}if(!yumeYZ2a || yumeYZ2a === 'undefined'){$('.YZ2 .names0').val('').text(shokiYZ2cookies);for(c = 0; c <= shokiYZ2cookies.length; c++){$('.YZ2 .names0k'+c).text(shokiYZ2cookies.substr(c-1,1));}}}

$('#deleteYZ1').click(function(){$('.YZ1 .names0').val('');$('.YZ1 input.names0').text(shokiYZ1);$.cookie('yumeYZ1a', null, { path: '/' });$.removeCookie('yumeYZ1a', {path:divide});$.removeCookie('yumeYZ1a', {path:'/'});});
$('#deleteYZ2').click(function(){$('.YZ2 .names0').val('');$('.YZ2 input.names0').text(shokiYZ2);$.cookie('yumeYZ2a', null, { path: '/' });$.removeCookie('yumeYZ2a', {path:divide});$.removeCookie('yumeYZ2a', {path:'/'});});

});

})(jQuery);