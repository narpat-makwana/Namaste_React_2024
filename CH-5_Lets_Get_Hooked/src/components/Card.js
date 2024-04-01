import {IMG_URL} from "../constants";


const Card = (props) => {
    const {resData} = props;
    const {name,cloudinaryImageId,cuisines,area,avgRating,costForTwoString} = resData;
    return (
      <div className="main">
        <div className="card">
          <img
            className="cardImg"
            src={IMG_URL + resData.cloudinaryImageId}
          />
          <h4>{name}</h4>
          <h5>{cuisines.join(",")}</h5>
          <h5>{area}</h5>
          <span>
          <h6>{avgRating}⭐</h6>
          <h6>{costForTwoString}</h6>
          </span>
        </div>
      </div>
    );
  };

  export default Card;