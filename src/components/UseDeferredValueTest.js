import { useMemo, useState } from "react";

export default function UseDeferredValueTest() {
  const [name, setName] = useState("");
  const computedValue = useMemo(() => {
    return getComputedValue(name);
  });

  return (
    <>
      <div>dd</div>
    </>
  );
}
