import RestrauntCard from "./RestrauntCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

// Filter function (filter algorithm)
function filterData(input, list) {
  const filterArray = list.filter((res) => {
    // Converting both name to lowercase and then checking to remove case sensitivity.
    return res?.info?.name.toLowerCase().includes(input.toLowerCase());
  });
  return filterArray;
}

const Body = () => {
  //How to avoid rendering a component.
  const [filteredRestrurant, SetFilteredRestrurant] = useState([]);
  const [allRestaurant, setAllRestaurant] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  //Use effect Hook.
  useEffect(() => {
    // console.log("call this whenever our dependency is changed");
    getRestraurant();
  }, []);

  //our browser will not let us to call (The api so use cors extention)
  async function getRestraurant() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.325159941073109&lng=77.13053986430168&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setAllRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    SetFilteredRestrurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  //Conditional Rendering
  // if restraunt is empty => Shimmer UI
  // If restraunt has data => actual data UI

  //Early return.(handling an error allRestaurnt.length can not be read from undefined)
  if (!allRestaurant) return null;

  if (allRestaurant?.length === 0) return <Shimmer />;

  //Applying conditional rendering.
  //1.when no restraurant is found show no res found with a serch bar.
  return filteredRestrurant.length === 0 ? (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-imput"
          placeholder="Search"
          value={searchInput}
          //   here e is the event object
          onChange={(e) => {
            //e.target.value is coming from the input.
            setSearchInput(e.target.value);
          }}
        ></input>
        <button
          className="button-87"
          onClick={() => {
            // need to filter the data
            const data = filterData(searchInput, allRestaurant);
            SetFilteredRestrurant(data);
          }}
        >
          Search
        </button>
      </div>
      <h1>No Restraunt Found !!!!</h1>
    </>
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-imput"
          placeholder="Search Restaurant"
          value={searchInput}
          //   here e is the event object
          onChange={(e) => {
            //e.target.value is coming from the input.
            setSearchInput(e.target.value);
          }}
        ></input>
        <button
          className="button-87"
          onClick={() => {
            // need to filter the data
            const data = filterData(searchInput, allRestaurant);
            SetFilteredRestrurant(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restraunt-container">
        {
          // never use index as a key(Read why? on article)
          filteredRestrurant.map((res) => {
            return (
              <Link to={"/restaurant/" + res?.info?.id} key={res?.info?.id}>
                <RestrauntCard restaurant={res?.info} />
              </Link>
            );
          })
        }
      </div>
    </>
  );
};

export default Body;
