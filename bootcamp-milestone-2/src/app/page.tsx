import Image from 'next/image';
import style from './page.module.css'

export default function Home() {
  return (
    <div className={style.body}>
          <main className={style.main}>
              <h1 className={style.pageTitle}>Welcome to Rachana&apos;s website!</h1>
              <div className={style.about}>
                  <div className="about-image">
                      <Image className={style.aboutImageImg} width={300} height={300} src="/pfp.jpg" alt="Image of Rachana - the creator of the website"/>
                  </div>
                  <div className="about-information">
                      <div className={style.abooutText}>
                          <p className={style.abooutTextP}>Hello! I&apos;m <strong>Rachana</strong> (she/her) and I&apos;m a second year computer science student.</p>
                          <p className={style.abooutTextP}>I&apos;m eager to learning new technologies and expanding upon my knowledge through real life applications.</p>
                          <p className={style.abooutTextP}>In my free time I love to read books, crochet, bullet journal, and listen to music!</p>
                      </div>
                      {/* <div className={style.aboutLink}>
                          <Link href="https://www.linkedin.com/in/rachana-raju/">
                              <img className={style.img} src="linkedin.png" height="100 px" alt="image of a purple linkedin logo which links to Rachana's linkedin"/>
                          </Link>
                          <Link href="https://github.com/rachanaraju3">
                              <img className={style.img} src="github1.jpeg" height="100 px" alt="Image of a purple github logo linking to Rachana's github"/>
                          </Link>
                      </div> */}
                  </div>
              </div>
          </main>
    </div>
  );
}
