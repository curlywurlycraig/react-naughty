import React, { useRef, useState } from "react";
import Times from "./times";
import Use from "./use";

const UseTimes = ({ hook, hookArgs, n, children, onResultsChange }) => {
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
      <Times n={n}>
          <Use hook={hook} hookArgs={hookArgs} onResult={updateHookResults} />
      </Times>
      { children ? children(newestResults, areAllDone) : null }
    </>
  );
};

export default UseTimes;
