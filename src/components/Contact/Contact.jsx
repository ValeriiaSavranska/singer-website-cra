import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import s from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={s.container}>
      <div className={s.wrap}>
        <h2 className={s.title}>Contact me</h2>
        <div className={s.contact}>
          <div className={s.email}>
            <p>Email</p>
            <a href="mailto:">victoria_harley@outlook.com</a>
          </div>
          <div className={s.social}>
            <p>Social Media</p>
            <div className={s.socialwrap}>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={30} />
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <FaFacebookF size={30} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
