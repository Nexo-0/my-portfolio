import React from 'react';


function Footer() {
    return (
        <footer className="bg-dark text-white text-center py-3">
            <div className="social-icons">
                <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                    <i className="fab fa-facebook-f"></i>
                </a>
            </div>
            <p>© 2024 Kunal Petare - All Rights Reserved.</p>
        </footer>
    );
}

export default Footer;
