import React, { useState, useEffect } from 'react';

export default function useDebounce<T>(value: T, delay: number): [T, boolean] {
  const [debouncedValue, setDebouncedValue] = useState(value);
  const [hasPendingDebounce, setHasPendingDebounce] = useState(false);
  useEffect(
    () => {
      setHasPendingDebounce(true);
      const handler = setTimeout(() => {
        setDebouncedValue(value);
        setHasPendingDebounce(false);
      }, delay);
      return () => {
        clearTimeout(handler);
      };
    },
    [value] 
  );

  return [debouncedValue, hasPendingDebounce];
}