export type RemotePaymentMethod = {
  name: string;
  countryCode?: string;
  id?: string;
};

export type CountryCode = "AU" | "JP" | "DK";