'use strict';

const SABESP_HOME = 'https://www9.sabesp.com.br/agenciavirtual/pages/home/paginainicial.iface';
const SABESP = 'https://www9.sabesp.com.br/agenciavirtual/block/send-receive-updates';

const cheerio = require('cheerio');
const request = require('request');

const ICE_SESSION = 'rRmMhoMWhh2snlVQM1uRRQ';
const J_SESSION_ID = '0001nlnDCqp8RmoGCAcWQqhfaJc:19s4dlfap';
const RGI = '194335/90'; // '2421964/97'; //194335/90

const body = {
  'ice.submit.partial':false,
  'ice.event.target':'frmhome:botaoNinja',
  'ice.event.captured':'frmhome:botaoNinja',
  'ice.event.type':'onclick',
  'ice.event.alt':false,
  'ice.event.ctrl':false,
  'ice.event.shift':false,
  'ice.event.meta':false,
  'ice.event.x':0,
  'ice.event.y':203,
  'ice.event.left':false,
  'ice.event.right':false,
  'frmhome:botaoNinja':'',
  'dsMenu':'',
  'outcomeSubMenu':'',
  'frmhome:_idcl':'',
  'cdNoticia':'',
  'outcomeMenu':'',
  'cdMenu':'',
  'frmhome:listaFunc':'SUA_CONTA_CONSULTA_HISTORICO_CONTAS',
  '':'paginainicial',
  'frmhome:menuID':'0',
  'javax.faces.RenderKitId':'ICEfacesRenderKit',
  'javax.faces.ViewState':'1',
  'icefacesCssUpdates':'',
  'frmhome':'frmhome',
  'ice.session':ICE_SESSION,
  'ice.view':'1',
  'ice.focus:frmhome':'listaFunc',
  'rand':0.13521429593674839
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

  // var $ = cheerio.load(body);

  console.log(body);
})


