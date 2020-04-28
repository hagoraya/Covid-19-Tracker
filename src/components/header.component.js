import React from 'react'
import logo from '../bacteria.png'
import animate from '../animate.css'

const divStyle = {
    textAlign: 'center',
    display: 'block',
}


function header() {
    return (
        <div style={divStyle}>
            <div >
                <br></br>
                <img className="spinner" src={logo} ></img>
            </div>
        </div>
    )
}

export default header
