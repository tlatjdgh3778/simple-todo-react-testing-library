import React from "react";
import { Link } from "react-router-dom";

const Footer = ({ footer }) => {
    return (
        <div>
            {footer === "todo" ? (
                <Link to="/user" data-testid="footer-link">
                    Go User Page
                </Link>
            ) : (
                <Link to="/" data-testid="footer-link">
                    Go Todo Page
                </Link>
            )}
        </div>
    );
};

export default Footer;
