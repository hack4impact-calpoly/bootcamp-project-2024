import React from "react";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>

      <main>
        <section className="hero">
          <h1 className="hero-title">Welcome to My Website!</h1>
          <p className="hero-subtitle">I’m Deep, a Computer Science student.</p>
        </section>

        <section className="about section-theme">
          <h2>About Me</h2>
          <div className="about-content hover-box">
            <div className="about-image">
              <Image
                width={200}
                height={200}
                src="/cat.jpg"
                alt="just a normal cat"
                className="scaled-image"
              />
            </div>
            <div className="about-text">
              <p>
                My name is <strong>Deep</strong> and I am a first-year{" "}
                <strong>CS</strong> major.
              </p>
              <p>
                I <em>love</em> to <strong>cook</strong>, especially for my
                friends and family, and <strong>drive</strong> around in my car.
              </p>
              <p>
                I am also <em>passionate</em> about listening to{" "}
                <strong>music</strong> and love <em>discovering</em> artists and
                genres.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        © 2023 Deep's Website | All Rights Reserved
      </footer>
    </div>
  );
}
