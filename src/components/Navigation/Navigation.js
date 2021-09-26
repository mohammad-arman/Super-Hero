import React from 'react';
import "./Navigation.css"

const Navigation = () => {
    return (
        <div>
          <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container">
                <a className="navbar-brand logo" href="logo"><span>Doctors</span> Club</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
          <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                   <a className="nav-link active custom-link px-3" aria-current="page" href="/home">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link custom-link px-3" href="/features">Features</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link custom-link px-3" href="/pricing">Pricing</a>
                </li>
              </ul>
            </div>
            </div>
          </nav>     
        </div>
    );
};

export default Navigation;