import React, { KeyboardEvent, forwardRef, useContext, useRef } from 'react';
import { CaretUpIcon } from '../ui/Icons';
import { DropDownContext } from '../../context/DropDownContext';
import './Input.scss';

export const Input = forwardRef<HTMLInputElement>((_, ref) => {
  const { setIsOpenDropDown, isOpenDropDown, setListOfItems, listOfItems } = useContext(DropDownContext);

  const divRef = useRef<HTMLDivElement>(null);
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && ref) {
      // @ts-ignore
      const text = ref.current.value;
      if (text.length > 0 && !listOfItems.includes(text)) {
        setListOfItems((v) => [...v, text]);
        // @ts-ignore
        ref.current.value = '';
      }
    }
  };

  const handleInputFocus = (isFocus: boolean) => {
    if (divRef) {
      if (isFocus) {
        divRef.current?.classList.add('is-focus');
        return;
      }
      divRef.current?.classList.remove('is-focus');
    }
  };

  return (
    <div ref={divRef} className="input-wrapper" onClick={() => setIsOpenDropDown(true)}>
      <input
        onFocus={() => handleInputFocus(true)}
        onBlur={() => handleInputFocus(false)}
        onKeyDown={handleKeyDown}
        type="text"
        placeholder="Insert to the list..."
        className="input-wrapper__input"
        ref={ref}
      />
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setIsOpenDropDown((v) => !v);
        }}
      >
        <CaretUpIcon className={`input-wrapper__caret-up${isOpenDropDown ? ' is-open' : ''}`} />
      </button>
    </div>
  );
});
