import React, { Component } from "react";
import axios from "axios";
const API_URL = process.env.REACT_APP_BACKEND_URL


class FirstComponent extends Component { 
    constructor(props) {
        super(props)
        console.log(props)
        this.state = {
            message: undefined
        }
    }

    componentDidMount () {
        this.getMessage()
    }
    
    getMessage = async () => {
        const message = await axios.get( `${API_URL}test`)
        this.setState({
            message: message.data
        })
    }
    

    render() {
        return (<div>
            {this.state.message}
            <br/>
            {this.props.netisbutt}
        </div>)
    }
}

export default FirstComponent 