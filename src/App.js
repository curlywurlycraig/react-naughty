import React, { useState, useEffect } from "react";
import Times from "./combinators/components/times";
import UseTimes from "./combinators/components/useTimes";
import Use from "./combinators/components/use";
import "./App.css";
import When from "./combinators/components/when";
import UseWhen from "./combinators/components/useWhen";
import Upon from "./combinators/components/upon";

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
      <Times n={5}>
        <p>hello</p>
      </Times>
      <UseTimes hook={useExampleHook} n={5}>
        {(results) => <p>it is: {results}</p>}
      </UseTimes>

      <Times n={5}>
        <Use hook={useExampleHook}>{(v) => v}</Use>
      </Times>

      <Use hook={useExampleHook}>{(v) => v}</Use>

      {/* The onResultsChange callback can be used to interact outside of JSX */}
      <UseTimes hook={useExampleHook} n={10} onResultsChange={setHookResults} />

      {/* When allows JSX to be conditionally rendered without escaping from JSX */}
      <When cond={() => 1 === 1}>
        <p>should render</p>
      </When>

      <When cond={() => 1 === 2}>
        <p>should not render</p>
      </When>

      {/* UseWhen simply composes Use and When */}
      <UseWhen
        cond={() => 1 === 2}
        hook={useLogEffect}
        hookArgs="should not log"
      />

      <UseWhen cond={() => 1 === 1} hook={useLogEffect} hookArgs="should log" />

      {/* Upon allows some JSX to be rendered only when a callback is called. And only for one render cycle! */}
      <Upon then={<Use hook={useLogEffect} hookArgs="button clicked!" />}>
        {(cb) => <button onClick={cb}>click me and view logs</button>}
      </Upon>
    </>
  );
}

export default App;
