import React from "react";

class About extends React.Component{
    constructor(props){
        super(props)
    }

    componentWillUnmount(){
        console.log("About Unmounted")
    }

    componentDidMount(){
        console.log("About Mounted");
    }

    render(){
        return(
            <h1>About Page</h1>
        )
    }
}

export default About;