import React from "react";

export default function About() {
    return (
        <div id="about-me-main">
            
            <hr></hr>
            <h2 id="about-me-title">About Me</h2>
            <br></br>

            <div id="about-me-body">
                <h2>Greetings!</h2>
                <h3>My name is Mitch, welcome -</h3>
                <container className="img-container">
                    <img className="about-me-image" src="./images/me.jpeg" alt="portrait"></img>
                </container>
                <p>Project manager by trade turned software engineer.</p>
                <p>Karoake enthusiast. Part-time musician. Record collector. Photogrpaher</p>
                
            </div>
        </div>

    );
}