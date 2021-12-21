import React from "react";

class Card extends React.Component {

    render() {
        return (
            <div id="contact-container">
                <div id="contact-headline">Contact
                </div>
                <div id="contact-list-container">
                    <div id="contact-list">
                        <div className="contact-item">
                            <div className="contact-item-number">1</div>
                            <input className="contact-item-input" type="text"/>
                        </div>
                        <div className="contact-item">
                            <div className="contact-item-number">2</div>
                            <input className="contact-item-input" type="text"/>
                        </div>
                        <div className="contact-item">
                            <div className="contact-item-number">3</div>
                            <div>Describe what you're looking for below</div>
                        </div>
                        <textarea id="contact-textarea"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;