import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { URL_IMG_LINK } from "../constant";
import Shimmer from "./Shimmer";

//to read a id (which is passed dynamically we use useParams)
//we have dynamic route we can use useParams to read its data.
//this is how we read dynamic url.

const RestaurantMenu = () => {
  const [restrurantDetails, SetRestrCurantDetails] = useState([]);
  const [restraurantMenu, SetRestraurantMenu] = useState([]);
  const { resId } = useParams();

  useEffect(() => {
    getRestrurantInfo();
  }, []);

  async function getRestrurantInfo() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.325159941073109&lng=77.13053986430168&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
    );
    const JsonData = await data.json();
    console.log(JsonData?.data);
    SetRestrCurantDetails(JsonData?.data);
    SetRestraurantMenu(
      JsonData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
        ?.card?.card?.itemCards
    );
  }

  if (restrurantDetails.length == 0) return <Shimmer/>;
  if(!restraurantMenu) return;

  return (
    <div className="restaurant-menu-container">
      <div className="rest">
        <img
          src={
            URL_IMG_LINK +
            restrurantDetails?.cards[0]?.card?.card?.info?.cloudinaryImageId
          }
        />
        <div className="right">
          <h1>{restrurantDetails?.cards[0]?.card?.card?.info?.name}</h1>
          <h2>Restrurant ID: {resId}</h2>
          <h2>{restrurantDetails?.cards[0]?.card?.card?.info?.city}</h2>
          <h2>{restrurantDetails?.cards[0]?.card?.card?.info?.locality}</h2>
          <h2>{restrurantDetails?.cards[0]?.card?.card?.info?.avgRating} ⭐</h2>
        </div>
      </div>
      <div className="menu">
        <h1>Menu</h1>
        <div className="menu-container">
          {
          restraurantMenu.map((res) => {
            const { name, imageId, description, id,price } = res.card.info;
            return (
              <div key={id} className="menu-card">
                <img src={URL_IMG_LINK + imageId} className="menu-image" />
                <h3>{name}</h3>
                <p>{price/100} Rupees</p>
                {/* <p>{description}</p> */}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default RestaurantMenu;
