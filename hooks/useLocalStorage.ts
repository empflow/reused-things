import { useState, useEffect } from "react";

interface TProps {
  key: string,
  initVal?: any
};

export default function useLocalStorage({
  key, initVal
}: TProps) {
  const [val, setVal] = useState(initVal);

  useEffect(() => {
    localStorage.setItem(key, val);
  }, [val]);

  return { val, setVal };
}
