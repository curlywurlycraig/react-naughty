import React, { useState } from "react";
import When from "./when";
import Use from "./use";

const Upon = ({ hook, children }) => {
  const [args, setArgs] = useState(null);
  const [results, setResults] = useState(null);
  const [callIndex, setCallIndex] = useState(0);

  const cb = (args) => {
    setCallIndex(callIndex + 1);
    setArgs(args);
  };

  return (
    <>
      <When cond={callIndex > 0}>
        <Use key={callIndex} hook={hook} args={args} onResult={setResults} />
      </When>
      {children(cb, results)}
    </>
  );
};

export default Upon;
