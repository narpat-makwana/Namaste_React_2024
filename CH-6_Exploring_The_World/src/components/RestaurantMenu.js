import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import {MENU_API} from "../constants"

const RestrauntMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [menuInfo, setMenuInfo] = useState(null);

  const {resId} = useParams();
  console.log(param = useParams());

  useEffect(() => {
    fetchMenu();
  });

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    // console.log(json);
    setResInfo(json.data.cards[2].card.card.info);
    setMenuInfo(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card);  
  };

  if (resInfo === null) return <Shimmer />;

  const {name,cuisines,costForTwoMessage} = resInfo;
  const{itemCards} = menuInfo;

  

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{cuisines.join(",")}</h3>
      <h3>{costForTwoMessage}</h3>
     
      <ul>
       
        {itemCards.map((item,id) => (
        <li key={id}>{item.card.info.name} Rs: - {item.card.info.price/100}</li>) )}
       
    </ul>
    </div>
  );
};

export default RestrauntMenu;
