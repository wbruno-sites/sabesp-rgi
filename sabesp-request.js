'use strict';

const SABESP = 'https://www9.sabesp.com.br/agenciavirtual/block/send-receive-updates';

const cheerio = require('cheerio');
const request = require('request');

const ICE_SESSION = 'IuxsMybtJgrGsupG18NtmA';
const J_SESSION_ID = '0001apsiLBV_P_yEPyacWZraT1R:19s4dldpu';
const RGI = '2421964/97'; //194335/90

const body = {
  // 'ice.submit.partial': 'false',
  // 'ice.event.target': '',
  // 'ice.event.captured': 'frmhome:j_id163',
  // 'ice.event.type': 'onclick',
  // 'ice.event.alt': 'false',
  // 'ice.event.ctrl': 'false',
  // 'ice.event.shift': 'false',
  // 'ice.event.meta': 'false',
  // 'ice.event.x': '589',
  // 'ice.event.y': '477',
  // 'ice.event.left': 'true',
  // 'ice.event.right': 'false',
  frmhome: '',
  icefacesCssUpdates: '',
  'javax.faces.ViewState': '12',
  'javax.faces.RenderKitId': '',
  'frmhome:menuID': '',
  '': 'pesquisaNumeroRgi',
  'frmhome:rgi1': RGI,
  cdMenu: '',
  outcomeMenu: '',
  'frmhome:_idcl': 'frmhome:j_id163',
  outcomeparam: 'PROSSEGUIR',
  dsMenu: '',
  'ice.session': ICE_SESSION,
  // 'ice.view': '12',
  // 'ice.focus': 'frmhome:j_id163',
  rand: '0.5068737229265319' };



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

  console.log($("#frmhome\\:pglogado").html());
})


