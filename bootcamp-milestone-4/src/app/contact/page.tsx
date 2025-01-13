import ContactForm from "@/components/contactForm";
export default function Home() {
  return (
    <div>
      <div className="business-main">
        <div className="business-card">
          <div className="business-card-line">Nolan Knievel</div>
          <div className="business-card-line">
            Cal Poly San Luis Obispo | Computer Science Student
          </div>
          <div className="business-card-line">nolan.knievel@icloud.com</div>
          <div>{<ContactForm />}</div>
        </div>
      </div>
    </div>
  );
}
