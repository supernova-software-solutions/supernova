import React from "react";
import copyright from "./copyright.svg"

class Footer extends React.Component {

    render() {
        const currentYear = new Date().getFullYear();

        return (
            <div id="footer-container">
                <div id="copyright-info">SUPERNOVA SOFTWARE SOLUTIONS, LLC
                </div>
                <div id="copyright-logo">
                    <img src={copyright} alt="copyright logo"/>
                </div>
                <div id="copyright-year">
                    {currentYear}
                </div>
            </div>
        );
    }
}

export default Footer;
