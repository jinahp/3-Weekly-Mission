import defaultImg from 'img/img-default.svg';
import moment from 'moment';
import './card.scss';

export function Card({ link }) {
  const date = new Date(link.createdAt);
  const dateString = date.toLocaleDateString();
  const timeString = moment(link.createdAt).fromNow();

  const handleClick = () => {
    window.open(link.url);
  };

  return (
    <article className="card" onClick={handleClick}>
      <img
        className="card-image"
        alt="thumbnail"
        src={link.imageSource ?? defaultImg}
      />
      <div className="card-container">
        <div className="card-time">{timeString}</div>
        <p className="card-description">{link.description}</p>
        <div className="card-date">{dateString}</div>
      </div>
    </article>
  );
}

export default Card;
