import Search from "./Search";
import Card from "./Card";
import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";


const Body = () => {

  const [restList, setRestList] = useState([]);
  const [filteredRestList, setFilteredRestList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    // console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);

    setRestList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

  };


  const SearchHandle = () => {
    const filteredRest = restList.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
);
    setFilteredRestList(filteredRest);
  };

  const handleFilter = () => {
    const filteredList = restList.filter(
      (restaurant) => parseFloat(restaurant.info.avgRating) > 4.0
    );
    setFilteredRestList(filteredList);
  }


  if (restList.length === 0) {
    return (
      <div className="Shimmer-outer"> { }
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
      </div>
    );
  }

  return (
    <>

      <div className="search-item">
        <input
          type="text"
          className="search"
          placeholder="Your Food is a click away"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className="btn" onClick={SearchHandle}>Search</button>
      </div>

      <div className="filter">
        <button className="filter-btn" onClick={handleFilter}>Top Rated Restaurants</button>

      </div>

      <div className="body">
        {
          filteredRestList.map((restaurant) => {
            return <Card key={restaurant?.info?.id} resData={restaurant?.info} />
          })

        }

      </div>
    </>
  );
};

export default Body;