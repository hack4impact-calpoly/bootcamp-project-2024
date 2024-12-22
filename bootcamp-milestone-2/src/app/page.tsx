import thing from "../../public/thebox.jpg";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1 className="page-title">Personal Website</h1>
      <div className="about">
        <div className="about-image">
          <Image src={thing} alt="a box" />
        </div>
        <div className="about-text">
          <p>Hello World! This is my website.</p>
          <p>This is a sentence.</p>
        </div>
      </div>
    </main>
  );
}
