import { useState } from "react";
const useRestraurant = (resId) =>{
    
        const [restrurantDetails, SetRestrCurantDetails] = useState([]);
        useEffect(
            async function getRestrurantInfo() {
                const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.325159941073109&lng=77.13053986430168&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
                );
                const JsonData = await data.json();
                console.log(JsonData?.data);
                SetRestrCurantDetails(JsonData?.data);
        }, []);
    return restrurantDetails;
}

export default useRestraurant