import {IMG_URL} from '../constants/'
const Card = (props) => {
  const { resData } = props;
  const { name, cloudinaryImageId, cuisines, areaName, avgRating,costForTwo,slaString,locality } = resData;
  return (
    <div className="main">
      <div className="card">
        <img
          className="cardImg"
          src={IMG_URL + cloudinaryImageId}
        />
        <h4>{name}</h4>
        <h6>{cuisines.join(",")}</h6>
        <h5>{locality}</h5>
        <h5>{slaString}</h5>
        <span>
          <h6>{avgRating}⭐</h6>
          <h6>{costForTwo}</h6>
        </span>
      </div>
    </div>
  );
};

export default Card;