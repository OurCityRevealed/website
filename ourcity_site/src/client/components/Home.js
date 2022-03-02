import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <>
            <header className="container">
                <div class="row">
                    <h1 class="col-sm-4"><Link to="/">Our City</Link></h1>
                    <nav class="col-sm-8 text-right">
                        <p><Link to="/">Home</Link></p>
                        <p><Link to="/about">About Us</Link></p>
                        <p><Link to="/download">Download</Link></p>
                        <p><Link to="/faq">FAQ</Link></p>
                        <p><Link to="/contact">Contact Us</Link></p>
                    </nav>
                </div>
            </header>
            <section class="jumbotron">
                <div class="container">
                    <div class="row text-left">
                        <h2>Making a Real Connection</h2>
                        <h3>Welcome to Our City, an experience that forges genuine connects between you and the world.</h3>
                        <Link to="/about" class="btn btn-primary">Learn More</Link>
                    </div>
                </div>
            </section>
            <section class="container">
                <div class="row">
                    <figure class="col-sm-6 support">
                        <img src="images/kevin-clarke-85IOEMNkxw0-unsplash.webp" alt="connected city"></img>
                    </figure>
                    <div class="col-sm-6 supporttext">
                        <p>Hi,</p>
                        <h1>Welcome to Our City!</h1>
                        <p>There's much to see here. So, take your time, look around, and learn all there is to know about us. We hope you enjoy our site and take a moment to drop us a line.</p>
                    </div>
                </div>
                <div class="row">
                    <div class="text-center">
                        <h3>Meet the Team</h3>
                        <h4>Founder/CEO</h4>
                        <img src="images/Profile_Picture.webp" alt="profile"></img>
                        <p>Hi! My name is Travis Walter, founder of Our City. I am originally from Asheville, North Carolina, but currently live in Raleigh, North Carolina. I have a background in software engineering and obtained my bachelor's degree in Computer Science from North Carolina State University in 2021, which has allowed me to explore my passions. Welcome to Our City!</p>
                    </div>
                </div>
                <div class="row">
                    <div class="text-center">
                        <a href="http://www.instagram.com/ourcityrevealed" target="_blank" rel="noreferrer"><img src="images/instagram-icon-20.svg" id="insta" alt="insta"></img></a>
                        <h3 id="name">Our City</h3>
                        <h3 id="location">Asheville, North Carolina</h3>
                    </div>
                </div>
            </section>
            <footer class="container">
                <div class="row">
                    <p class="col-sm-4">&copy; 2022 Our City - All Rights Reserved</p>
                </div>
            </footer>
        </>
    )
}
