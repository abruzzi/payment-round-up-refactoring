type DonationCheckboxProps = {
  onChange: () => void;
  checked: boolean;
  content: string;
};

const DonationCheckbox = ({
  onChange,
  checked,
  content,
}: DonationCheckboxProps) => {
  return (
    <div>
      <label>
        <input type="checkbox" onChange={onChange} checked={checked} />
        <p>{content}</p>
      </label>
    </div>
  );
};

export { DonationCheckbox };
