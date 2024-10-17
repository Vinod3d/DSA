const currencyRates = {
    USD: 1,
    EUR: 0.85,
    GBP: 0.75,
    JPY: 110.53,
    AUD: 1.45,
    INR: 82.75
  };
  
  document.getElementById('convertBtn').addEventListener('click', () => {
    const amount = parseFloat(prompt('Enter the amount:'));
    const fromCurrency = prompt('Enter the currency (USD, EUR, GBP, JPY, AUD, INR):').toUpperCase();
  
    if (isNaN(amount) || !currencyRates[fromCurrency]) {
      alert('Invalid amount or currency');
      return;
    }
  
    const convertedAmounts = convertCurrency(amount, fromCurrency, currencyRates);
    displayResults(amount, fromCurrency, convertedAmounts);
  });
  
  function convertCurrency(amount, fromCurrency, rates) {
    const amountInUSD = amount / rates[fromCurrency];
    const convertedAmounts = {};
  
    for (const [currency, rate] of Object.entries(rates)) {
      convertedAmounts[currency] = amountInUSD * rate;
    }
  
    return convertedAmounts;
  }
  
  function displayResults(amount, fromCurrency, results) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `<h2>Converted amounts for ${amount} ${fromCurrency}:</h2>`;
    
    for (const [currency, value] of Object.entries(results)) {
      resultsDiv.innerHTML += `<p>${currency}: ${value.toFixed(2)}</p>`;
    }
  }
  