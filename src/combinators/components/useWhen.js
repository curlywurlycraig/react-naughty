import React from "react";
import _When from "./when";
import _Use from "./use";

const _UseWhen = ({ pred, hook, hookArgs, ...props }) => {
  return (
    <_When pred={pred}>
      <_Use hook={hook} hookArgs={hookArgs} {...props} />
    </_When>
  );
};

export default _UseWhen;
