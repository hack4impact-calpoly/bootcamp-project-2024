import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/navbar';

export default function Resume() {
  return (
    <div>
      <Navbar></Navbar>

      <main>
        <h1 className="page-title">My Resume</h1>
        <a href="/public/Resume.pdf" className="button" download>Download Resume</a>

        <div className="resume">
          <section className="section">
            <h2 className="section-title">Contact Information</h2>
            <p>Khushdip Singh</p>
            <p>1769 Shellstone Way, Ripon, CA</p>
            <p>Email: khushdip14@gmail.com | Phone: (209) 666-7789</p>
          </section>

          <section className="section">
            <h2 className="section-title">Objective</h2>
            <p>To obtain a masters in CS along with knowledge of the day-to-day workings of a software engineer through an internship. Proven to be dependable, diligent, and adaptable to any circumstance.</p>
          </section>

          <section className="section">
            <h2 className="section-title">Education</h2>
            <ul className="education-list">
              <li>Ripon High School, Graduated May 2024, GPA: 4.71</li>
              <li>Modesto Junior College, Dual/Part-Time Enrollment since July 2022, GPA: 4.00</li>
              <li>California Polytechnic State University, San Luis Obispo, Computer Science Major</li>
            </ul>
          </section>

          <section className="section">
            <h2 className="section-title">Work Experience</h2>
            <div className="entry">
              <h3 className="entry-title">Bay Valley Tech, Software Intern</h3>
              <p className="entry-info">February 2023 - February 2024</p>
              <p className="entry-description">Learned frontend development skills and languages such as Javascript, CSS, and the React framework to cooperate with others in order to design and develop websites and applications.</p>
            </div>
            <div className="entry">
              <h3 className="entry-title">ATI Trucking Website, Front-End Developer</h3>
              <p className="entry-info">2023 - Present</p>
              <p className="entry-description">Programmed an e-commerce website for high-growth trucking companies in California.</p>
            </div>
            <div className="entry">
              <h3 className="entry-title">SINGH Air-Conditioning and Heating, HVAC Technician / Front-End Developer</h3>
              <p className="entry-info">June 2022 - Present</p>
              <p className="entry-description">Install and repair heating, ventilation, and air-conditioning systems in residential and commercial buildings.</p>
            </div>
            <div className="entry">
              <h3 className="entry-title">Round Table Pizza, Crew Member</h3>
              <p className="entry-info">June 2023 - Present</p>
              <p className="entry-description">Learned skills in communication and teamwork.</p>
            </div>
          </section>

          <section className="section">
            <h2 className="section-title">Extracurricular Leadership Experience and Projects</h2>
            <div className="entry">
              <h3 className="entry-title">LATNO Engine</h3>
              <p className="entry-info">2022 - Present</p>
              <p className="entry-description">Used C++ to develop a 2D game engine from scratch.</p>
            </div>
            <div className="entry">
              <h3 className="entry-title">Ripon High School Code Club, Founder and President</h3>
              <p className="entry-info">2022 - May 2024</p>
              <p className="entry-description">Hosted RiponHacks, a hackathon to promote coding and technology.</p>
            </div>
            <div className="entry">
              <h3 className="entry-title">Ripon High School ASB Student Council, Technology Commissioner</h3>
              <p className="entry-info">2023 - May 2024</p>
              <p className="entry-description">Managed tech equipment and served as student IT.</p>
            </div>
          </section>

          <section className="section">
            <h2 className="section-title">Awards and Certificates</h2>
            <ul className="awards-list">
              <li>HackBackBetter (2023) & H2O Hackathon (2024)</li>
              <li>Legacy JavaScript Algorithms and Data Structures, 2021</li>
            </ul>
          </section>
        </div>
      </main>

      <footer className="footer">© 2023 Deep's Website | All Rights Reserved</footer>
    </div>
  );
}
