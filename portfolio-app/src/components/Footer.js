import React from 'react';
import '../styles/Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <span>Thanks for being here today! {new Date().getFullYear()}</span>
        </footer>
    );
}
export default Footer;