import { usePaymentMethods } from "../hooks/usePaymentMethods";
import { useRoundUp } from "../hooks/useRoundUp";

import { PaymentMethods } from "./PaymentMethods";
import { formatCheckboxLabel } from "../utils";
import { DonationCheckbox } from "./DonationCheckbox";

export const Payment = ({ amount }: { amount: number }) => {
  const { paymentMethods } = usePaymentMethods();

  const { total, tip, agreeToDonate, updateAgreeToDonate } = useRoundUp(amount);

  return (
    <div>
      <h3>Payment</h3>
      <PaymentMethods options={paymentMethods} />
      <DonationCheckbox
        onChange={updateAgreeToDonate}
        checked={agreeToDonate}
        content={formatCheckboxLabel(agreeToDonate, tip)}
      />
      <button>${total}</button>
    </div>
  );
};
