const currencyRates = {
  USD: 1, // Base currency
  EUR: 0.85,
  GBP: 0.75,
  JPY: 110.53,
  AUD: 1.45,
  INR: 82.75,
};


function convertCurrency(amount, fromCurrency, rates) {
    if (!rates[fromCurrency]) {
      throw new Error('Currency not supported');
    }
  
    // Convert amount to USD (base currency)
    const amountInUSD = amount / rates[fromCurrency];
  
    // Convert amount from USD to other currencies
    const convertedAmounts = {};
    for (const [currency, rate] of Object.entries(rates)) {
      convertedAmounts[currency] = amountInUSD * rate;
    }
  
    return convertedAmounts;
  }
  
  // Example usage
  const userAmount = parseFloat(prompt('Enter the amount:'));
  const userCurrency = prompt('Enter the currency (USD, EUR, GBP, JPY, AUD, INR):');
  
  try {
    const results = convertCurrency(userAmount, userCurrency, currencyRates);
    console.log(`Converted amounts for ${userAmount} ${userCurrency}:`);
    for (const [currency, amount] of Object.entries(results)) {
      console.log(`${currency}: ${amount.toFixed(2)}`);
    }
  } catch (error) {
    console.error(error.message);
  }
  