import { ForwardedRef, RefObject, useEffect } from 'react';

export const useClickOutside = <T extends HTMLElement>(ref: RefObject<T>, callback: AnyToVoidFunction) => {
  useEffect(() => {
    const cb = (e: MouseEvent) => {
      if (ref && ref.current && !ref.current?.contains(e.target as Node)) {
        callback();
      }
    };
    document.addEventListener('click', cb);
    return () => {
      document.removeEventListener('click', cb);
    };
  }, [ref, callback]);
};
