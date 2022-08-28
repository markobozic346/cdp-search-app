import {
  Stat as ChakraStat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatLabelProps,
} from "@chakra-ui/react";

type Props = {
  title?: string;
  value?: string | number;
  subTitle?: string;
};

const Stat = ({ title, value, subTitle, ...props }: Props & StatLabelProps) => {
  return (
    <ChakraStat maxWidth="150px">
      <StatLabel>{title}</StatLabel>
      <StatNumber {...props}>{value}</StatNumber>
      <StatHelpText>{subTitle}</StatHelpText>
    </ChakraStat>
  );
};

export default Stat;
