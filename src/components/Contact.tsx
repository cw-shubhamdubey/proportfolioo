import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:example@mail.com" data-cursor="disable">
                kokolele540@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+919920782622" data-cursor="disable">
                +91 99394651**
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <cw-shubhamdubey />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <NOT AVAILABLE />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Twitter <NOT AVAILABLE />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <shub.hd08 />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>SHUBHAM DUBEY</span>
            </h2>
            <h5>
              <SHUBHAM /> 2025
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
