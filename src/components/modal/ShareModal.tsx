import { sharedUrl } from '@src/apis';
import facebook from '@src/img/ic-facebook.svg';
import kakao from '@src/img/ic-kakao.svg';
import link from '@src/img/ic-link.svg';
import { useState } from 'react';
import DefaultModal from './DefaultModal';
import { DefaultModalProps } from './types';
import Image from 'next/image';
import styles from './shareModal.module.scss';

interface ShareModalProps extends DefaultModalProps {
  folderId?: number;
  name: string;
  description: string;
}

const ShareModal = (props: ShareModalProps) => {
  const [copied, setCopied] = useState(false);

  const copyLink = () => {
    const webUrl = sharedUrl(window.location.origin, props.folderId);
    navigator.clipboard
      .writeText(webUrl)
      .then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 3000);
      })
      .catch((error) => console.error('링크 복사 실패:', error));
  };

  const shareKakao = () => {
    const webUrl = sharedUrl(window.location.origin, props.folderId);
    if (window.Kakao) {
      const kakao = window.Kakao;
      if (!kakao.isInitialized()) {
        kakao.init(import.meta.env.VITE_KAKAO_KEY);
      }

      kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
          title: props.name,
          description: props.description,
          imageUrl:
            'https://images.unsplash.com/photo-1549675584-91f19337af3d?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          link: {
            mobileWebUrl: webUrl,
            webUrl,
          },
        },
        buttons: [
          {
            title: '자세히 보러 가기',
            link: {
              mobileWebUrl: webUrl,
              webUrl,
            },
          },
        ],
      });
    }
  };

  return (
    <DefaultModal className={styles['share-modal']} {...props}>
      <div className={styles['title']}>{props.name}</div>
      <div className={styles['share-list-box']}>
        <div className={styles['share-item']}>
          <Image
            src={kakao}
            alt="kakao"
            className={`${styles['share-icon']} ${styles.kakao}`}
            onClick={shareKakao}
          />
          <Image
            src={facebook}
            alt="facebook"
            className={`${styles['share-icon']} ${styles.facebook}`}
          />
          <Image
            src={link}
            alt="link"
            className={`${styles['share-icon']} ${styles.link}`}
            onClick={copyLink}
          />
          <span className={styles['share-name']}>카카오톡</span>
          <span className={styles['share-name']}>페이스북</span>
          <span className={styles['share-name']}>
            {copied ? '복사 완료' : '링크 복사'}
          </span>
          {copied && (
            <div className={styles['link-copy-success']}>
              링크가 복사되었습니다.
            </div>
          )}
        </div>
      </div>
    </DefaultModal>
  );
};

export default ShareModal;
