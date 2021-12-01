import React from 'react';
import logo from "./circle-cropped.png";

class Card extends React.Component {

    render() {
        return (
            <div id="card-container">
                <div id="card-picture">
                    <img src={logo} alt="logo"/>
                </div>
                <div id="card-text">Supernova is a small, full-stack web development consultancy based in Orange County, California and
                    run
                    by John-Marvin Davis
                </div>
            </div>
        );
    }
}

export default Card;