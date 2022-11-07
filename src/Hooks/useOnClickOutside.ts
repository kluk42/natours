import { RefObject, useEffect } from 'react';

/**
 * @param notClickableRef ref of an element for which and it's children onClick event shouldn't trigger onClick function
 */
export function useOnClickOutside<T extends HTMLElement = HTMLElement>(
  notClickableRef: RefObject<T>,
  onClick: () => void
) {
  useEffect(() => {
    const onMouseDown = (e: MouseEvent) => {
      if (e.target && !notClickableRef.current?.contains(e.target as Node)) {
        onClick();
      }
    };
    document.addEventListener('mousedown', onMouseDown);

    return () => document.removeEventListener('mousedown', onMouseDown);
  }, []);
}
