import pdfSvg from "../../images/pdf-svgrepo-com.svg";
import s from "./Footer.module.css";

const Footer = () => {
  const date = new Date();

  return (
    <footer className={s.footer}>
      <div className={s.wrap}>
        <div className={s.info}>
          <p className={s.name}>Victoria Harley</p>
          <a href=".">www.victoriaharleysoprano.com</a>
          <p>&#169;{date.getFullYear()} by Valleriia Savranska.</p>
        </div>
        <div className={s.cvWrap}>
          {/* <a href="/images/css_in_ua_image.jpg" download></a> */}
          <a
            href="https://www.victoriaharleysoprano.com/_files/ugd/143ad0_85ff9a330f94441c8d8a47eb41d4ebbb.pdf"
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
