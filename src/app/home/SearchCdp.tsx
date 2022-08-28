import { ChangeEvent } from "react";
import { Box, Input, Select, Stack } from "@chakra-ui/react";
import _ from "lodash";

import { collaterals } from "../../lib/constants";
import { myInputProps } from "../../components/UI";
import { useCdpContext } from "../state/cdp-context";

const SearchCdp = () => {
  const { onMultipleSearch, cdp } = useCdpContext();

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const uuid = cdp?.id ? cdp.id : 0;

    onMultipleSearch(uuid, e.target.value);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputUuid = parseInt(e.target.value);

    if (inputUuid > 0 && typeof inputUuid === "number") {
      const collateral = cdp?.ilk ? cdp.ilk : collaterals[0];
      onMultipleSearch(parseInt(e.target.value), collateral);
    }
  };

  return (
    <Stack spacing="4" direction="row" mb="4">
      <Box width="200px">
        <Select
          defaultValue={cdp?.ilk}
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
      </Box>
      <Input
        name="uuid"
        type="text"
        placeholder="uuid"
        defaultValue={cdp?.id}
        onChange={_.debounce(handleInputChange, 500)}
        {...myInputProps}
      />
    </Stack>
  );
};

export default SearchCdp;
