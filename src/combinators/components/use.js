import React, { useEffect, useState } from "react";
import When from "./when";

const HookWrapper = ({ hook, hookArgs, onResult }) => {
  const useHook = hook; // To avoid warnings
  const newHookResults = useHook(hookArgs);

  useEffect(() => {
    onResult(newHookResults);
  }, [JSON.stringify(newHookResults)]);

  return null;
};

const Use = ({ hook, hookArgs, children, onResult, when = true }) => {
  const [results, setResults] = useState(null);

  const updateHookResults = (newResults) => {
    setResults(newResults);
    if (onResult) {
      onResult(newResults);
    }
  };

  return (
    <When cond={when}>
      <HookWrapper
        hook={hook}
        hookArgs={hookArgs}
        onResult={updateHookResults}
      />
      {children ? children(results) : null}
    </When>
  );
};

export default Use;
