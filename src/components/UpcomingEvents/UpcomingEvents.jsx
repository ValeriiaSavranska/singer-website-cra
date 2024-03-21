import singerPhoto from "../../images/upcoming-events-photo.webp";
import fairytalesAndGhost from "../../images/Fairytales-and-Ghost.webp";
import MassenetCendrillon from "../../images/Massenet-Cendrillon.webp";
import sopranoSoloist from "../../images/Soprano-soloist.webp";
import s from "./UpcomingEvents.module.css";

const UpcomingEvents = () => {
  return (
    <div>
      <div className={s.tumb}>
        <img className={s.hero} src={singerPhoto} alt="singer" />
      </div>
      <h2 className={s.title}>Upcoming Events</h2>
      <ul className={s.list}>
        <li className={s.item}>
          <img src={fairytalesAndGhost} alt="" width={200} />
          <a href="." className={s.link}>
            Fairytales and Ghost Stories Lunchtime Recital at Royal Birmingham
            Conservatoire
          </a>
        </li>
        <li className={s.item}>
          <img src={MassenetCendrillon} alt="" width={200} />
          <a href="." className={s.link}>
            Massenet's Cendrillon at the Royal Birmingham Conservatoire
          </a>
        </li>
        <li className={s.item}>
          <img src={sopranoSoloist} alt="" width={200} />
          <a href="." className={s.link}>
            Soprano soloist in Brahms' Ein deutsches Requiem and Beethoven's
            Christus am Ölberge with Bury Choral Society, conducted by Juan
            Ortuño (both performed in English).
          </a>
        </li>
      </ul>
    </div>
  );
};

export default UpcomingEvents;
