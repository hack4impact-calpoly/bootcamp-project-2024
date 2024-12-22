import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main>
        <h1 className="page-title">What's up!</h1>
        <div className="about">
          <div className="about-image">
            <Image
              src="/nickaanjahadi.jpg"
              alt="An image of me, Nickaan Jahadi"
              layout="responsive"
              width={350}
              height={500}
            />
          </div>
          <div className="about-text">
            <p>
              Hello! My name is Nickaan Jahadi and I am a
              <strong> third year computer engineering major</strong>. I grew up
              in San Diego and love nutrition, working out, and playing/watching
              sports, especially basketball, boxing, and MMA.
            </p>
            <p>
              I got into programming my senior year of high school and am still
              deciding whether I wanna pursue software, hardware, or both. I am
              very new to web development, so this starter pack was definitely a
              good start.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
