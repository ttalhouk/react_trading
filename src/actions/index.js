import axios from 'axios';
import $ from 'jquery';
export const FETCH_QUOTE = 'FETCH_QUOTE';
export const BUY_SHARES = 'BUY_SHARES';

const ROOT_URL = `http://dev.markitondemand.com/MODApis/Api/v2/Quote/jsonp`;

var options = {
  headers: {"Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Credentials": "true",
  'dataType':       'json',
  'contentType':    'application/json'}
  };
export function fetchQuote(symbol) {
  const url = `${ROOT_URL}?symbol=${symbol}`;

  const request = $.ajax({
        data: { symbol: symbol },
        url: ROOT_URL,
        dataType: "jsonp",
      });

  return {
    type: FETCH_QUOTE,
    payload: request
  };
}

export function buyStock(shares, price, symbol) {
  var transaction = {};
  var cost = shares * price;
  transaction[symbol] = {qty: shares, cost: cost};

  return {
    type: BUY_SHARES,
    payload: transaction
  };
}
