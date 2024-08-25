import React, { useRef, useState } from 'react';
import { DropDownContext } from './context/DropDownContext';
import { Input } from './component/input/Input';
import './App.scss';
import { useClickOutside } from './hooks/useClickOutside';
import { Dropdown } from './component/dropdown/Dropdown';

const defaultItems = ['Education 🎓', 'Art 🎭', 'Sport ⚽'];

export const App = () => {
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);
  const [listOfItems, setListOfItems] = useState<string[]>(defaultItems);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const divRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useClickOutside(divRef, () => {
    setIsOpenDropDown(false);
  });

  return (
    <DropDownContext.Provider
      value={{ isOpenDropDown, setIsOpenDropDown, setListOfItems, listOfItems, selectedItems, setSelectedItems }}
    >
      <div className="app">
        <div className="app__dropdown" ref={divRef}>
          <Input ref={inputRef} />
          <Dropdown />
        </div>
      </div>
    </DropDownContext.Provider>
  );
};
