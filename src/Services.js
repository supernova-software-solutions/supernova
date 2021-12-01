import React from 'react';
import checkmark from "./checked-circle.svg";

class Services extends React.Component {

    render() {
        return (
            <div id="services-container">
                <div id="services-headline">
                    What We Offer
                </div>
                <div id="services-checklist">
                    <div class="checklist-item">
                        <div class="checklist-checkmark">
                            <img src={checkmark}></img>
                        </div>
                        <div className="checklist-text">
                        7+ Years of professional web development experience
                        </div>
                    </div>
                    <div class="checklist-item">
                        <div class="checklist-checkmark">
                            <img src={checkmark}></img>
                        </div>
                        <div class="checklist-text">
                            Full-Stack solutions that encompass everything from building UIs using React and JS to complex jvm-based microservices
                            with event-streaming and datastores
                        </div>
                    </div>
                    <div className="checklist-item">
                        <div className="checklist-checkmark">
                            <img src={checkmark}></img>
                        </div>
                        <div className="checklist-text">
                            Business and domain-driven design that focuses on creating solutions that solve your customers needs
                        </div>
                    </div>
                    <div className="checklist-item">
                        <div className="checklist-checkmark">
                            <img src={checkmark}></img>
                        </div>
                        <div className="checklist-text">
                            Strong emphasis on building software that's easy to maintain, secure from the get-go, and
                            extendable for future growth
                        </div>
                    </div>
                    <div className="checklist-item">
                        <div className="checklist-checkmark">
                            <img src={checkmark}></img>
                        </div>
                        <div className="checklist-text">
                            Clear and reliable communication to ensure the successful completion of projects
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Services;