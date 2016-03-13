'use strict';

const SABESP_HOME = 'https://www9.sabesp.com.br/agenciavirtual/pages/home/paginainicial.iface';
const SABESP = 'https://www9.sabesp.com.br/agenciavirtual/block/send-receive-updates';

const cheerio = require('cheerio');
const request = require('request');
const Promise = require('bluebird');

const ICE_SESSION = 'ufqJDq03NMNrF0CzZbiFYs';
const J_SESSION_ID = '0003iG3dFm2476NqGo1xhDYcWqq:18bh9jn9d';
const RGI = '194335/90'; // '2421964/97'; //194335/90
var rand = Math.random();
var VIEW = 49;
var CLICKHOME = 'frmhome:logoTopo';
var CLICKBTNNINJA = 'frmhome:botaoNinja';



const body = {
  'ice.submit.partial':false,


  'ice.event.target':CLICKBTNNINJA,
  'ice.event.captured':CLICKBTNNINJA,
  'frmhome:_idcl': '',
  
  'ice.event.type':'onclick',
  'frmhome:botaoNinja':'',
  'dsMenu':'',
  'outcomeSubMenu':'',
  'cdNoticia':'',
  'outcomeMenu':'',
  'cdMenu':'',
  'frmhome:listaFunc':'SUA_CONTA_CONSULTA_HISTORICO_CONTAS',
  '':'paginainicial',
  'frmhome:menuID':'0',
  'javax.faces.RenderKitId':'ICEfacesRenderKit',
  'javax.faces.ViewState':VIEW,
  'icefacesCssUpdates':'',
  'frmhome':'frmhome',
  'ice.session':ICE_SESSION,
  'ice.view':VIEW,
  'ice.focus:frmhome':'listaFunc',
  'rand':rand
  };


// request.get(SABESP_HOME, function(err, response) {
//   console.log(response.body);
// });



var j = request.jar();
var cookie = request.cookie('JSESSIONID='+J_SESSION_ID+';ice.sessions='+ICE_SESSION);
j.setCookie(cookie, SABESP);




	request({
	  url: SABESP,
	  method: 'POST',
	  headers: {
		'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*-/*;q=0.8',
		'Host': 'www9.sabesp.com.br',
		'Origin': 'http://www9.sabesp.com.br',
		'Referer': 'https://www9.sabesp.com.br/agenciavirtual/pages/home/paginainicial.iface',
		'User-Agent': 'Mozilla/5.0 (X11; Linux i686) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/30.0.1599.114 Safari/537.36',
	  },
	  jar: j,
	  form: body
	}, function(err, response) {


		var body = response.body;

		  var $ = cheerio.load(body);

			console.log($.html());
		//  console.log($('.contaContent').contents().length);
		  //console.log($('.contaContent').text());
	})


