import style from "./resume.module.css";
import Link from "next/link";

export default function Resume(){
    return (
            <div className={style.body}>
                <main className={style.main}>
                    <h1 className={style.pageTitle}>Resume</h1>
                    <Link className={style.resumeLink} href="https://drive.google.com/file/d/1BoUM5xDTpylFgsJMpw0dZww6juq-PzLQ/view?usp=sharing" target="_blank">View Resume</Link>
                    <div className={style.resume}>
                        <section className={style.section}>
                            <h2 className={style.sectionTitle}>Education</h2>
                            <div className="entry">
                                <h3 className={style.entryTitle}>Bachelor of Science in Computer Science</h3>
                                <p className="entry-info">California Polytechnic State University, San Luis Obispo</p>
                            </div>
                        </section>
                        <section className={style.section}>
                            <h2 className={style.sectionTitle}>Experience</h2>
                            <div className="entry">
                                <h3 className={style.entryTitle}>Code Coach @ theCoderSchool | July - Sep 2024</h3>
                                <p className="entry-description">Instructed students on the foundational concepts of Python and Scratch through developing games.</p>
                            </div>
                            <div className="entry">
                                <h3 className={style.entryTitle}>Student Researcher | Quantum Mechanics and Applications to Nanotechnology @ UC Davis | July 2022</h3>
                                <p className="entry-description">One of 20 students selected to study Quantum Mechanics and Applications to Nanotechnology in July 2022.</p>
                                <p>Applied elements of programming in C to write programs that demonstrate an electron&apos;s location as a probability of being at a range of positions</p>
                                <p>Constructed scanning tunneling microscope (STM) with a group of 3 other students</p>
                                <p>Utilized C to control STM in real time</p>
                            </div>
                            <div className="entry">
                                <h3 className={style.entryTitle}>Kumon Teaching Assistant | June 2019 - March 2020</h3>
                                <p className="entry-description">Mentored students in a variety of fundamental math concepts.</p>
                                <p className="entry-description">Explained various concepts through different approaches to ensure every student understood the material.</p>
                            </div>
                        </section>
                        <section className={style.section}>
                            <h2 className={style.sectionTitle}>Projects</h2>
                            <div className="entry">
                                <h3 className={style.entryTitle}>Clustering Project | Hackathon Project</h3>
                                <p className="entry-description">Utilized k-means algorithm to cluster unsolved crime reports.</p>
                            </div>
                            <div className="entry">
                                <h3 className={style.entryTitle}>Full Stack Web App | Hackathon Project</h3>
                                <p className="entry-description">Web App that allows students to rate how friendly an organization on campus is.</p>
                            </div>
                            <div className="entry">
                                <h3 className={style.entryTitle}>Data Visualization Class Project</h3>
                                <p className="entry-description">Created a website analyzing Data on UFO sightings across the U.S.</p>
                                <p className="entry-description">Utilized TypeScript, HTML, CSS, and Vega-Lite</p>
                            </div>
                            <div className="entry">
                                <h3 className={style.entryTitle}>Personal Website</h3>
                                <p className="entry-description">Designed and built a personal website implementing HTML and CSS</p>
                            </div>
                            
                        </section>
                        <section className={style.section}>
                            <h2 className={style.sectionTitle}>Skills</h2>
                            <ul className="skill-list">
                                <li>Python</li>
                                <li>TypeScript</li>
                                <li>JavaScript</li>
                                <li>HTML</li>
                                <li>Data Analysis</li>
                                <li>Communication</li>
                                <li>Public Speaking</li>
                            </ul>
                        </section>
                        <section className={style.section}>
                            <h2 className={style.sectionTitle}>Coursework</h2>
                            <ul className="course-list">
                                <li>Project Based Object Oriented Programming (IP)</li>
                                <li>Data Structures</li>
                                <li>Fundamentals of Computer Science</li>
                                <li>Introduction to Computing</li>
                                <li>Linear Algebra 1</li>
                                <li>Calculus 3</li>
                            </ul>
                        </section>
                        <section className={style.section}>
                            <h2 className={style.sectionTitle}>Awards</h2>
                            <h3 className={style.entryTitle}>Graphic Design Project | 9th Nationally</h3>
                            <p className="entry-description">My team created a complete package (product designs, store layout, webpage design) for an imaginary mens store</p>
                            <p className="entry-description">Surveyed 100+ people across the globe and analyzed survey results to create best consumer tailored product</p>
                            <p className="entry-description">Placed 9th Nationally out of 100+ teams in July 2022. Awarded title of CA State Champion in Graphic Design in April 2022</p>
                            <a href="https://majisoumily14.wixsite.com/mmrbl">Learn More</a>
                        </section>
                    </div>
                </main>
            </div>
    )
}