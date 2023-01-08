import {useMemo, useState} from "react";

export const useRoundUp = (amount: number, countryCode: string) => {
  const [agreeToDonate, setAgreeToDonate] = useState<boolean>(false);

  const {total, tip} = useMemo(
    () => ({
      total: agreeToDonate
        ? countryCode === "JP"
          ? Math.floor(amount / 100 + 1) * 100
          : Math.floor(amount + 1)
        : amount,
      tip: parseFloat(((countryCode === "JP"
        ? Math.floor(amount / 100 + 1) * 100
        : Math.floor(amount + 1)) - amount ).toPrecision(10)),
    }),
    [amount, agreeToDonate]
  );

  const updateAgreeToDonate = () => {
    setAgreeToDonate((agreeToDonate) => !agreeToDonate);
  };

  return {
    total,
    tip,
    agreeToDonate,
    updateAgreeToDonate,
  };
};