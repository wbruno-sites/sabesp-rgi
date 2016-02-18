'use strict';

const SABESP = 'https://www9.sabesp.com.br/agenciavirtual/block/send-receive-updates';

const cheerio = require('cheerio');
const request = require('request');

const ICE_SESSION = 'IuxsMybtJgrGsupG18NtmA';
const J_SESSION_ID = '0001apsiLBV_P_yEPyacWZraT1R:19s4dldpu';


const body = { 'ice.submit.partial': 'false',
  'ice.event.target': 'frmhome:j_id51',
  'ice.event.captured': 'frmhome:j_id51',
  'ice.event.type': 'onclick',
  'ice.event.alt': 'false',
  'ice.event.ctrl': 'false',
  'ice.event.shift': 'false',
  'ice.event.meta': 'false',
  'ice.event.x': '183',
  'ice.event.y': '142',
  'ice.event.left': 'true',
  'ice.event.right': 'false',
  frmhome: 'frmhome',
  // icefacesCssUpdates: '',
  // 'javax.faces.ViewState': '1',
  // 'javax.faces.RenderKitId': 'ICEfacesRenderKit',
  'frmhome:menuID': '',
  '': 'contaalteravencimentoidentifica',
  'frmhome:j_id125': '',
  'frmhome:rgi1': '',
  'frmhome:cpf': '',
  'frmhome:cnpj': '',
  'frmhome:inscricao': '',
  cdMenu: '1',
  outcomeMenu: 'SUBMENUSUACONTA',
  'frmhome:_idcl': 'frmhome:j_id51',
  outcomeparam: '',
  dsMenu: '',
  'ice.session': ICE_SESSION,
  'ice.view': '1',
  'ice.focus': 'frmhome:j_id51',
  rand: '0.8117253492984771' };


var requestify = require('requestify');

requestify.post(SABESP, body, {
    cookies: {
      'JSESSIONID': J_SESSION_ID,
      'ice.sessions': ICE_SESSION
    },
    headers: {
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      'Host': 'www9.sabesp.com.br',
      'Referer': 'https://www9.sabesp.com.br/agenciavirtual/pages/home/paginainicial.iface',
      'DNT': 1,
      'User-Agent': 'Mozilla/5.0 (X11; Linux i686) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/30.0.1599.114 Safari/537.36',
    }
  })
  .then(function(response) {
    console.log(JSON.stringify(response.body));

    console.log(response.body, response.getHeaders(), response.getCode());
  })
  .catch(function(err) {
    console.log(err);
  })




