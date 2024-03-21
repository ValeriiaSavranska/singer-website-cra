import { Link } from "react-router-dom";
import singerPhoto from "../../images/home-photo.webp";
import singerPhotoDesktop from "../../images/home-photo-desktop.webp";
import s from "./Home.module.css";

const Home = () => {
  return (
    <section className={s.home}>
      <picture className={s.picture}>
        <source srcSet={singerPhotoDesktop} media="(min-width: 768px)" />
        <img src={singerPhoto} alt="singer" className={s.homeImg} />
      </picture>

      <div className={s.wrap}>
        <p className={s.text}>
          Soprano Victoria Harley is a 2024 Artist on the Serena Fenwick
          Programme with British Youth Opera. She is the 2023 recipient of the
          St Clare Barfield Rosebowl for Operatic Distinction.
        </p>
        <Link to="/about" className={s.button}>
          Read more
        </Link>
      </div>
    </section>
  );
};

export default Home;
