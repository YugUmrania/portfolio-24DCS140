import { useState } from 'react';

function Contact() {
  const [message, setMessage] = useState('');
  const [showTip, setShowTip] = useState(false);

  const handleSend = () => {
    alert('Message sending will be implemented later!');
  };

  return (
    <section>
      <h2>Contact Me</h2>

      <button onClick={() => setShowTip(!showTip)}>
        {showTip ? 'Hide Tip' : 'Show Tip'}
      </button>
      {showTip && <p>Tip: Include your email so I can respond!</p>}

      <div>
        <label>Your message:</label>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <p>You typed: {message}</p>

        <button onClick={handleSend}>Send</button>
      </div>
    </section>
  );
}

export default Contact;