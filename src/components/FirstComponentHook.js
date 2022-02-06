import React, {useState, useEffect} from "react";
import axios from "axios";

const API_URL = process.env.REACT_APP_BACKEND_URL

function FirstHook (props) {
    const [message, setMessage] = useState();

    async function getMessage () {
        const message = await axios.get( `${API_URL}test`)
        setMessage(message.data)
    }

    useEffect(() => {
        getMessage()
    })

    return (<div>
        {message}
        <br/>
        {props.netisbutt}
    </div>)
}



export default FirstHook 