import Image from 'next/image';
import Head from 'next/head';
import styles from './resume.module.css'; // Ensure your styles are correctly referenced

export default function Resume() {
  return (
    <>
      <Head>
        <title>My Personal Website - Resume</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.pageTitle}>Resume</h1>
        <div className={styles.resumeImage}>
          <a href="/jonathanlauresume.pdf">
            <Image
              src="/resumesc.png"
              alt="Jonathan Lau's Resume"
              width={500}
              height={500} 
            />
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        © 2024 My Personal Website | All Rights Reserved
      </footer>
    </>
  );
}
