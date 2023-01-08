import { LocalPaymentMethod } from "./types";

export const PaymentMethods = ({
  options,
}: {
  options: LocalPaymentMethod[];
}) => (
  <>
    {options.map((method) => (
      <label key={method.provider}>
        <input
          type="radio"
          name="payment"
          value={method.provider}
          defaultChecked={method.provider === "cash"}
        />
        <span>{method.label}</span>
      </label>
    ))}
  </>
);
