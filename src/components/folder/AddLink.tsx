import AddModal from '@/components/modal/AddModal';
import link from '@/img/ic-link.svg';
import { useEffect, useRef, useState } from 'react';
import './addLink.scss';

interface AddLinkProps {
  text: string;
  mainRef: React.RefObject<any>;
}

const AddLink = ({ text, mainRef }: AddLinkProps) => {
  const [inputLink, setInputLink] = useState('');
  const ref = useRef<HTMLDivElement>(null);
  const [scrollDirection, setScrollDirection] = useState<string>('');
  const [isAddModalOpen, setAddModalOpen] = useState(false);

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

    const { current } = ref;
    if (current) {
      intersectionObserver.observe(current.parentElement!);
    }

    return () => {
      if (current) {
        intersectionObserver.unobserve(current.parentElement!);
      }
    };
  }, [ref]);

  const handleOpenModal = () => {
    setAddModalOpen(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
};

export default AddLink;
