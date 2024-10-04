import React, { useState, useEffect } from "react";
import ParticleEffect from "../components/Title";



const Home = () => {
  const [timeLeft, setTimeLeft] = useState("");
  const [activeFAQ, setActiveFAQ] = useState(null); // State for managing active FAQ item

  useEffect(() => {
    const eventDate = new Date("November 19, 2024 00:00:00").getTime();

    const countdown = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);

      if (distance < 0) {
        clearInterval(countdown);
        setTimeLeft("Event Started!");
      }
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  // FAQ Toggle Handler
  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index); // Toggle FAQ item
  };
  return (
    <div>
      {/* Header */}
      <header className="header">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSeGgWWwPLUvhhbBcbPXIK-Y0HSYIP8yEyINQSqCAqcmImdemw/viewform?vc=0&c=0&w=1&flr=0" className="register-btn" style={{marginLeft: '80vw'}}>Register Now</a>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <img src="/2024.png" alt="Hackathon Logo" />
          <div>
            <ParticleEffect text={"Magnificus Concursus"} />
          </div>
        </div>
      </section>
        {/* Date Section */}
      <section className="date">
        <div className="date-content">
          <h2> Countdown &#187;</h2>
          <h3>19th November</h3>
          <div className="countdown-timer">{timeLeft}</div>
          
        </div>
      </section>
      {/* About Section */}
      <section className="section about-section">
        <h2>Magnificus Concursus is back!</h2>
        <p>
        Get ready to experience the ultimate thrill of innovation at GNMS on Tuesday, 19th November! We’re presenting a Techno-Spectacle where Coding, Esports, Machine Learning, and Robotics converge in an extraordinary fusion. It’s more than just an event; it’s your chance to push boundaries, connect with fellow innovators, and showcase your talent.<br/> High school stars, this is your moment to shine. Let’s make it legendary!
        </p>
      </section>   

      
      
      {/* Theme Section */}
            <section className="theme-section">
              <div className="theme-content">
                <h2>Theme</h2>
                <h3>Innovating Tomorrow's Future</h3>
              </div>
            </section>
      {/* Events Section */}
      <section className="section events-section">
        <h2 className="eventsheading">Events</h2>

        <a href="/hack">
        <div className="event-card">
          <img src="/ha.jpeg" alt="Hackathon" />
          <div className="event-text">
            <h3>Hackathon</h3>
          </div>
        </div>
        </a>
        

        <a href="/esp">
        <div className="event-card">
          <img src="/espo.jpeg" alt="Esports" />
          <div className="event-text">
            <h3>Esports</h3>
          </div>
        </div>
        </a>

        <a href="/cod">
        <div className="event-card">
          <img src="/codalo.jpeg" alt="Codalo" />
          <div className="event-text">
            <h3>Codalo</h3>
          </div>
        </div>
        </a>


        <a href="/TFC"><div className="event-card">
          <img src="/tfc.jpg" alt="TFC" />
          <div className="event-text">
            <h3>Tech For Change</h3>

          </div>
          
        </div>
        </a>

        
      </section>
      <section className="section grades-section">
        <div className="grades-container">
          <span className="grade-text">Gr 9-12</span>
          <span className="grade-text">Gr 9-12</span>
          <span className="grade-text">Gr 9-10</span>
          <span className="grade-text">Gr 6-8</span>
        </div>
      </section>


      

      

            {/* FAQ Section */}
            <div className="faq-container">
        <div className="faq-header">FAQs</div>

        <div className={`faq-item ${activeFAQ === 0 ? "active" : ""}`}>
          <div className="question" onClick={() => toggleFAQ(0)}>
            What time are participants expected to arrive at the venue?
          </div>
          <div className="answer">
           Participants are expected to report to the venue by 8:00 AM for registration, followed by the opening ceremony.
          </div>
        </div>

        <div className={`faq-item ${activeFAQ === 1 ? "active" : ""}`}>
          <div className="question" onClick={() => toggleFAQ(1)}>
          Can a student participate in more than one event?
          </div>
          <div className="answer">
           No, each student may participate in only one event throughout the hackathon. We encourage participants to carefully select their event before completing the registration form.
          </div>
        </div>

        <div className={`faq-item ${activeFAQ === 2 ? "active" : ""}`}>
          <div className="question" onClick={() => toggleFAQ(2)}>
            Is there a fee to participate in the hackathon, and what are the prizes for winners?
          </div>
          <div className="answer">
           Participation in the hackathon is free of charge. Details regarding prizes and rewards for winners will be shared before the main event day.
          </div>
        </div>

        <div className={`faq-item ${activeFAQ === 3 ? "active" : ""}`}>
          <div className="question" onClick={() => toggleFAQ(3)}>
           Will devices be provided for the participants?
          </div>
          <div className="answer">
           No, except for consoles provided for the e-sports event, participants are required to bring their own devices
          </div>
        </div>
      </div>

      {/* Venue Section */}
      <section className="venue">
        <h1>Venue</h1>
        <p>Gems New Millennium School</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.351350881146!2d55.25488967537953!3d25.12380967775823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f693bd0e85867%3A0xd2a026430b7cfc05!2sGEMS%20New%20Millennium%20School!5e0!3m2!1sen!2sae!4v1725723427009!5m2!1sen!2sae"
          width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      {/* Sponsors Section */}
      <section className="sponsors">
        <h1 style={{ fontSize:"30px", marginTop:"100px"}}>Our sponsors &#8250; </h1>
        <div className="sponsor-logos">
          <img src="/dahua.png" alt="Dahua" style={{ width: "200px",borderRadius: '20px', margin:"40px" }} />
        </div>


      </section>
      <section className="contact" style={{ padding: '30px', backgroundColor: '#111', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', margin:'30px',marginTop:'100px',marginBottom:'10px'}}>
        <h2 style={{ textAlign: 'center', color: '#ffffff', fontSize: '1.5em', marginBottom: '15px' }}>
          Contact Us
        </h2>
        <p style={{ textAlign: 'center', fontSize: '1.2em', color: '#cfcfcf', marginBottom: '20px' }}>
          For any inquiries or further details, feel free to email us at:<br/><br/>
        </p>
        <p style={{ textAlign: 'center' }}>
          <a href="mailto:magnificusconcursus@gmail.com" 
            style={{ color: '#06039c', fontSize: '1.3em', textDecoration: 'none',  padding: '10px 20px', backgroundColor: '#00ffff', borderRadius: '20px', transition: 'background-color 0.3s' }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#00bcd4'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#00ffff'}>
            magnificusconcursus@gmail.com
          </a>
        </p>
      </section>




      {/* Footer */}
      <footer className="footer">
        
        <a href="/credits" style={{textDecoration: 'none', color: 'white'}}>Credits</a>
        <p>&copy; 2024 Magnificus Concursus. All rights reserved.</p>
        
      </footer>
    </div>
  );
};

export default Home;
