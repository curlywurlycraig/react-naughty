import React, { useState, useEffect } from "react";
import _Times from "./combinators/components/times";
import _UseTimes from "./combinators/components/useTimes";
import _Use from "./combinators/components/use";
import "./App.css";
import _When from "./combinators/components/when";
import _UseWhen from "./combinators/components/useWhen";

const useExampleHook = () => {
  return 1;
};

const useLogEffect = (str) => {
  useEffect(() => {
    console.log(str);
  }, []);
};

function App() {
  const [hookResults, setHookResults] = useState(null);

  console.log("hook results are ", hookResults);

  return (
    <>
      <_Times n={5}>
        <p>hello</p>
      </_Times>
      <_UseTimes hook={useExampleHook} n={5}>
        {(results) => <p>it is: {results}</p>}
      </_UseTimes>

      <_Times n={5}>
        <_Use hook={useExampleHook}>{(v) => v}</_Use>
      </_Times>

      <_Use hook={useExampleHook}>{(v) => v}</_Use>

      <_UseTimes
        hook={useExampleHook}
        n={10}
        onResultsChange={setHookResults}
      />

      <_When pred={() => 1 === 1}>
        <p>should render</p>
      </_When>

      <_When pred={() => 1 === 2}>
        <p>should not render</p>
      </_When>

      <_UseWhen
        pred={() => 1 === 2}
        hook={useLogEffect}
        hookArgs="should not log"
      />

      <_UseWhen
        pred={() => 1 === 1}
        hook={useLogEffect}
        hookArgs="should log"
      />
    </>
  );
}

export default App;
