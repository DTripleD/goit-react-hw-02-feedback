import { Component } from "react";

class Notification extends Component{
    render(){
        return (
            <div>{this.props.message}</div>
        )
    }
}

export default Notification;