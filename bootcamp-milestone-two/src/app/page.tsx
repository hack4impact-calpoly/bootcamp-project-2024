import Head from 'next/head';
import BlogPreview from './components/blogPreview';
import blogs from './blogData';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ivan Torriani's website</title>
      </Head>

      <main>
        <div className="about">
          <div className="about-image"></div>
          <div className="about-text">
            <p><strong>Hello!</strong></p>
            <p>
              My name is <em>Ivan Torriani.</em> I'm from San Diego, California, and I'm currently a freshman at Cal Poly. Apart from school, I love to run, read, and hang out with new people. In the future, I want to study Math/CS in graduate school. 
            </p>
          
            <Image src="/me.jpg" alt="Picture of me" width={500} height={500} className = 'profile' />
            
            
          </div>
        </div>

      </main>

      <footer>© 2023 My Personal Website | All Rights Reserved | Made with love ♥</footer>
    </div>
  );
}
