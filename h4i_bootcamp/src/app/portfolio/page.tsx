import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/navbar';

export default function Resume() {
  return (
    <div>
      <Navbar></Navbar>

      <main>
        <h1 className="portfolio">My Projects</h1>

        <div className="project">
            <div className="project-details">
                <p className="project-name">Deep's Website</p>
                <p className="project-description">A personal portfolio website showcasing my work, blog, and resume.</p>
                <Link href="https://www.linkedin.com/in/deep-singh14/" className="button">Learn More</Link>
            </div>
        </div>
    </main>

      <footer className="footer">© 2023 Deep's Website | All Rights Reserved</footer>
    </div>
  );
}
