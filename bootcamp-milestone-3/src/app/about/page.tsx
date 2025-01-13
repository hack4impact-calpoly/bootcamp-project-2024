export default function Home() {
  return (
    <div>
      <div className="border-wrap">
        <h1 className="page-title">About</h1>
        <div className="photo-and-description">
          <div className="about-image">
            <img src="./images/croppedHeadshot.jpg" width="500px" />
          </div>

          <div className="about-text">
            <h2>Hey! I'm Nolan Knievel</h2>
            <p>
              I'm from Seattle, WA and am currently a second year computer
              science student at Cal Poly San Luis Obispo. <br></br>
              School keeps me busy, but outside of the classroom I love to swim,
              work out, run, camp, and play piano.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
