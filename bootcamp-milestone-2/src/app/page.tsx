import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css"; 

export default function Home() {
  return (
    <main>
      <h1 className={styles.pageTitle}>Welcome!</h1>
      <div className={styles.content}>
        <div className={styles.intro}>
          <h3>
            <strong>Hello there! Welcome to my Personal Website.</strong>
          </h3>
        </div>
        <p>
          My name is Jonathan Lau and I am a third-year computer science student
          at California Polytechnic State University, San Luis Obispo. I am
          actively seeking an internship where I can apply my knowledge and
          skills, while being fully committed to learning and improving. I am
          eager to take on any challenge and ready to go the extra mile to
          secure a position that will help me grow both personally and
          professionally.
        </p>
        <div className={styles.aboutImage}>
          <Image
            src="/JonathanLau_Picture.jpg" // Place this image in the public directory
            alt="Personal picture of Jonathan Lau"
            width={500}
            height={500}
            className={styles.image}
          />
        </div>
      </div>
    </main>
  );
}