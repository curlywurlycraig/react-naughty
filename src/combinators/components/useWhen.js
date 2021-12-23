import React from "react";
import When from "./when";
import Use from "./use";

const UseWhen = ({ cond, hook, hookArgs, ...props }) => {
  return (
    <When cond={cond}>
      <Use hook={hook} hookArgs={hookArgs} {...props} />
    </When>
  );
};

export default UseWhen;
