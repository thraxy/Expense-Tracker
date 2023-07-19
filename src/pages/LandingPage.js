import React from 'react';

function LandingPage() {
    return (
        <div>
            {/* Header */}
            <header>
                <h1>BoilerTrack</h1>
                <p>Know where your money is boiling</p>
                <p>Get started today and find out where your money is going</p>
                <a href="#" className="cta-button">Sign up for free</a>
            </header>

            {/* Features */}
            <section id="features">
                <h2>Features</h2>
                <div className="feature">
                    <h3>Input</h3>
                    <p>Effortlessly input your daily expenses and keep track of your spending.</p>
                </div>
                <div className="feature">
                    <h3>Categorize</h3>
                    <p>Organize your expenses into categories to get a clear understanding of your spending habits.</p>
                </div>
                <div className="feature">
                    <h3>Visualize</h3>
                    <p>Visualize your spending patterns with interactive charts and graphs to make informed financial decisions.</p>
                </div>
            </section>

            {/* Testimonials */}
            <section id="testimonials">
                <h2>Testimonials</h2>
                <div className="testimonial">
                    <p>"BoilerTrack has completely transformed how I manage my finances. It's intuitive, user-friendly, and has helped me regain control of my spending."</p>
                    <p className="testimonial-author">- John Doe</p>
                </div>
                <div className="testimonial">
                    <p>"I can't believe how easy it is to track my expenses now. BoilerTrack has saved me so much time and hassle!"</p>
                    <p className="testimonial-author">- Jane Smith</p>
                </div>
                {/* Add more testimonials here */}
            </section>

            {/* Sign In Button */}
            <div className="sign-in-button">
                <a href="#">Sign in</a>
            </div>

            {/* Footer */}
            <footer>
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>

                <div className="footer-links">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                    <a href="#">Contact Us</a>
                </div>

                <div className="social-media">
                    <a href="#"><img src="facebook-icon.png" alt="Facebook" /></a>
                    <a href="#"><img src="twitter-icon.png" alt="Twitter" /></a>
                    <a href="#"><img src="instagram-icon.png" alt="Instagram" /></a>
                </div>

                <p>&copy; 2023 BoilerTrack. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default LandingPage;
