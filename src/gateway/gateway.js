const baseUrl = 'https://api.apilayer.com/exchangerates_data/latest';

// const myHeaders = new Headers();
// myHeaders.append('apikey', 'pHVJrTYQg5JzZO0bAcyjmDqgeywcVxLr');

const apikey = 'pHVJrTYQg5JzZO0bAcyjmDqgeywcVxLr'

const requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: { apikey },
};

export const fetchCurrencyData = () => {
  return fetch(baseUrl, requestOptions)
    .then(response => response.json())
    .catch(error => console.log('error', error));
};

export const fetchConvert = ( fromCurrency, toCurrency) => {
  return fetch(`${baseUrl}?base=${fromCurrency}&symbols=${toCurrency}`)
    .then(response => response.json())
    .catch(err => console.error(err));
};