import { StackProps } from "@chakra-ui/react";

const myInputProps = {
  height: "60px",
};

const cdpListItemCardProps = {
  height: "60px",
  borderRadius: "8px",
  border: "1px solid",
  borderColor: "ThreeDShadow",
};

const cdpListProps = {
  direction: ["row", "row", "row", "column", "column"],
  spacing: "4",
  my: "4",
} as StackProps;

export { myInputProps, cdpListItemCardProps, cdpListProps };
