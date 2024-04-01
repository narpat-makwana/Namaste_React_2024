import Search from "./Search";
import { restaurantList } from "../constants";
import Card from "./Card";

const Body = () => {
    return (
      <>
        <div className="searchBar">
          <Search />
        </div>
  
        <div className="body">
          
          {
            restaurantList.map((restaurant) => {
              return <Card key={restaurant.data.id} resData = {restaurant.data} />
            })
          }
         
        </div>
      </>
    );
  };

  export default Body;