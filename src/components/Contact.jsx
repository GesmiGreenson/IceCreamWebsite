import React, {useState} from 'react'
import './Contact.css'
function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields.');
      return;
    }

    console.log('Form data submitted:', formData);
    setSubmitted(true);

 
    setFormData({name: '', email: '', message: ''});
  };
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>

      <div className="contact-info">
        <h3>Sweet Scoops Ice Cream</h3>
        <p>123 Kochi<br/>Ernakulam, CT 45678</p>
        <p><strong>Phone:</strong> (123) 456-7890</p>
        <p><strong>Email:</strong> sweetscoops@gmail.com</p>
        <p><strong>Hours:</strong> Mon–Sat: 10 AM – 9 PM, Sun: 12 PM – 6 PM</p>
      </div>

      <div className="contact-form-container">
        {submitted && <p className="thank-you">Thank you for contacting us! We will get back to you shortly.</p>}

        <form onSubmit={handleSubmit} className="contact-form">
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
            />
          </label>

          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
            />
          </label>

          <label>
            Message:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message here"
            />
          </label>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact

