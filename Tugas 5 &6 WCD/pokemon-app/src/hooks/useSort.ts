import { useState, useEffect } from 'react';

export type SortOption = 'az' | 'za';

const STORAGE_KEY = 'sortOption';

const useSort = () => {
  const [sortOption, setSortOption] = useState<SortOption>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return (stored as SortOption) || 'az';
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, sortOption);
  }, [sortOption]);

  return { sortOption, setSortOption };
};

export default useSort;
