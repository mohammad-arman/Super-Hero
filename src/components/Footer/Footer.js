import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <div className="text-center py-3 bg-footer">
           <p className="copyright">&copy; Copyright © 2021 || Doctors Club</p>
           <h5 className="author">Made By <span>Mohammad Arman</span></h5>
        </div>
    );
};

export default Footer;