import "../styles/contact.css";

export function loadContactPage() {
  const page = document.querySelector("#content");
  const contactDiv = document.createElement("div");
  contactDiv.innerHTML = `
    <div class="contact-title">Contact Us</div>
    <div class="contact-info-container">
      <div class="maps-address">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d534.4708390153046!2d-74.00257723017982!3d40.73070288461784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25993b54b0599%3A0x11391b37b33ccf81!2s7%20Carmine%20St%2C%20New%20York%2C%20NY%2010014%2C%20USA!5e0!3m2!1sen!2sbd!4v1744124192483!5m2!1sen!2sbd" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div class="right-section">
        <div class="contact-info-right-section">
          <div class="info-container">
            <div class="contact-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>pin</title><path d="M16,12V4H17V2H7V4H8V12L6,14V16H11.2V22H12.8V16H18V14L16,12Z" /></svg></div>
            <div class="contact-text">7 Carmine St, New York, NY 10014, USA</div>
          </div>
          <div class="info-container">
            <div class="contact-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>clock-time-four</title><path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12S17.5 2 12 2M16.3 15.2L11 12.3V7H12.5V11.4L17 13.9L16.3 15.2Z" /></svg></div>
            <div class="contact-text">Open | Fri-Sun | 8am-10pm</div>
          </div>
          <div class="info-container">
            <div class="contact-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>phone</title><path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"/></svg></div>
            <div class="contact-text">(123)-456-7890</div>
          </div>
        </div>
        <div class="form-container">
          <div class="form-title-container">
            <div class="message-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>email</title><path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" /></svg></div>
            <div class="form-title">Message Us</div>
          </div>
          <form class="contact-form">
            
            <div class="form-element-container">
              <label for="name">Full Name</label>
              <input type="text" id="name" name="name" placeholder="Your name" required>
            </div>

            <div class="form-element-container">
              <label for="email">Email</label>
              <input type="email" id="email" name="email" placeholder="you@example.com" required>
            </div>

            <div class="form-element-container">
              <label for="message">Message</label>
              <textarea id="message" name="message" rows="5" placeholder="Type your message..." required></textarea>
            </div>

            <button class="submit-btn" type="submit">Send Message</button>
          </form>
        </div>
      </div>
  `;

  page.innerHTML = "";
  page.appendChild(contactDiv);

  const submitButton = document.querySelector(".submit-btn");
  if (submitButton) {
    submitButton.addEventListener("click", function (event) {
      event.preventDefault();
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
    });
  } else {
    console.error("Submit button not found!");
  }
}
