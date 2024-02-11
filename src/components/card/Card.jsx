import icKebab from 'img/ic-kebab.svg';
import defaultImg from 'img/img-default.svg';
import moment from 'moment';
import './card.scss';
import icStar from 'img/ic-star.svg';
import Popper from 'components/popper/Popper.jsx';

export function Card({ link }) {
  const createdAt = link.createdAt ?? link.created_at;
  const date = new Date(createdAt);
  const dateString = date.toLocaleDateString();
  const timeString = moment(createdAt).fromNow();

  return (
    <article className="card">
      <a href={link.url} target="_blank">
        <img src={icStar} alt="star" className="card-star" />
        <img
          className="card-image"
          alt="thumbnail"
          src={link.imageSource ?? link.image_source ?? defaultImg}
        />
        <div className="card-container">
          <div className="card-wrapper">
            <div className="card-time">{timeString}</div>
            <Popper linkTitle={link.title} />
          </div>
          <p className="card-description">{link.description}</p>
          <div className="card-date">{dateString}</div>
        </div>
      </a>
    </article>
  );
}

export default Card;
