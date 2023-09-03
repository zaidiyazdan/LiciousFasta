import React from "react";

class ProfileClass extends React.Component {

    constructor(props){
        super(props);
        // Create State over here
        this.state = {
            userInfo: {
                name: "Dum name",
                location: "Dummy location",
            }
        }
    }
    
    async componentDidMount(){
        //best place to get api call.
        try {
            const data = await fetch("https://api.github.com/users/zaidiyazdan");
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo: json,
        });
        } catch (error) {
            console.log(error);
        }
        // console.log(data);
    }

    render(){
        return (
            <div>
                <h1>Profile Class Component</h1>
                <img src={this?.state?.userInfo?.avatar_url} style={{width:"100px"}}/>
                <h2>Name: {this?.state?.userInfo?.name}</h2>
                <h2>GitHub username: {this?.state?.userInfo?.login
}</h2>
            </div>
        );
    }
}

export default ProfileClass;