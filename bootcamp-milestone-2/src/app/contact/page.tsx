"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import emailjs from "emailjs-com";

const Message = ({
  type,
  text,
}: {
  type: "success" | "error";
  text: string;
}) => {
  const styles = {
    success: {
      color: "green",
      backgroundColor: "#d4edda",
      padding: "10px",
      border: "1px solid #c3e6cb",
      borderRadius: "5px",
      marginBottom: "15px",
    },
    error: {
      color: "red",
      backgroundColor: "#f8d7da",
      padding: "10px",
      border: "1px solid #f5c6cb",
      borderRadius: "5px",
      marginBottom: "15px",
    },
  };

  return <div style={styles[type]}>{text}</div>;
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comments: "",
  });
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    text: string;
  }>({ type: null, text: "" });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setStatus({ type: null, text: "Sending..." });

      const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
      const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

      // Map formData to match the placeholders in your email template
      const templateParams = {
        from_name: formData.name, // Matches {{from_name}}
        email_id: formData.email, // Matches {{email_id}}
        message: formData.comments, // Matches {{message}}
      };

      // Sending email using emailjs-com
      await emailjs.send(serviceID, templateID, templateParams, publicKey);

      setStatus({ type: "success", text: "Email sent successfully!" });
      setFormData({
        name: "",
        email: "",
        comments: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus({
        type: "error",
        text: "An error occurred. Please try again later.",
      });
    }
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f4f4f4",
        margin: 0,
        padding: 0,
      }}
    >
      <main
        style={{
          width: "100%",
          maxWidth: "600px",
          margin: "50px auto",
          backgroundColor: "#fff",
          padding: "20px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          borderRadius: "10px",
        }}
      >
        <p style={{ fontSize: "24px", color: "#333", textAlign: "center" }}>
          Contact Form
        </p>

        {status.type && <Message type={status.type} text={status.text} />}

        <form onSubmit={handleSubmit}>
          <label
            htmlFor="name"
            style={{
              display: "block",
              fontWeight: "bold",
              margin: "10px 0 5px",
              color: "#333",
            }}
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            required
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "15px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              boxSizing: "border-box",
              fontSize: "16px",
            }}
          />

          <label
            htmlFor="email"
            style={{
              display: "block",
              fontWeight: "bold",
              margin: "10px 0 5px",
              color: "#333",
            }}
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "15px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              boxSizing: "border-box",
              fontSize: "16px",
            }}
          />

          <label
            htmlFor="comments"
            style={{
              display: "block",
              fontWeight: "bold",
              margin: "10px 0 5px",
              color: "#333",
            }}
          >
            Comments
          </label>
          <textarea
            id="comments"
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            placeholder="Comments"
            required
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "15px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              boxSizing: "border-box",
              fontSize: "16px",
            }}
          ></textarea>

          <input
            type="submit"
            value="Submit"
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "#007bff",
              border: "none",
              borderRadius: "5px",
              color: "white",
              fontSize: "16px",
              cursor: "pointer",
              transition: "background-color 0.3s",
            }}
          />
        </form>
      </main>
    </div>
  );
};

export default Contact;
