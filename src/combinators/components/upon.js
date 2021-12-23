import React, { useState, useEffect } from "react";
import When from "./when";

const Upon = ({ then, children }) => {
  const [willDo, setWillDo] = useState(false);

  const cb = () => {
    setWillDo(true);
  };

  useEffect(() => {
    if (willDo) {
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
