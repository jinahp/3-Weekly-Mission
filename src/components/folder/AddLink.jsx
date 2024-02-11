import link from 'img/ic-link.svg';
import './addLink.scss';
import { useEffect, useRef, useState } from 'react';
import AddModal from 'components/modal/AddModal';

export function AddLink({ text, mainRef }) {
  const [inputLink, setInputLink] = useState('');
  const ref = useRef(null);
  const [scrollDirection, setScrollDirection] = useState('');
  const timeoutId = useRef(null);
  const [isAddModalOpen, setAddModalOpen] = useState(false);

  const debounce = (func, delay) => {
    return function (...args) {
      clearTimeout(timeoutId.current);
      timeoutId.current = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setScrollDirection('');
          } else {
            setScrollDirection('floating');
          }
        });
      },
      { threshold: 0 }
    );

    if (ref.current) {
      intersectionObserver.observe(ref.current.parentElement);
    }

    return () => {
      if (ref.current) {
        intersectionObserver.unobserve(ref.current.parentElement);
      }
    };
  }, [ref]);

  const handleOpenModal = () => {
    setAddModalOpen(true);
  };

  const handleChange = (e) => {
    setInputLink(e.target.value);
  };

  return (
    <div ref={ref}>
      <div className={`addLink ${scrollDirection}`}>
        <div className="addLink-frame">
          <img className="ic-link" alt="Link" src={link} />
          <input
            className="addLink-text"
            placeholder={text}
            onChange={handleChange}
          />
          <button
            className="addLink-button"
            onClick={handleOpenModal}
            disabled={inputLink === ''}
          >
            추가하기
          </button>
        </div>
      </div>
      <AddModal
        isOpen={isAddModalOpen}
        modalTitle="폴더에 추가"
        setOpen={setAddModalOpen}
        title={inputLink}
      />
    </div>
  );
}

export default AddLink;
