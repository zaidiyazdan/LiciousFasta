import { Link } from "react-router-dom"
import { Outlet } from "react-router-dom"
import Profile from "./Profile"
import ProfileClass from "./ProfileClass.jsx"

export default About  = () =>{
    return (
        (
            <div className="routes-containers"> 
            <div>
                <h1>Welcome to LiciousFasta - Your Gateway to Culinary Delights</h1>
                <p>At LiciousFasta, we are dedicated to connecting you with the finest dining experiences our city has to offer. Our journey began with a simple mission: to make it effortless for you to explore the diverse culinary landscape of Your City.</p>
            </div>
            <div>
                <h1>Our Mission</h1>
                <p>Our mission is to bridge the gap between discerning food enthusiasts and the city's top restaurants. We believe that every meal should be an experience, a journey of flavors waiting to be discovered. With LiciousFasta, we bring together a curated selection of restaurants that define the gastronomic culture of Your City.</p>
            </div>
            <Link to={'profile'}>See developer</Link>
            {/* <Outlet/> */}
            <Profile name="Ali"/>
            <ProfileClass name="Ali"/>
            </div>
        )
    )
}