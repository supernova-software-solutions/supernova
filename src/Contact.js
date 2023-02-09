import React from "react";
import mail from "./mail.svg"
import linkedin from "./linkedin.svg"
import party from "./party.svg"

class Card extends React.Component {

    render() {
        return (
            <div id="contact-container">
                <div id="contact-headline">Contact
                </div>
                <div id="contact-list">
                    <div className="contact-item">
                        <div className="contact-logo"><img src={party} alt="opening date"/></div>
                        <div>Open for business starting January 2022</div>
                    </div>
                    <div className="contact-item">
                        <div className="contact-logo"><img src={mail} alt="email"/></div>
                        <div>Contact form coming soon</div>
                    </div>
                    <a className="contact-item" href="https://www.linkedin.com/in/john-marvin-davis-01b77834/">
                        <div className="contact-logo"><img src={linkedin} alt="linkedin"/></div>
                        <div>LinkedIn Profile</div>
                    </a>
                </div>
            </div>
        );
    }
}

export default Card;
