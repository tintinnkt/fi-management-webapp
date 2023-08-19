import React, { useState } from 'react'
import DevCard from './Dev';
import './devPack.css'

function DevPack() {
    const [show, setShow] = useState(0);
    const showDev = () => {
        setShow((pv) => !pv)
    }
    return (
        <React.Fragment>
            <div className="container-btn">
            {show ? <button className="contact-btn" id="unshow"onClick={showDev}  >Close</button> :
                    <button className="contact-btn" onClick={showDev}  id="show">Developer Contact</button>
                }</div>
            {!show ? null : 
                <div className="dev-card"><DevCard /></div>
            }
        </React.Fragment>
    )
}

export default DevPack