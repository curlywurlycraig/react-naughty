import React, { useRef, useState } from "react";
import _Times from "./times";
import _Use from "./use";

const _UseTimes = ({ hook, hookArgs, n, children, onResultsChange }) => {
  const resultsRef = useRef([]);
  const [newestResults, setNewestResults] = useState(resultsRef.current);

  const updateHookResults = (newResults) => {
    resultsRef.current = [...resultsRef.current, newResults];
    setNewestResults(resultsRef.current);
    if (onResultsChange) {
      onResultsChange(resultsRef.current);
    }
  };

  const areAllDone = newestResults.length === n;

  return (
    <>
      <_Times n={n}>
          <_Use hook={hook} hookArgs={hookArgs} onResult={updateHookResults} />
      </_Times>
      { children ? children(newestResults, areAllDone) : null }
    </>
  );
};

export default _UseTimes;
