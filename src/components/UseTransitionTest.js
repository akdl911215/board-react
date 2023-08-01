import { useState, useTransition } from "react";

export default function UseTransitionTest() {
  const [isPending, startTransition] = useTransition();
  const [count, setCount] = useState();

  function handleClick() {
    startTransition(() => {
      setCount((c) => c + 1);
    });
  }

  return (
    <>
      <div>
        {isPending & "Loading...."}
        <button onClick={handleClick}>{count}</button>
      </div>
    </>
  );
}
