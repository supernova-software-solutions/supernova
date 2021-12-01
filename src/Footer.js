import React from "react";
import copyright from "./copyright.svg"

class Footer extends React.Component {

    render() {
        return (
            <div id="footer-container">
                <div id="copyright-info">SUPERNOVA SOFTWARE SOLUTIONS, LLC
                </div>
                <div id="copyright-logo">
                    <img src={copyright}/>
                </div>
                <div id="copyright-year">
                    2021
                </div>
            </div>
        );
    }
}

export default Footer;