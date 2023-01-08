import {formatNumber} from "../utils";

type RoundUpStrategy = (number: number) => number;

export class PaymentStrategy {
  private readonly currencySign: string;
  private readonly algorithm: RoundUpStrategy;

  public constructor(currencySign: string, roundUpAlgorithm: RoundUpStrategy) {
    this.currencySign = currencySign;
    this.algorithm = roundUpAlgorithm;
  }

  private calculateTipFor =
    (calculateRoundUpFor: (amount: number) => number) => (amount: number) => {
      return formatNumber(calculateRoundUpFor(amount) - amount);
    };

  getCurrencySign(): string {
    return this.currencySign;
  }

  getRoundUpAmount(amount: number): number {
    return this.algorithm(amount);
  }

  getTip(amount: number): number {
    return this.calculateTipFor(this.getRoundUpAmount.bind(this))(amount);
  }
}