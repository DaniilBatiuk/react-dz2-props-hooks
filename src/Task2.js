import React, { useState } from 'react';
import Quote from './Quote';
export default function Task2() {
    const [show, setShow] = useState("hidden");
    const Click = ()=>{
        setShow("visible");
    }
    return <> <button style={{minWidth:"150px", minHeight:"30px"}} onClick={Click}>Show Day Quote</button>
    <Quote style={{visibility: show, maxWidth: "300px"}}></Quote>
    </>
}