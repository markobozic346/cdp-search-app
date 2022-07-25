import { ChangeEvent } from "react";
import _ from "lodash";

import { Input, Select } from "../../components";
import { collaterals } from "../../lib/constants";
import { useCdpContext } from "../../state/context";

const SearchCdp = () => {
  const { onSingleSearch, onCollateralChange } = useCdpContext();

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onCollateralChange(e.target.value);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onSingleSearch(Number(e.target.value));
  };

  return (
    <div>
      <Select
        name="collateral"
        placeholder="Select Collateral"
        onChange={_.debounce(handleSelectChange, 500)}
        options={collaterals}
      />
      <Input
        type="text"
        name="uuid "
        placeholder="Enter CDP UUID"
        onChange={_.debounce(handleInputChange, 500)}
      />
    </div>
  );
};

export default SearchCdp;
