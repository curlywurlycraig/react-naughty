import React, { useState, useEffect } from "react";
import When from "./when";

const Upon = ({ then, children, singleFire }) => {
  const [willDo, setWillDo] = useState(false);

  const cb = () => {
    setWillDo(true);
  };

  useEffect(() => {
    if (willDo && singleFire) {
      setWillDo(false);
    }
  }, [willDo]);

  return (
    <>
      <When cond={() => willDo}>{then}</When>
      {children(cb)}
    </>
  );
};

export default Upon;
