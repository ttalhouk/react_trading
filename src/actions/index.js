import axios from 'axios';
export const FETCH_QUOTE = 'FETCH_QUOTE';

const ROOT_URL = `http://dev.markitondemand.com/MODApis/Api/v2/Quote/json`;

var ajax = axios.create({
  headers: {"Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Credentials": "true",
  'dataType':       'json',
  'contentType':    'application/json'}
});
export function fetchQuote(symbol) {
  const url = `${ROOT_URL}?symbol=${symbol}`;

  // const options = {
  //   params:{
  //     symbol:symbol
  //   },
  //   headers: headers
  // };


  const request = ajax.get(url);

  console.log('Request:', request);
  return {
    type: FETCH_QUOTE,
    payload: request
  };
}
