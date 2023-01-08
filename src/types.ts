export type RemotePaymentMethod = {
  name: string;
  countryCode?: string;
  id?: string;
};

export type LocalPaymentMethod = {
  provider: string;
  label: string;
};