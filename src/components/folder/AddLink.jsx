import link from 'img/ic-link.svg';
import './addLink.scss';

export function AddLink({ text }) {
  return (
    <>
      <div className="addLink">
        <div className="addLink-frame">
          <img className="ic-link" alt="Link" src={link} />
          <input className="addLink-text" placeholder={text} />
          <button className="addLink-button">추가하기</button>
        </div>
      </div>
    </>
  );
}

export default AddLink;
