import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Contact() {
    const [status, setStatus] = useState("Submit");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        
        const { name, email, message } = e.target.elements;
        
        let details = {
            name: name.value,
            email: email.value,
            message: message.value,
        };

        let response = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(details),
        });

        setStatus("Submit");
        let result = await response.json();
        alert(result.status);
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
                    <div class="text-center">
                        <h1 id="about">Contact Us</h1>
                    </div>
                </div>
                <div class="row">
                    <div class="text-center">
                        <form id="contact_form" onSubmit={handleSubmit}>
                            <div class="form-group">
                                <label for="name">Name:</label>
                                <input type="text" class="form-control" id="name" required />
                            </div>
                            <div class="form-group">
                                <label for="email">Email:</label>
                                <input type="email" class="form-control" id="email" required />
                            </div>
                            <div class="form-group">
                                <label for="message">Message:</label>
                                <textarea class="form-control" id="message" required></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary">{status}</button>
                        </form>
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
