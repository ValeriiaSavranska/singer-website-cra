import singerPhoto from '../../images/upcoming-events-photo.jpg';
import fairytalesAndGhost from '../../images/Fairytales-and-Ghost.webp';
import MassenetCendrillon from '../../images/Massenet-Cendrillon.webp';
import sopranoSoloist from '../../images/Soprano-soloist.webp';
import s from './UpcomingEvents.module.css';

const UpcomingEvents = () => {
  return (
    <section>
      <div className={s.tumb}>
        <img className={s.hero} src={singerPhoto} alt="singer" />
      </div>
      <h2 className={s.title}>Upcoming Events</h2>
      <ul className={s.list}>
        <li className={s.item}>
          <img src={fairytalesAndGhost} alt="" width={200} />
          <a href="." className={s.link}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            accusantium id veritatis ab commodi!
          </a>
        </li>
        <li className={s.item}>
          <img src={MassenetCendrillon} alt="" width={200} />
          <a href="." className={s.link}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </a>
        </li>
        <li className={s.item}>
          <img src={sopranoSoloist} alt="" width={200} />
          <a href="." className={s.link}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. A id
            voluptas eos. Saepe id, odio eius porro itaque deleniti in cum enim!
          </a>
        </li>
      </ul>
    </section>
  );
};

export default UpcomingEvents;
