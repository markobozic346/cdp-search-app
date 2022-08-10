import {
  Stat as ChakraStat,
  StatLabel,
  StatNumber,
  StatHelpText,
} from "@chakra-ui/react";

type Props = {
  title?: string;
  value?: string | number;
  subTitle?: string;
};

const Stat = ({ title, value, subTitle }: Props) => {
  return (
    <ChakraStat maxWidth="150px">
      <StatLabel>{title}</StatLabel>
      <StatNumber>{value}</StatNumber>
      <StatHelpText>{subTitle}</StatHelpText>
    </ChakraStat>
  );
};

export default Stat;
