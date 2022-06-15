import React, { useState, useEffect } from 'react';
import { CurrencyInput } from './component/CurrencyInput/CurrencyInput';
import './common.scss';
import { fetchCurrencyData, fetchConvert } from './gateway/gateway';
import { Header } from './component/Header/Header';

export const App = () => {
  const [currencies, setCurrencies] = useState([]);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [exchangeRate, setExchangeRate] = useState();
  const [amount, setAmount] = useState(1);
  const [amountFromCurrency, setAmountFromCurrency] = useState(true);
  const [visible, setVisible] = useState(false);

  let toAmount, fromAmount;
  if (amountFromCurrency) {
    fromAmount = amount;
    toAmount = amount * exchangeRate;
  } else {
    toAmount = amount;
    fromAmount = amount / exchangeRate;
  }

  useEffect(() => {
    fetchCurrencyData().then(data => {
      setCurrencies(Object.keys(data.rates));
      setFromCurrency(data.base);
      setToCurrency(Object.keys(data.rates)[0]);
      setExchangeRate(data.rates[Object.keys(data.rates)[0]]);
    });
  }, []);

  useEffect(() => {
    if (fromCurrency !== null && toCurrency !== null ) {
      fetchConvert(fromCurrency, toCurrency).then(data => setExchangeRate(data.rates[toCurrency]));
    }
  }, [fromCurrency, toCurrency]);

  const handleFromAmountChange = event => {
    setAmount(event.target.value);
    setAmountFromCurrency(true);
  };

  const handleToAmountChange = event => {
    setAmount(event.target.value);
    setAmountFromCurrency(false);
  };

  const handleVisible = () => {
    setVisible(!visible);
  };

  return (
    <div className="page">
      <Header />
      <section className="main">
        <div className="row">
          <h2 className="row__title">Currency Convertor</h2>
          <div className="row__currency">
            <CurrencyInput
              currencies={currencies}
              fromCurrency={fromCurrency}
              toCurrency={toCurrency}
              fromAmount={fromAmount}
              toAmount={toAmount}
              handleAmount1={handleFromAmountChange}
              handleAmount2={handleToAmountChange}
              handleCurrency1={event => setFromCurrency(event.target.value)}
              handleCurrency2={event => setToCurrency(event.target.value)}
            />
          </div>
          {visible && (
            <div className="main__text">
              <h2 className="main__text_title">
                {fromAmount} {fromCurrency} = {toAmount} {toCurrency}
              </h2>
            </div>
          )}
          <button className="convert__button" value={visible} onClick={handleVisible}>
            Convert
          </button>
        </div>
      </section>
    </div>
  );
};
