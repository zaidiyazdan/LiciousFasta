import React from "react"
import ReactDOM from "react-dom/client"
import Body from "./components/Body"
import Footer from "./components/Footer"
import Header from "./components/Header"
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom"
import { useState } from "react"
import About from "./components/About"
import Login from "./components/Login"
import Error from "./components/Error"
import ContactUs from "./components/ContactUs"
import RestaurantMenu from "./components/RestaurantMenu"

// Default Import

// Named Import
// import { Title } from "./components/Header"
// // It is not object destructuring  

// For multiple imports
// import {* as Obj} from "./components/Header" 
// import Heade, {Title} from "../components/Header"
// in export default we can change the name but try to use same. 

// Header
//  - logo
//  - Nav Items(Right side)
//  - Cart
// Body
//     - Search bar
//     - Restraunt
//         - RestrauntCard
//             - Image
//             - Name
//             - Rating
//             - Cusines
// Footer
//     - links
//     - Copyright


// Config driven UI : when we style our frontend on the basis of the data coming from the backend.
// For example there can be different offers going in different cities so we will update our ui offers section based on data provided by the API 
// In system design tell to interviewer: 


// Now lets see how to make the cards dynamics (Rendering on the basis of API call)

// Destructuring the props object in the parameter

// Props : what ever we pass as attribute in the component.
// It is noting just normal parameters and arguments

// There should be one parent element in jsx

// React.Fragment : is a component which is exported by the react which can be used to wrap as parent (when we don't want to use div we use this fragment component) it is like a empty tag (<> </>) we can not give style it we can not pass any attribute.

// jsx can only have one parent

const AppLayout = () => {

    const [isLoggedIn,SetIsLoggedIn] = useState(false);

    if(!isLoggedIn)
    {
        return <Login SetIsLoggedIn={SetIsLoggedIn}/>
    }
    return (
        <>  
            <Header SetIsLoggedIn={SetIsLoggedIn}/>
            {/* { Outlet where we will fill diff components/pages} */}
            <Outlet/>
            {/* <About/> // if path is /about :  Render this
            <Body /> // if Path is / : Render this
            <ContactUs/> //if path is /contactus : Render this */}
            <Footer/>
        </>
    )
}

//createing App router:

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        errorElement: <Error/>,
        children: [
            {
                path: "/",
                element: <Body/>
            },
            {
                path:"/about",
                element: <About/>,
            },
            {
                path: "/contact",
                element: <ContactUs/>
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu/>
            }
        ]
    },

])


// const h1 = React.createElement("h1",{},"Lets check");

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);

// Virtual DOM : representation of DOM in our code
// we need it for reconciliation (it is a algo which react uses to dif one tree from other and it teremine what need to change and what not)
// It just re render the specific component.