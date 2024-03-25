import { Link } from 'react-router-dom';
import cv from '../../files/cv.pdf';
import pdfSvg from '../../images/pdf-svgrepo-com.svg';
import s from './Footer.module.css';

const Footer = () => {
  const date = new Date();

  return (
    <footer className={s.footer}>
      <div className={s.wrap}>
        <div className={s.info}>
          <p className={s.name}>Singer's Name</p>
          <Link to="/">website address</Link>
          <p>&#169;{date.getFullYear()} by Valleriia Savranska.</p>
        </div>
        <div className={s.cvWrap}>
          {/* <a href="/images/css_in_ua_image.jpg" download></a> */}
          <a
            href={cv}
            target="_blank"
            title="CV .pdf"
            rel="noreferrer"
            className={s.cv}
          >
            <img src={pdfSvg} alt="" width={80} className={s.cvImg} />
            <p>CV.pdf</p>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
