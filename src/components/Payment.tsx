import { usePaymentMethods } from "../hooks/usePaymentMethods";
import { PaymentMethods } from "./PaymentMethods";
import {useMemo, useState} from "react";

export const Payment = ({ amount }: { amount: number }) => {
  const { paymentMethods } = usePaymentMethods();

  const [agreeToDonate, setAgreeToDonate] = useState<boolean>(false);

  const { total, tip } = useMemo(
    () => ({
      total: agreeToDonate ? Math.floor(amount + 1) : amount,
      tip: parseFloat((Math.floor(amount + 1) - amount).toPrecision(10)),
    }),
    [amount, agreeToDonate]
  );

  const handleChange = () => {
    setAgreeToDonate(agreeToDonate => !agreeToDonate);
  }

  return (
    <div>
      <h3>Payment</h3>
      <PaymentMethods options={paymentMethods} />
      <div>
        <label>
          <input
            type="checkbox"
            onChange={handleChange}
            checked={agreeToDonate}
          />
          <p>{agreeToDonate
            ? "Thanks for your donation."
            : `I would like to donate $${tip} to charity.`}</p>
        </label>
      </div>
      <button>${total}</button>
    </div>
  );
};
