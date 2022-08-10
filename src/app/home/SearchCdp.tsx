import { ChangeEvent, memo, useMemo } from "react";
import { Box, Input, Select, Stack } from "@chakra-ui/react";
import _ from "lodash";

import { collaterals } from "../../lib/constants";
import { myInputProps } from "../../components/UI";
import { useCdpContext } from "../state/context";

const SearchCdp = () => {
  const { uuid, collateral, onCollateralChange, onUuidChange } =
    useCdpContext();

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onCollateralChange(e.target.value);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const uuid = parseInt(e.target.value);

    if (uuid > 0 && typeof uuid === "number") {
      onUuidChange(parseInt(e.target.value));
    }
  };

  const SelectComponent = useMemo(
    () => (
      <Select
        defaultValue={collateral}
        name="collateral"
        onChange={handleSelectChange}
        {...myInputProps}
      >
        {collaterals.map((collateral) => (
          <option key={collateral} value={collateral}>
            {collateral}
          </option>
        ))}
      </Select>
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const InputComponent = useMemo(
    () => (
      <Input
        name="uuid"
        type="text"
        placeholder="uuid"
        value={uuid}
        onChange={_.debounce(handleInputChange, 500)}
        {...myInputProps}
      />
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <Stack spacing="4" direction="row">
      <Box width="200px">{SelectComponent}</Box>
      {InputComponent}
    </Stack>
  );
};

export default memo(SearchCdp);
