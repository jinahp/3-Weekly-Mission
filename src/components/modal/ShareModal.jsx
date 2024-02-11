import { sharedUrl } from 'apis';
import DefaultModal from './DefaultModal';
import facebook from 'img/ic-facebook.svg';
import kakao from 'img/ic-kakao.svg';
import link from 'img/ic-link.svg';
import { useState } from 'react';

export function ShareModal(props) {
  const [copied, setCopied] = useState(false);

  const copyLink = () => {
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

  const webUrl = sharedUrl(window.location.origin, props.folderId);
  const shareKakao = () => {
    if (window.Kakao) {
      const kakao = window.Kakao;
      if (!kakao.isInitialized()) {
        kakao.init(process.env.REACT_APP_KEY);
      }

      kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
          title: props.name,
          description: props.name,
          imageUrl:
            'https://developers.kakao.com/assets/img/about/logos/kakaotalksharing/kakaotalk_sharing_btn_medium.png',
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
    <DefaultModal className="share-modal" {...props}>
      <div className="share-modal-title">{props.name}</div>
      <div className="share-modal-share-list-box">
        <div className="share-modal-share-item">
          <img
            src={kakao}
            alt="kakao"
            className="share-modal-share-icon kakao"
            onClick={shareKakao}
          />
          <img
            src={facebook}
            alt="facebook"
            className="share-modal-share-icon facebook"
          />
          <img
            src={link}
            alt="link"
            className="share-modal-share-icon link"
            onClick={copyLink}
          />
          <span className="share-modal-share-name">카카오톡</span>
          <span className="share-modal-share-name">페이스북</span>
          <span className="share-modal-share-name">
            {copied ? '복사 완료' : '링크 복사'}
          </span>
          {copied && (
            <div className="link-copy-success">링크가 복사되었습니다.</div>
          )}
        </div>
      </div>
    </DefaultModal>
  );
}

ShareModal.propTypes = {
  ...DefaultModal.propTypes,
};

export default ShareModal;
