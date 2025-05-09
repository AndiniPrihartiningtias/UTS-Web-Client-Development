import { useState, useEffect } from "react";

type DisplayType = "list" | "grid";

const STORAGE_KEY = "displayType";

export const useDisplayType = () => {
  const [displayType, setDisplayType] = useState<DisplayType>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return (stored as DisplayType) || "grid";
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, displayType);
  }, [displayType]);

  const toggleDisplayType = (type: DisplayType) => {
    setDisplayType(type);
  };

  return { displayType, toggleDisplayType };
};

export default useDisplayType;
