import React from 'react';
import './currencyinput.scss';

export const CurrencyInput = ({
  currencies,
  fromCurrency,
  toCurrency,
  handleCurrency1,
  handleCurrency2,
  handleAmount1,
  handleAmount2,
  fromAmount,
  toAmount,
}) => {
  return (
    <>
      <div className="currency">
        <select
          className="currency__select"
          name="currency"
          value={fromCurrency}
          onChange={handleCurrency1}
        >
          {currencies.map(currency => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
        <input
          className="currency__input"
          type="number"
          autoComplete="off"
          id="input"
          value={fromAmount}
          onChange={handleAmount1}
        />
      </div>
      <div className="currency">
        <select
          className="currency__select"
          name="currency"
          value={toCurrency}
          onChange={handleCurrency2}
        >
          {currencies.map(currency => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
        <input
          className="currency__input"
          type="number"
          id="input"
          value={toAmount}
          onChange={handleAmount2}
        />
      </div>
    </>
  );
};
