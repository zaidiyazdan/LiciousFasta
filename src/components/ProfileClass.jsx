import React from "react";

class ProfileClass extends React.Component {
    render(){
        return (
            <div>
                <h1>Profile Class Component</h1>
                <h2>Name: {this.props.name}</h2>
            </div>
        );
    }
}

export default ProfileClass;