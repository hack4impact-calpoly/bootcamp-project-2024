import Head from 'next/head';


export default function Contact() {
  return (
    <div>
        <Head>
        <title> Ivan Torriani's website </title>
        </Head>

        <main>
            <div>
                <p>
                    <strong> Welcome to the contact page! </strong>
                </p>
            </div>
            
            <div>
                <form id ="contact-form">
                    Name: 
                    <input type = "text" />
                    Email:
                    <input type= "email" />
                    
                    Message:
                    <textarea>

                    </textarea>
                    <input type = "submit" />
                </form>
            
            </div>

                

                
        
        </main>

    </div>

    );
}

