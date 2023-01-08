import { useMemo, useState } from "react";
import { algorithmMap, calculateTipFor } from "../utils";
import { CountryCode } from "../types";

export const useRoundUp = (amount: number, countryCode: CountryCode) => {
  const [agreeToDonate, setAgreeToDonate] = useState<boolean>(false);

  const { total, tip } = useMemo(
    () => ({
      total: agreeToDonate ? algorithmMap[countryCode](amount) : amount,
      tip: calculateTipFor(algorithmMap[countryCode])(amount),
    }),
    [agreeToDonate, countryCode, amount]
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
