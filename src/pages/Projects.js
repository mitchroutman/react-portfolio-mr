import React from "react";
// import crate from "../images/crate.png"
export default function Projects() {
    return (
        <div id="projects-main">
            <hr></hr>
            <h2 id="projects-header">Projects</h2>
            <br></br>
            <div className="container">
                <div className="row">
                    <div className="card col" style={{ width: '18rem' }}>
                        <img src="./images/crate.png" className="col card-img-top" alt="Market place for music lovers"></img>
                        <div className="card-body">
                            <h5 className="card-title">Project 1 - Crate</h5>
                            <p className="card-text">CRUD web application designed around buying and selling of vinyl records</p>
                            <a href="https://github.com/mitchroutman/fantastic-robot" className="btn btn-primary">GitHub</a>
                        </div>
                    </div>
                    <div className="card col" style={{ width: "18rem" }}>
                        <img src="./images/screencapture-file-Users-mitchellroutman-repository-projects-redesigned-broccoli-index-html-2022-02-06-14_49_57.png" className="card-img-top" alt="recipe randomizer"></img>
                        <div className="card-body">
                            <h5 className="card-title">Project 2 - Redesigned Broccoli</h5>
                            <p className="card-text">Simple to use random recipe genrator</p>
                            <a href="https://github.com/mitchroutman/redesigned-broccoli" className="btn btn-primary">GitHub</a>
                        </div>
                    </div>
                    <div className="w-100"></div>
                    <div className="card col" style={{ width: "18rem" }}>
                        <img src="./images/ecommercebackend.png" className="col card-img-top" alt="stylized food plating"></img>
                        <div className="card-body">
                            <h5 className="card-title">Ecommerce Band End </h5>
                            <p className="card-text">Simulated e-commerce backend using Node JS and Express</p>
                            <a href="https://github.com/mitchroutman/ecommerce-backend-MR" className="btn btn-primary">GitHub</a>
                        </div>
                    </div>

                    <div className="card col" style={{ width: "18rem" }}>
                        <img src="./images/Screen-Shot2022-03-23" className="col card-img-top" alt="stylized food plating"></img>
                        <div className="card-body">
                            <h5 className="card-title">Employee Management System</h5>
                            <p className="card-text">Console based employee management system.</p>
                            <a href="https://github.com/mitchroutman/employee-manager-MR" className="btn btn-primary">GitHub</a>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}