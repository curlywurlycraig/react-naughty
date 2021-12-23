import React from "react";
import When from "./when";
import Use from "./use";

const UseWhen = ({ pred, hook, hookArgs, ...props }) => {
  return (
    <When pred={pred}>
      <Use hook={hook} hookArgs={hookArgs} {...props} />
    </When>
  );
};

export default UseWhen;
