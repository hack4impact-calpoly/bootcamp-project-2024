const ResumePage = () => {
    return (

<html>
    <head>
        <title> Ivan Torriani's Website </title>

    </head>

    <body>
        <nav className="navbar"> 
            <h1 className = "logo">
                <a href="index.html"> Navigation </a>
            </h1>
            <ul className= "nav-list">
                <li><a href="index.html">Home</a></li>
                <li><a href="blog.html">Blog</a></li>
                <li><a href="portfolio.html">Portfolio</a></li>
                <li><a href="resume.html">Resume</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>
        <h1>



        </h1>
        
        <main>
            <div className = "resume">
                <section> 
                    <h3>
                        Skills
                    </h3>
                    <div>
                        <p>
                            Programming Languages: Python (Experienced)
                        </p>
                        <p>
                            Databases: JSON (Dictionaries and Lists), NumPy (Matrices and Arrays)
                        </p>
                        <p>
                            Data Analytics & Libraries: MS Excel, MATLAB, PyTorch, OpenAI, spaCy, JSON, pywin32
                        </p>
                    </div>
                </section>
                <section> 
                    <h3>
                        Projects
                    </h3>
                    <h4>
                        Custom Trained AI Stock Analyst (Market-Vision)
                    </h4>
                        <p>
                            Created a model that utlizes <strong> pandas </strong>
                            to gather, organize, and score financial data from 30 active stocks 
                            daily based on 5 technical and 6 fundamental standards.
                        </p>

                </section>
                <section> </section>
                <section> </section>
                <section> </section>   

            </div>
 
        </main>

        <nav> </nav>


    </body>


</html>
)
