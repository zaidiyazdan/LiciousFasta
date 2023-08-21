import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom"
import { useState } from "react"
import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"
import About from "./components/About"
import Login from "./components/Login"
import Error from "./components/Error"
import ContactUs from "./components/ContactUs"
import RestaurantMenu from "./components/RestaurantMenu"


const AppLayout = () => {

    const [isLoggedIn,SetIsLoggedIn] = useState(false);

    if(!isLoggedIn)
    {
        return <Login SetIsLoggedIn={SetIsLoggedIn}/>
    }
    return (
        <>  
            <Header SetIsLoggedIn={SetIsLoggedIn}/>
            {/* { Outlet where we will fill diff children components/pages} */}
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


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);

// Virtual DOM : representation of DOM in our code
// we need it for reconciliation (it is a algo which react uses to dif one tree from other and it teremine what need to change and what not)
// It just re render the specific component.