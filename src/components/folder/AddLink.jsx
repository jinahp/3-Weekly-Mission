import link from 'img/ic-link.svg';
import './addLink.scss';
import { useEffect, useRef, useState } from 'react';

export function AddLink({ text }) {
  const ref = useRef(null);
  const [scrollDirection, setScrollDirection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const parent = ref.current.parentElement;
      if (parent.getBoundingClientRect().bottom < parent.clientHeight) {
        setScrollDirection('floating');
      } else {
        setScrollDirection('');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
