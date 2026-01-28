const floatingBtn = document.createElement('button');
floatingBtn.className = 'floating-contact-btn';
floatingBtn.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
  <span>Contattaci</span>
`;

document.body.appendChild(floatingBtn);

const modal = document.createElement('div');
modal.className = 'contact-modal';
modal.innerHTML = `
  <div class="modal-content">
    <button class="modal-close">&times;</button>
    <h2>Richiedi Informazioni</h2>
    <form class="contact-form" id="contactForm">
      <div class="form-group">
        <label for="name">Nome e Cognome *</label>
        <input type="text" id="name" name="name" required>
      </div>
      
      <div class="form-group">
        <label for="email">Email *</label>
        <input type="email" id="email" name="email" required>
      </div>
      
      <div class="form-group">
        <label for="phone">Telefono</label>
        <input type="tel" id="phone" name="phone">
      </div>
      
      <div class="form-group">
        <label for="service">Servizio di interesse</label>
        <select id="service" name="service">
          <option value="">Seleziona un servizio</option>
          <option value="sicurezza-lavoro">Sicurezza luoghi di lavoro</option>
          <option value="sicurezza-cantieri">Sicurezza cantieri</option>
          <option value="antincendio">Sicurezza antincendio</option>
          <option value="acustica">Acustica e vibrazioni</option>
          <option value="certificazioni">Certificazioni energetiche</option>
          <option value="termografia">Termografia IR</option>
          <option value="sistemi-gestione">Sistemi di gestione</option>
          <option value="altro">Altro</option>
        </select>
      </div>
      
      <div class="form-group">
        <label for="message">Messaggio *</label>
        <textarea id="message" name="message" rows="5" required></textarea>
      </div>
      
      <button type="submit" class="submit-btn">Invia Richiesta</button>
    </form>
    <div class="success-message" style="display: none;">
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="#10b981">
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
      </svg>
      <h3>Messaggio inviato con successo!</h3>
      <p>Ti risponderemo al più presto.</p>
    </div>
  </div>
`;
document.body.appendChild(modal);

floatingBtn.addEventListener('click', () => {
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
});

const closeBtn = modal.querySelector('.modal-close');
closeBtn.addEventListener('click', () => {
  modal.classList.remove('active');
  document.body.style.overflow = '';
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
});

const form = document.getElementById('contactForm');
const successMsg = modal.querySelector('.success-message');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  form.style.display = 'none';
  successMsg.style.display = 'block';
  
  setTimeout(() => {
    form.style.display = 'block';
    successMsg.style.display = 'none';
    form.reset();
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }, 3000);
});
