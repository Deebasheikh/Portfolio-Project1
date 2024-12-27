// const Contact = () => {
//   return (
// <div  className="contact-section py-5">
//     <div className="contact">
//         <h2>Contact Me</h2>
//         <form id="contactForm">
//           <div className="form-group">
//             <input
//               type="text"
//               className="form-control"
//               id="name"
//               placeholder="Your Name"
//               required
//             />
//           </div>
//           <div className="form-group">
//             <input
//               type="email"
//               className="form-control"
//               id="email"
//               placeholder="Your Email"
//               required
//             />
//           </div>
//           <div className="form-group">
//             <textarea
//               className="form-control"
//               id="message"
//               placeholder="Your Message"
//               rows={4}
//               required
//             ></textarea>
//             <button type="submit" className="btn btn-primary">Send Message</button>
//             </div>
//         </form>
//     </div>
// </div>
//   );
// };

// export default Contact;

'use client';

const Contact = () => {
  return (
    <div className="contact-section">
      <div className="contact">
        <h1>Contact Me</h1>
        <p>Feel free to reach out by filling the form below.</p>
        <form>
          <div className="form-group">
            <input type="text" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <textarea rows={4} placeholder="Your Message" required></textarea>
          </div>
          <button type="submit" className="btn">
            Send Message
          </button>
        </form>
        <div className="alternative-contact">
          <p>Or email me directly at:</p>
          <a href="mailto:areebasheikh27.as@gmail.com" className="email-link">
            areebasheikh27.as@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
