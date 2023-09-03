import { useRouteError } from "react-router-dom";
//This useRouteError hook gives us the access to the error object.
const ErrorPage =  function(){   
    const {status,statusText,data} = useRouteError();
    console.log(status,statusText,data);
    return (
        <div>
                <h1>OOPs!!</h1>
                <h2>Something Went Wrong</h2>
                <h1>{status + ":" + statusText}</h1>
                <h2>{data}</h2>
        </div>

)}

export default ErrorPage;