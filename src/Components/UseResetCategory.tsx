import { useEffect, useState } from 'react';

const useResetCategory = (pocetnaKategorija: string): [string, () => void] => {
  const [category, setCategory] = useState<string>(pocetnaKategorija);

  const resetCategory = () => {
    setCategory(pocetnaKategorija);
  };

  return [category, resetCategory];
};

export default useResetCategory;
