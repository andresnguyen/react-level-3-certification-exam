import { useEffect, useRef, useState } from "react";

export default function useLocalStorage<T>(key: string, defaultValue: T) {
  const rawValueRef = useRef<string | null>(null);

  const [value, setValue] = useState(() => {
    let result;
    try {
      const data = localStorage.getItem(key);
      result = data ? JSON.parse(data) : defaultValue;
    } catch {
      result = defaultValue;
    }
    return result;
  });

  useEffect(() => {
    const updateLocalStorage = () => {
      if (value !== undefined) {
        const newValue = JSON.stringify(value);
        const oldValue = rawValueRef.current;
        rawValueRef.current = newValue;
        window.localStorage.setItem(key, newValue);
        // Browser ONLY dispatch storage events to other tabs, NOT current tab.
        // We need to manually dispatch storage event for current tab
        window.dispatchEvent(
          new StorageEvent("storage", {
            storageArea: window.localStorage,
            url: window.location.href,
            key,
            newValue,
            oldValue,
          })
        );
      }
    };

    updateLocalStorage();
  }, [key, value]);

  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key !== key) return;
      if (e.newValue !== rawValueRef.current) {
        rawValueRef.current = e.newValue;
        setValue(e.newValue ? JSON.parse(e.newValue) : undefined);
      }
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, [key]);

  return [value, setValue];
}
