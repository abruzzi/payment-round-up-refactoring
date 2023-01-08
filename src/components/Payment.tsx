import { usePaymentMethods } from "../hooks/usePaymentMethods";
import { useRoundUp } from "../hooks/useRoundUp";

import { PaymentMethods } from "./PaymentMethods";
import { formatCheckboxLabel } from "../utils";
import { DonationCheckbox } from "./DonationCheckbox";

export const Payment = ({ amount, countryCode = "AU" }: { amount: number, countryCode?: string }) => {
  const { paymentMethods } = usePaymentMethods();

  const { total, tip, agreeToDonate, updateAgreeToDonate } = useRoundUp(amount, countryCode);

  return (
    <div>
      <h3>Payment</h3>
      <PaymentMethods options={paymentMethods} />
      <DonationCheckbox
        onChange={updateAgreeToDonate}
        checked={agreeToDonate}
        content={formatCheckboxLabel(agreeToDonate, tip, countryCode)}
      />
      <button>
        {countryCode === "JP" ? "¥" : "$"}
        {total}
      </button>
    </div>
  );
};
