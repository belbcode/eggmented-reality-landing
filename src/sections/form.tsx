import React, { useState } from 'react';
import "../styles/newsletterform.css"

function NewsletterForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(`Submitted: ${firstName} ${lastName} (${email})`);
    // Handle submission logic here
  }

  return (
    <div className="newsletter-form-container">
      <h2>Newsletter Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            id="first-name"
            placeholder="First Name"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            required
          />
        </div>

        <div>
          <input
            type="text"
            id="last-name"
            placeholder="Last Name"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            required
          />
        </div>

        <div>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>

        <button type="submit">Sign up</button>
      </form>
    </div>
  );
}

export default NewsletterForm;
