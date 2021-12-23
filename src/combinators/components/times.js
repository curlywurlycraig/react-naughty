import React from "react";

const _Times = ({ n, children }) => {
  return new Array(n)
    .fill(null)
    .map((_, idx) => <React.Fragment key={idx}>{children}</React.Fragment>);
};

export default _Times;
