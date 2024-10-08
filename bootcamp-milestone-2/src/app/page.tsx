import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.about}>
      <div className={styles.aboutImage}>
        <Image
          src="/TempPFP.jpg"
          alt="Profile Picture"
          width="200"
          height="150"
        />
      </div>
      <div className={styles.aboutText}>
        <h1 className={styles.pageTitle}>About</h1>
        <p>
          Hello, my name is <strong>Sean Nguyen (he/him/his)!</strong> I am
          currently a <em>third year</em> student at Cal Poly San Luis Obispo
          majoring in <strong>Computer Science</strong> with a concentration in
          AI and Machine Learning.
        </p>
        <p>
          Aside from academics, I love music, ranging from classNameical piano
          to contempoary chord sheets, swimming—or anything aquatic, really—and
          expanding my flavor palette. Oh, and I can make <em>pho</em>
        </p>
      </div>
    </div>
  );
}
