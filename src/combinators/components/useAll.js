import React from "react";
import UseLet from "./useLet";

const UseAll = ({ hook, argList, children }) => {
  const argListAsMap = Object.fromEntries(
    argList.map((val, idx) => [idx, [hook, val]])
  );

  const resultMapToArray = (map) => {
    if (!map) {
      return [];
    }

    return Object.entries(map).reduce((acc, curr) => {
      acc[curr[0]] = curr[1];
      return acc;
    }, []);
  };

  return (
    <UseLet map={argListAsMap}>
      {(resultMap) => children(resultMapToArray(resultMap))}
    </UseLet>
  );
};

export default UseAll;
