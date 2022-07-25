import { memo } from "react";

type SelectProps = {
  name: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value?: string;
  options: string[];
};

const Select = ({ options, ...rest }: SelectProps) => {
  return (
    <select {...rest}>
      {options.map((option: string) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default memo(Select);
