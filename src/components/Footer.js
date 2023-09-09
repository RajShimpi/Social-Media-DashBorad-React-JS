import React from 'react';
import '../Styles/footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <img src="./image/icons.png" alt="Company Logo" />
                    <span>Social Media DashBoard | Raj Shimpi</span>
                </div>
                <div className="footer-social">
                    <a href="https://www.facebook.com/raj.shimpi.798" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href="https://twitter.com/RajShimpi12" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/raj-shimpi-892b8b253/?originalSubdomain=in" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://www.instagram.com/_raj_shimpi/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>
            </div>
            <div className="footer-bottom">
                &copy; {new Date().getFullYear()} Raj Shimpi. All Rights Reserved.
            </div>
        </footer>
    );
}
