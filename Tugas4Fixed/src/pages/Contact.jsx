import React from 'react';
import '../styles/Contact.css';
import ProfileImg from '../assets/Profile.jpg';

function Contact() {
  return (
    <section id="contact" className="contact-container">
      <div className="contact-left">
        <img src={ProfileImg} alt="Profile" className="profile-img" />
        <div className="contact-info">
          <h3>Contact Details</h3>
          <p>andinipriha1005@gmai.com</p>
          <p>+62-858-0716-5199</p>

          <h3>Social</h3>
            <ul>
             <li><a href="https://www.linkedin.com/in/andini-prihartiningtias-4418aa326" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
             <li><a href="https://www.instagram.com/anprhnn" target="_blank" rel="noopener noreferrer">Instagram</a></li>
             <li><a href="https://github.com/AndiniPrihartiningtias" target="_blank" rel="noopener noreferrer">GitHub</a></li> {/* Ganti link GitHub kalau ada akun kamu ya */}
          </ul>

        </div>
      </div>

      <div className="contact-right">
        <h2>Let’s build something cool together</h2>
        <form className="contact-form">
          <label>Nama</label>
          <input type="text" placeholder="Nama Kamu" required />

          <label>Email</label>
          <input type="email" placeholder="emailkamu@gmai.com" required />

          <label>Subjek</label>
          <input type="text" placeholder="Contoh: Kerja sama proyek" />

          <label>Pesan</label>
          <textarea placeholder="Tulis pesan kamu di sini..." rows="5"></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
