'use client'
import style from './contact.module.css'
import emailjs from '@emailjs/browser';
import React, {useState} from "react";

export default function Contact(){

    const [status, setStatus] = useState("")
    const [formData, setFormData] = useState(
        {
            name: "",
            email: "",
            message: "",
        }
    )

    function submitForm(e: React.FormEvent){
        e.preventDefault();
        console.log(formData)
        console.log(document.forms[0])
        if (!formData.name || !formData.email || !formData.message){
            setStatus("Unable to send email, make sure all fields are filled out.")
        }
        emailjs.sendForm('service_fe7y4be', 'template_08sodgr', document.forms[0], "5z2cBtgZIyFUwcpX-").then(
            (response) => {
              console.log('Sent email!', response.status, response.text);
              setStatus("Email successfully sent!")
              document.forms[0].reset();
            },
            (error) => {
              console.log('Failed to send email', error);
            },
          );

    }

    


    return(
             <main className={style.main}>
                <h1 className={style.pageTitle}>Contact</h1>
                <form className={style.form} id="contact-form" onSubmit={submitForm}>
                    <label className={style.label}>Name</label>
                    <input className={style.text} type="text" id="name" name="name"  onChange={(e) => {setFormData({name: e.target.value,email:formData.email,message:formData.message});console.log(formData)}}/>
                    <br/><br/>
                    <label className={style.label}>Email</label>
                    <input className={style.text} type="email" id="email" name="email" onChange={(e) => {setFormData({name: formData.name,email:e.target.value,message:formData.message});console.log(formData)}}/>
                    <br/><br/>
                    <label className={style.label}>Message</label>
                    <textarea className={style.text} id="Message" name="message" onChange={(e) => {setFormData({name: formData.name,email:formData.email,message:e.target.value});console.log(formData)}}></textarea>
                    <br/><br/>
                    <input className={style.submit} type="submit" id="submit" name="submit"/>
                </form>
                <div className={style.status}>
                    {status}
                </div>
            </main>
    )
}