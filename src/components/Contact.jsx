import { useState } from 'react';

function Contact() {
  const [message, setMessage] = useState('');
  const [showTip, setShowTip] = useState(false);

  const handleSend = () => {
    alert('Message sending will be implemented later!');
  };

return (
    <section className="contact">
      <h2>Contact Me</h2>
      <p className="contact-intro">
        Have a question, a project idea, or just want to say hi? Drop me a line below — I'd love to hear from you.
      </p>

      <div className="contact-links">
        <a href="mailto:umraniayug4507@gmail.com">Email</a>
        <a href="https://github.com/YugUmrania" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/yug-umrania-368816331" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>

      <button className="tip-btn" onClick={() => setShowTip(!showTip)}>
        {showTip ? 'Hide Tip' : 'Show Tip'}
      </button>
      {showTip && <p className="tip">Tip: Include your email so I can respond!</p>}

      <div className="form">
        <label htmlFor="msg">Your message</label>
        <textarea
          id="msg"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          rows="4"
        />
        <p className="preview">You typed: {message}</p>

        <button onClick={handleSend}>Send Message</button>
      </div>
    </section>
  );
}

export default Contact;