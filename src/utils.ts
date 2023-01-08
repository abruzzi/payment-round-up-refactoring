const formatCheckboxLabel = (agreeToDonate: boolean, tip: number) => {
  return agreeToDonate
    ? "Thanks for your donation."
    : `I would like to donate $${tip} to charity.`;
};

export { formatCheckboxLabel };
