import { Link } from 'react-router-dom';
import singerPhoto from '../../images/home-photo-desktop.jpg';
import singerPhotoDesktop from '../../images/home-photo-desktop.jpg';
import s from './Home.module.css';

const Home = () => {
  return (
    <section className={s.home}>
      <picture className={s.picture}>
        <source srcSet={singerPhotoDesktop} media="(min-width: 768px)" />
        <img src={singerPhoto} alt="singer" className={s.homeImg} />
      </picture>

      <div className={s.wrap}>
        <p className={s.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
          mollitia error cum, ullam veritatis eum aut esse enim, nostrum veniam
          laudantium adipisci temporibus doloribus labore delectus impedit
          commodi consectetur praesentium.
        </p>
        <Link to="/about" className={s.button}>
          Read more
        </Link>
      </div>
    </section>
  );
};

export default Home;
