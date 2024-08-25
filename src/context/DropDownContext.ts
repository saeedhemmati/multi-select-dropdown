import React, { createContext } from 'react';

interface IDropDownContext {
  isOpenDropDown: boolean;
  setIsOpenDropDown: React.Dispatch<React.SetStateAction<boolean>>;
  listOfItems: string[];
  setListOfItems: React.Dispatch<React.SetStateAction<string[]>>;
  selectedItems: string[];
  setSelectedItems: React.Dispatch<React.SetStateAction<string[]>>;
}

export const DropDownContext = createContext<IDropDownContext>({
  isOpenDropDown: false,
  setIsOpenDropDown: () => null,
  listOfItems: [],
  setListOfItems: () => null,
  selectedItems: [],
  setSelectedItems: () => null,
});
