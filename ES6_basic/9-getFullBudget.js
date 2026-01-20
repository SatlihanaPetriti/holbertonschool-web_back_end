import getBudgetObject from './7-getBudgetObject.js';

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
//new object
  const fullBudget = {
    //spread operator
    ...budget,
    // object method
    getIncomeInDollars(income) {
      return `$${income}`;
    },
    // object method
    getIncomeInEuros(income) {
              // template literal
      return `${income} euros`;
    },
  };

  return fullBudget;
}
