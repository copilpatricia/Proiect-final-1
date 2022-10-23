import { useState } from "react";

export function useLocalStorage(key, value) {
  let initialState = localStorage.getItem(key);
  initialState = JSON.parse(initialState) || value;
  const [state, setState] = useState(initialState);
  function setStateAndLocalStorage(value) {
    setState(value);
    localStorage.setItem(key, JSON.stringify(value));
  }
  return [state, setStateAndLocalStorage];
}
