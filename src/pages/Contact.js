import React from "react";

class Contact extends React.Component{
    constructor(props){
        super(props)
        console.log(this.props)
        this.state = {
            timeout : null
        }
    }

    componentWillUnmount(){
        console.log("Contact Unmounted")
        clearTimeout(this.state.timeout)
    }

    componentDidMount(){
        console.log("Contact Mounted")
        this.state.timeout = setTimeout(()=>{
            this.props.history.push('/');
        },5000)
    }

    render(){
        return(
            <h1>Contact Page</h1>
        )
    }
}

export default Contact;