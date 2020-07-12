import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Footer(){
    return(
        <footer>
            <div className="info-footer">
                <div className="logo-footer"><img src="/img/pie-logo.png"/></div>
                <div className="derechos"><p>©Copyright 2020 Moraine. All Rights Reserved. - Virginia Fulloni</p></div>
                <div className="redes">
                    <ul>
                        <li className="instagram"><Link to="https://www.instagram.com/morainebikinis/" target="_blank"></Link></li>
                        <li className="facebook"><Link to="https://www.facebook.com/morainebikinis/" target="_blank"></Link></li>
                        <li className="mail"><Link to="/"></Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;