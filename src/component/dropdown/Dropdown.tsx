import React, { useContext } from 'react';
import './Dropdown.scss';
import { DropDownContext } from '../../context/DropDownContext';
import { TickIcon } from '../ui/Icons';

export const Dropdown = () => {
  const { isOpenDropDown, listOfItems, setSelectedItems, selectedItems } = useContext(DropDownContext);

  const handleToggleList = (item: string) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((i) => i !== item));
      return;
    }
    setSelectedItems((prev) => [...prev, item]);
  };

  return (
    <div className={`dropdown-wrapper${isOpenDropDown ? ' is-open' : ''}`}>
      <div className="dropdown-wrapper__main-container">
        <ul className="dropdown-wrapper__ul">
          {listOfItems.length > 0 ? (
            listOfItems.map((item, idx) => (
              <div
                key={item}
                onClick={() => handleToggleList(item)}
                role="button"
                className={`dropdown-wrapper__ul--div ${selectedItems.includes(item) ? ' selected' : ''} ${
                  listOfItems.length === idx + 1 ? 'is-last' : ''
                }`}
              >
                <li>{item}</li>
                <TickIcon className={`${selectedItems.includes(item) ? 'fade-in' : 'fade-out'}`} />
              </div>
            ))
          ) : (
            <p style={{ textAlign: 'center' }}>List is empty.</p>
          )}
        </ul>
      </div>
    </div>
  );
};
