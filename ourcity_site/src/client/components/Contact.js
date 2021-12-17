import React from 'react';
import { Link } from 'react-router-dom';

export default function Contact() {
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
                        <h1 id="about">Contact Page</h1>
                    </div>
                </div>
                <div class="row">
                    <figure class="col-sm-4">
                        <img src="images/cynthia-magana-mFPJXEQfb9M-unsplash.jpg" alt="firstImage"></img>
                            <figcaption>
                                <h3>Creating Unique Connections</h3>
                                <p>Unlike our competitors, Our City focuses on the connections that its users get from the community they are in.</p>
                            </figcaption>
                    </figure>
                    <figure class="col-sm-4">
                        <img src="images/airam-dato-on-MqhMij7C_CE-unsplash.jpg" alt="firstImage"></img>
                            <figcaption>
                                <h3>We are based out of Asheville, North Carolina</h3>
                                <p>With our roots based in Asheville North Carolina, we saw first hand the effect of tourism and its
                                    misrepresentation of our city.
                                </p>
                                <p>To visitors, Asheville is an enchanting mountain town with the Biltmore and brewery tours on the top
                                    of many peoples must do's while visitng.
                                </p>
                                <p>To locals, Asheville is a stunning display of natural and man-made beauty that is more than just tourist
                                    traps and beer tours. Most of all, the people that call Asheville home are what makes the city one of a kind.
                                </p>
                            </figcaption>
                    </figure>
                    <figure class="col-sm-4">
                        <img src="images/emile-perron-xrVDYZRGdw4-unsplash.jpg" alt="firstImage"></img>
                            <figcaption>
                                <h3>We are currently in development of the service!</h3>
                                <p>Right now we are in the testing phase of the concept and would love your feedback!</p>
                                <p>If you are interested in becoming part of the project, drop us a line!</p>
                            </figcaption>
                    </figure>
                </div>
                <div class="row">
                    <div class="text-center">
                        <h1 id="mission">Our Mission</h1>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6">
                        <div class="text-center">
                            <h3>The Problem</h3>
                            <p>Our mission is to provide a solution to the problem faced by weekend warriors and vacationing families alike.
                                This problem, the disconnection between the locals of a community and its visitors is what we are setting out to solve.
                            </p>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="text-center">
                            <h3>Breaking Through the Facade</h3>
                            <p>Our mission is to expose visitors to the community behind the tourist facade and to engage them in unique experiences
                                that only a local would be able to provide. We want to show you our community through the eyes of a local.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="text-center">
                        <h1 id="video">Video</h1>
                        <p>We have not began development of this video yet!</p>
                        <p>COMING SOON!</p>
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
