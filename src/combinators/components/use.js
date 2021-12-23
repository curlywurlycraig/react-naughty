import React, { useEffect, useState } from "react";

const HookWrapper = ({ hook, hookArgs, onResult }) => {
  const useHook = hook; // To avoid warnings
  const newHookResults = useHook(hookArgs);

  useEffect(() => {
    onResult(newHookResults);
  }, [newHookResults]);

  return null;
};

const _Use = ({ hook, hookArgs, children, onResult }) => {
  const [results, setResults] = useState(null);

  const updateHookResults = (newResults) => {
    setResults(newResults);
    if (onResult) {
      onResult(newResults);
    }
  };

  return (
    <>
      <HookWrapper
        hook={hook}
        hookArgs={hookArgs}
        onResult={updateHookResults}
      />
      {children ? children(results) : null}
    </>
  );
};

export default _Use;
