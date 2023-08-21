import { URL_IMG_LINK } from "../constant";

export default RestrauntCard = ({restaurant}) => {
    const {name = "Loda", cloudinaryImageId = "",cuisines = ["Indian"],avgRating = "-"} = restaurant;
    // Destructuring the coming object.
    // const {name,cloudinaryImageId,cuisines,avgRating} = props.info;
    return (
        <div className="card">
            <img src={URL_IMG_LINK+cloudinaryImageId}/>
            <h2>{name}</h2>
            <h4>
                {avgRating}  ⭐
            </h4>
            <h3>{cuisines.slice(0,2).join(',')}</h3>
        </div>
    )
}
