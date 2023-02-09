import React from 'react';
import checkmark from "./checked-circle.svg";

class Services extends React.Component {

    render() {
        const yearsAsProDev = new Date(new Date().getTime() - new Date("2014-05-12").getTime()).getFullYear() - 1970

        return (
            <div id="services-container">
                <div id="services-headline">
                    What We Offer
                </div>
                <div id="services-checklist">
                    <div className="checklist-item">
                        <div className="checklist-checkmark">
                            <img src={checkmark} alt="checkmark"/>
                        </div>
                        <div className="checklist-text">
                        {yearsAsProDev}+ Years of professional web development experience
                        </div>
                    </div>
                    <div className="checklist-item">
                        <div className="checklist-checkmark">
                            <img src={checkmark} alt="checkmark"/>
                        </div>
                        <div className="checklist-text">
                            Full-Stack solutions encompassing everything from building UIs using React and JS to complex jvm-based microservices
                            with event-streaming and datastores
                        </div>
                    </div>
                    <div className="checklist-item">
                        <div className="checklist-checkmark">
                            <img src={checkmark} alt="checkmark"/>
                        </div>
                        <div className="checklist-text">
                            Business and domain-driven design that focuses on creating solutions that solve your customers needs
                        </div>
                    </div>
                    <div className="checklist-item">
                        <div className="checklist-checkmark">
                            <img src={checkmark} alt="checkmark"/>
                        </div>
                        <div className="checklist-text">
                            Strong emphasis on building software that's easy to maintain, secure from the get-go, and
                            extendable for future growth
                        </div>
                    </div>
                    <div className="checklist-item">
                        <div className="checklist-checkmark">
                            <img src={checkmark} alt="checkmark"/>
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