

export default function Contact() {
    return (
        <>
        <main>
            <h1 className = "page-title">
                Contact
            </h1>
            <form id = "contact-form">
                <label htmlFor = "name">Name</label>
                <input type = "text"  name = "name" id = "name" placeholder = "Name" required/> 
                
                <label htmlFor = "email">Email</label>
                <input type = "text" name  ="Email" id = "email" placeholder = "Name" required/> 
                <label htmlFor = "message">Message</label>
                
                <textarea name = "message" id = "message" placeholder = "Message" required />
                <input type = "submit" value = "Submit"/>
                
            </form>
        </main>
        </>
    )
}