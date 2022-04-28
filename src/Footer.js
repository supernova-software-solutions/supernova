import React from "react";
import copyright from "./copyright.svg"

class Footer extends React.Component {

    render() {
        return (
            <div id="footer-container">
                <div id="copyright-info">SUPERNOVA SOFTWARE SOLUTIONS, LLC
                </div>
                <div id="copyright-logo">
                    <img src={copyright} alt="copyright logo"/>
                </div>
                <div id="copyright-year">
                    2022
                </div>
            </div>
        );
    }
}

export default Footer;
