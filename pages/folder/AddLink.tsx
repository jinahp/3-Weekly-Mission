import AddModal from '@src/components/modal/AddModal';
import link from '@src/img/ic-link.svg';
import { useEffect, useRef, useState } from 'react';
import styles from './addLink.module.scss';
import Image from 'next/image';

interface AddLinkProps {
  text: string;
}

const AddLink = ({ text }: AddLinkProps) => {
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
      <div className={`${styles.addLink} ${styles[scrollDirection]}`}>
        <div className={styles['addLink-frame']}>
          <Image
            className={styles['ic-link']}
            alt="Link"
            src={link}
            width={100}
            height={100}
          />
          <input
            className={styles['addLink-text']}
            placeholder={text}
            onChange={handleChange}
          />
          <button
            className={styles['addLink-button']}
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
