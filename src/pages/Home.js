import React from "react";

class Home extends React.Component{
    constructor(props){
        super(props)
        //console.log(this.props)
    }

    // componentWillUnmount(){
    //     console.log("Home Unmounted")
    // }

    // componentDidMount(){
    //     console.log("Home Mounted");
    // }

    render(){
        return(
            <h1>Home Page</h1>
        )
    }
}

export default Home;