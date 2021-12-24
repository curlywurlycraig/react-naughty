import React, { useState, useEffect } from "react";
import Times from "./combinators/components/times";
import UseTimes from "./combinators/components/useTimes";
import Use from "./combinators/components/use";
import When from "./combinators/components/when";
import UseWhen from "./combinators/components/useWhen";
import Upon from "./combinators/components/upon";
import UseLet from "./combinators/components/useLet";
import "./App.css";

const useExampleHook = (val) => {
  return val || 1;
};

const useLogEffect = (str) => {
  useEffect(() => {
    console.log(str);
  }, []);
};

const App = () => {
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
      {/* Upon allows some JSX to be rendered only when a callback is called. singleFire means only for one render cycle! */}
      <Upon then={<Use hook={useLogEffect} hookArgs="button clicked!" singleFire />}>
        {(cb) => <button onClick={cb}>click me and view logs</button>}
      </Upon>
      {/* UseLet allows calling multiple hooks within JSX and having the results passed to children. */}
      <UseLet
        map={{
          val1: useExampleHook,
          val2: [useExampleHook, 2],
          val3: [useExampleHook, "hello there"],
        }}
      >
        {({ val1, val2, val3 }) => (
          <>
            <p>{val1}</p>
            <p>{val2}</p>
            <p>{val3}</p>
          </>
        )}
      </UseLet>
      {/* A more complicated example showing things working together. */}
      <Upon
        then={
          <UseLet
            map={{
              age: [useExampleHook, 32],
              name: [useExampleHook, "Someone"],
            }}
          >
            {({ name, age }) => (
              <>
                <p>Name: {name}</p>
                <p>Age: {age}</p>
              </>
            )}
          </UseLet>
        }
      >
        {(cb) => (
          <button onClick={cb}>Click me to reveal personal details</button>
        )}
      </Upon>
    </>
  );
};

export default App;
