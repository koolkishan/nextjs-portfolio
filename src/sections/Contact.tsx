import Button from "@/components/Button";
import React from "react";

function Contact() {
  return (
    <div className="contact" id="contact">
      <h2 className="contact-title">What's Next?</h2>
      <h2 className="contact-sub-title">Get In Touch</h2>
      <p className="contact-text">
        Although I’m not currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I’ll
        try my best to get back to you!
      </p>
      <div className="contact-cta">
        <Button link="mailto:kishansheth21@gmail.com" text="Say Hello" />
      </div>
    </div>
  );
}

export default Contact;
