import { useParams } from "react-router-dom";
import { URL_IMG_LINK } from "../constant";
import Shimmer from "./Shimmer";
import useRestraurant from "../utils/useRestraurant";

//to read a id (which is passed dynamically we use useParams)
//we have dynamic route we can use useParams to read its data.
//this is how we read dynamic url.
const RestaurantMenu = () => {

const { resId } = useParams();

const restrurantDetails = useRestraurant(resId);

if (restrurantDetails.length == 0) return <Shimmer/>;

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
          restrurantDetails?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
          ?.card?.card?.itemCards.map((res) => {
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
