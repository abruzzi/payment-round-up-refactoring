import { usePaymentMethods } from "./usePaymentMethods";
import { PaymentMethods } from "./PaymentMethods";

export const Payment = ({ amount }: { amount: number }) => {
  const { paymentMethods } = usePaymentMethods();

  return (
    <div>
      <h3>Payment</h3>
      <PaymentMethods options={paymentMethods} />
      <button>${amount}</button>
    </div>
  );
};
