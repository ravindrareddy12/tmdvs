import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/home.css'

const BackgroundImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ17lK9iHy4TIga7jAy5IQolz7KRCbFImbDsA&usqp=CAU"

export default function LandingPage() {
    return (
        <header style={ HeaderStyle }>
            <h1 className="main-title text-center">login / register page</h1>
            <p className="main-para text-center">join us now and don't waste time</p>
            <div className="buttons text-center">
                <Link to="/signin">
                    <button className="primary-button">log in</button>
                </Link>
                <Link to="/signup">
                    <button className="primary-button" id="reg_btn"><span>register </span></button>
                </Link>
            </div>
        </header>
    )
}

const HeaderStyle = {
    width: "100%",
    height: "100vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}