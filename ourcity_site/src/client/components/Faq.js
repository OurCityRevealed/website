import React from 'react';
import { Link } from 'react-router-dom';

export default function Faq() {
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
            <section class="container">
                <div class="row">
                    <div class="text-center">
                        <h1 id="faqtitle">Frequently Asked Questions</h1>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-4">
                        <div class="text-center">
                            <h4>Why should I use your app?</h4>
                            <p>Our app has been created to foster unique and real connections between you and the world around you.
                                Our app takes the guess work out of trying to find the best places to go while your visiting
                                a location and makes your entire experience at that location even better!
                            </p>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="text-center">
                            <h4>What services do you offer?</h4>
                            <p>We offer you the ability to create a genuine connection with the location you are visitng and it's
                                people!
                            </p>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="text-center">
                            <h4>Are there any fees?</h4>
                            <p>Right now we are offering the app free of charge to anyone interested in taking it for a spin!
                            </p>
                        </div>
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
