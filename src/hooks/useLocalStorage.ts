import { useEffect, useState } from "react";

export function useLocalStorage(key: string, initValue: any) {
  const getContentLocalStorage = () => {
    if (typeof window !== "undefined") {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : initValue;
    }
  };

  const [valueLocalStorage, setValueLocalStorage] = useState(
    getContentLocalStorage
  );

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(valueLocalStorage));
    } catch {
      return initValue;
    }
  }, [valueLocalStorage, key, initValue]);

  return [valueLocalStorage, setValueLocalStorage];
}
