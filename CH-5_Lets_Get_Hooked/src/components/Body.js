import Search from "./Search";
import { restaurantList } from "../constants";
import Card from "./Card";
import React,{ useState } from "react";


const Body = () => {

  const[restList,setRestList] = useState(restaurantList);

    return (
      <>
        <div className="searchBar">
          <Search />
        </div>
        <div className="filter">
          <button className="filter-btn" onClick={()=>{
           let filteredList = restaurantList.filter((res) => res.data.avgRating > 4);
            // {console.log(filteredList)} 
            setRestList(filteredList);
          }}>Top Rated Restaurants</button>
          
        </div>
  
        <div className="body">
          
          {
            restList.map((restaurant) => {
              return <Card key={restaurant.data.id} resData = {restaurant.data} />
            })

          }
         
        </div>
      </>
    );
  };

  export default Body;