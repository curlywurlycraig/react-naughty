import React, {useRef, useState} from "react";
import Use from "./use";

const UseLet = ({ map, children, onResultsChange }) => {
  const resultsRef = useRef({});
  const [newestResults, setNewestResults] = useState(resultsRef.current);

  const handleResult = (key, newResult) => {
    resultsRef.current = {
      ...resultsRef.current,
      [key]: newResult
    };

    setNewestResults(resultsRef.current);

    if (onResultsChange) {
      onResultsChange(resultsRef.current);
    }
  };

  const hasAll = Object.keys(newestResults).length === Object.keys(map).length;

  const useEls = Object.entries(map).map(([key, val]) => {
    const hook = typeof val === "function" ? val : val[0];
    const args = typeof val === "function" ? null : val.slice(1);
    return <Use key={key} hook={hook} hookArgs={args} onResult={(newResult) => handleResult(key, newResult)} />;
  });

  console.log('giong to call children with ', newestResults);

  return (
    <>
      {useEls}
      {children(newestResults, hasAll)}
    </>
  );
};

export default UseLet;
