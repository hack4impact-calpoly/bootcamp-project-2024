"use client"

import React, {useState} from "react";
import emailjs from "emailjs-com";

export default function Contact() {

    function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        const serviceID = 'service_e0wn32m';
        const templateID = 'template_feycn0m';
        const userID = "XcdprDfFrWcLSrayp";



        emailjs.sendForm(serviceID, templateID, e.currentTarget, userID)
        .then((result) => console.log("Email sent successfully! " + result.text), (error) => {console.log(error.text)});

        setFormData({name: "", email: "", message: ""})

    }

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })


    return(
        <main>
            <h1 className="page-title">Contact</h1>

            <div className="contact-form">
                <form id="contact-form" onSubmit={handleSubmit}>
                    <ul className="form-list">
                        <li><input name="name" type="text" id="name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required></input></li>
                        <li><input name="email" type="email" id="email" value={formData.email}  onChange={(e) => setFormData({...formData, email: e.target.value})} required></input></li>
                        <li><textarea name="message" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}></textarea></li>
                        <li><input className="submit" type="submit" required></input></li>
                    
                    </ul>
                </form>

            </div>
        </main>

    );
}