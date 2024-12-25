// You can name the function within page.tsx anything you want.
export default function Home() {
  return (
    <div>
      <h1 className="page-title">Hello Everyone!</h1>
      <div className="about-section">
        <div className="about-image">
          <img
            src="/hpic.jpg"
            alt="Beautiful picture of a mountain with rainbow in the background, and a lake perfectly reflecting the scene"
          />
        </div>

        <div className="about-me-basic">
          <p>
            My name is <strong>Saurish Suman</strong>.
          </p>
          <p>
            I am currently a freshman at <strong>Cal Poly</strong>, majoring in{" "}
            <em>Computer Science</em>.
          </p>
          <p>My hobbies include programming, math, biking, gaming, etc.</p>
        </div>
      </div>
    </div>
  );
}
