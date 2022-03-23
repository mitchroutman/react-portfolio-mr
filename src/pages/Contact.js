import React from "react";

export default function Contact() {
    return (
       <div id="contact-div">
        <hr></hr>
        <div id="contact-me-header">
            <h2>Contact Me</h2>
        </div>
        <div id="main-contact">
            <p>Want to get in touch? Use any of the tried and true methods below:</p>
            <br></br>
            <div id="contact-methods">            
                <li>Email: <a href="mailto:mitchell.routman@gmail.com">mitchell.routman@gmail.com</a></li>
                <li>GitHub: <a href="https://github.com/mitchroutman">GitHub</a></li>
                <li>LinkedIn: <a href="https://www.linkedin.com/in/mitchellroutman/">LinkedIn</a></li>
                <li>Developer CV: <a href ="./MRoutman Resume.pdf">CV</a></li>
                <li>Project Manager CV: <a href ="./MRoutman PM Resume.pdf">CV</a></li>
            </div>
        </div>
        
       </div> 
    );
}