// List of currencies for the dropdown. In a real app, you'd get these from the API
const currencies = ['USD', 'EUR', 'GBP', 'AUD','PKR', 'INR'];

// Populating the dropdowns with currencies
const fromCurrencySelect = document.getElementById('from-currency');
const toCurrencySelect = document.getElementById('to-currency');

currencies.forEach(currency => {
  const fromOption = document.createElement('option');
  fromOption.value = currency;
  fromOption.textContent = currency;
  fromCurrencySelect.appendChild(fromOption);

  const toOption = document.createElement('option');
  toOption.value = currency;
  toOption.textContent = currency;
  toCurrencySelect.appendChild(toOption);
});

// Add event listener to the convert button
document.getElementById('convert-btn').addEventListener('click', () => {
  const amount = document.getElementById('amount').value;
  const fromCurrency = fromCurrencySelect.value;
  const toCurrency = toCurrencySelect.value;

  fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
    .then(response => response.json())
    .then(data => {
      const rate = data.rates[toCurrency];
      const convertedAmount = amount * rate;
      document.getElementById('converted-amount').textContent = convertedAmount.toFixed(2);
    })
    .catch(error => {
      console.error('Error fetching data: ', error);
    });
});
