import './Card.scss';

export const Card = ({img, title, date, random}) => {
  const titLength = title.length;
  const maxTitleLength = 35;
  let cardWidth = 0;
  let borderRadius = '';

  const setParametersImage = () => {
    if (titLength > maxTitleLength) {
      borderRadius = '600px';
      cardWidth = 688;
    } else {
      cardWidth = 344;
      switch(random) {
        case 0:
          borderRadius = '220px 0px';
          break;
        case 1:
          borderRadius = '0px 220px';
          break;
        case 2:
          borderRadius = '600px';
          break;
        default:
          borderRadius = '600px';
      };
    };
  };

  setParametersImage();

  return (
    <div className="card">
      <div className="card__image">
        <img
          className="image"
          src={img}
          alt={title}
          style={{borderRadius: `${borderRadius}`, width: `${cardWidth}px`}}
        />
      </div>
      <div className="card__info">
        <h4 className="card__title">{title}</h4>
        <span className="card__date">{date}</span>
      </div>
    </div>
  )
}