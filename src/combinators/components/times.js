import React from "react";

const Times = ({ n, children }) => {
  return new Array(n)
    .fill(null)
    .map((_, idx) => <React.Fragment key={idx}>{children}</React.Fragment>);
};

export default Times;
