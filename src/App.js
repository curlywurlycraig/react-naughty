import React, { useState, useEffect } from "react";
import Times from "./combinators/components/times";
import UseTimes from "./combinators/components/useTimes";
import Use from "./combinators/components/use";
import "./App.css";
import When from "./combinators/components/when";
import UseWhen from "./combinators/components/useWhen";

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

      <UseTimes
        hook={useExampleHook}
        n={10}
        onResultsChange={setHookResults}
      />

      <When pred={() => 1 === 1}>
        <p>should render</p>
      </When>

      <When pred={() => 1 === 2}>
        <p>should not render</p>
      </When>

      <UseWhen
        pred={() => 1 === 2}
        hook={useLogEffect}
        hookArgs="should not log"
      />

      <UseWhen
        pred={() => 1 === 1}
        hook={useLogEffect}
        hookArgs="should log"
      />
    </>
  );
}

export default App;
