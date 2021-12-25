import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Download() {
    // Set state for the download links
    

    const [downloadLink, setDownloadLink] = useState("Download Here!");

    const [downloadResp, setDownloadResp] = useState("");

    const handleDownload = (e) => {
        // Send put request to increment download count
        fetch('/api/download/count', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    };

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
                    {/* Add button to increment on server */}
                    <div class="text-center">
                        <h1 id="download" onClick={() => { setDownloadLink("Thank you for your interest!"); setDownloadResp("We are still in development, but your interest means alot to the team!"); handleDownload()}}>{downloadLink}</h1>
                        <h3 id="afterDownload">{downloadResp}</h3>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-4">
                        <div class="text-center">
                            <h4>Unique life experiences</h4>
                            <p>We specialize in fostering once in a lifetime experiences that will create lasting memories.</p>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="text-center">
                            <h4>Personalized trips</h4>
                            <p>Want to find someone to go exploring with you? Need to find a place to go for dinner?
                                Open Our City to find a local to help!
                            </p>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="text-center">
                            <h4>Incredible detail and service</h4>
                            <p>We've got your back. In the event something does come up, our team is here to help make sure
                                your trip is not interrupted.
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
