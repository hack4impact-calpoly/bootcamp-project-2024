import Image from "next/image";

export default function Home() {
  return (
    <div>

      {/* Main Content */}
      <main>
        <div className="about">
          <div className="about-image">
            <Image 
              src="/images/smiski.jpg" 
              alt="smiskis!" 
              width={500} 
              height={500} 
            />
          </div>
          <div className="about-text">
            <p>
              Hello! My name is Mio Nakagawa and I am a third year <strong>computer science major</strong> at Cal Poly SLO.
            </p>
            <p>
              I enjoy watching movies/tv shows, drinking or eating anything matcha related, and travelling!
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer>
        © 2024 My Personal Website | All Rights Reserved | Made with love ♥
      </footer>
    </div>
  );
}
