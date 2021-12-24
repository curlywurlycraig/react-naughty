Small higher-order component utilities for bending the React hook rules.

# Why?

People on the internet [keep telling you](https://reactjs.org/docs/hooks-rules.html) not to call hooks in loops or conditionally. They are right, but you feel like you should be able to somehow that isn't buggy.

Perhaps you are using a hook you cannot modify and you need to call it an unknown times with different arguments.

Or another hook you cannot modify performs an expensive operation that you only want to take place when a button is clicked.

This project enables such patterns by thinking differently about what components actually are.

# Usage

## Calling a hook conditionally with the `<Use />` component

You cannot do the following:

```js
let hookResult = null;
if (something) {
    hookResult = useMyHook();
}

return (
  <p>{ hookResult }</p>
);
```

But with `<Use />`:

```js
return (
    { something ? (
    <Use hook={useMyHook}>
        {(hookResult) => <p>{ hookResult }</p>}
    </Use>
    ) : null }
);
```

Or by passing a `when` prop, simplifying the conditional logic:

```js
return (
    <Use
      when={something}
      hook={useMyHook}>
        {(hookResult) => <p>{ hookResult }</p>}
    </Use>
)
```

## Calling a hook many times with `<UseTimes />`

You cannot do the following:

```js
const hookResults = new Array(10).fill(null).map(() => useMyHook());

return <p>{ hookResults.length }</p>
```

But with `<UseTimes />`:

```js
return <UseTimes n={10} hook={useMyHook}>
    {(results) => <p>{ results.length }</p>}
</UseTimes>
```

## Calling the same hook many times with different arguments, using `<UseAll />`

TODO

## Calling multiple hooks with different arguments, binding the results in an object, using `<UseLet />`

TODO

# How?

TODO: Write about how hook rules can be bent by having their wrapper component be conditionally rendered. The hook is always coupled with the component.
