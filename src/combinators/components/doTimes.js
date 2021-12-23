import React from "react";

/**
 * Same as _Times but calls a render function for children, allowing the index to be passed
 */
const _DoTimes = ({ n, children }) => {
  return new Array(n)
    .fill(null)
    .map((_, idx) => <React.Fragment key={idx}>{children(idx)}</React.Fragment>);
};

export default _DoTimes;
