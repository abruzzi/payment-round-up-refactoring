import {PaymentStrategy} from "./models/PaymentStrategy";

export const formatCheckboxLabel = (
  agreeToDonate: boolean,
  tip: number,
  strategy: PaymentStrategy
) => {
  return agreeToDonate
    ? "Thanks for your donation."
    : `I would like to donate ${strategy.getCurrencySign()}${tip} to charity.`;
};

export const formatButtonLabel = (strategy: PaymentStrategy, total: number) =>
  `${strategy.getCurrencySign()}${total}`;

export type RoundUpAlgorithm = (number: number) => number;

export const calculateTipFor =
  (calculateRoundUpFor: RoundUpAlgorithm) => (amount: number) => {
    return formatNumber(calculateRoundUpFor(amount) - amount);
  };

const roundUpToNearestN = (exp: number) => (amount: number) => {
  const power = Math.pow(10, exp - 1);
  return Math.floor(amount / power + 1) * power;
};

export const formatNumber = (number: number) => parseFloat(number.toPrecision(2));

export const roundUpToNearestInteger = roundUpToNearestN(1);
export const roundUpToNearestTen = roundUpToNearestN(2);
export const roundUpToNearestHundred = roundUpToNearestN(3);