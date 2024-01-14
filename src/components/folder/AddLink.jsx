import link from 'img/ic-link.svg';
import './addLink.scss';
import { useEffect, useRef, useState } from 'react';

export function AddLink({ text, mainRef }) {
  const ref = useRef(null);
  const [scrollDirection, setScrollDirection] = useState('');
  const timeoutId = useRef(null);

  const debounce = (func, delay) => {
    return function (...args) {
      clearTimeout(timeoutId.current);
      timeoutId.current = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current === null) return;
      const parent = ref.current.parentElement;
      const isFloating =
        parent.getBoundingClientRect().bottom < parent.clientHeight;
      const isClosedBottom =
        mainRef.current.getBoundingClientRect().bottom < window.innerHeight;

      if (isFloating && !isClosedBottom) {
        setScrollDirection('floating');
      } else {
        setScrollDirection('');
      }
    };

    const debouncedScroll = debounce(handleScroll, 200);

    window.addEventListener('scroll', debouncedScroll);

    return () => {
      window.removeEventListener('scroll', debouncedScroll);
    };
  }, [ref]);

  return (
    <div ref={ref}>
      <div className={`addLink ${scrollDirection}`}>
        <div className="addLink-frame">
          <img className="ic-link" alt="Link" src={link} />
          <input className="addLink-text" placeholder={text} />
          <button className="addLink-button">추가하기</button>
        </div>
      </div>
    </div>
  );
}

export default AddLink;
