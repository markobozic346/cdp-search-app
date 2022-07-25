import { ChangeEvent, memo } from "react";

type InputProps = {
  type: string;
  name: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
};

const Input = (props: InputProps) => {
  return <input {...props} />;
};

export default memo(Input);
