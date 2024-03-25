import s from './Listen.module.css';

const Listen = () => {
  return (
    <section className={s.listen}>
      <h2 className={s.title}>Listen</h2>
      <div className={s.wrap}>
        <div>
          <div className={s.video}>
            <iframe
              src="https://www.youtube.com/embed/mBtUd5LAUIo?list=PLrjWSfvuxpvcwx0mZHaAT5fI1Eounwmp3"
              title="Фоновая музыка без авторских прав | Chill Downtempo"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <p className={s.videoDescr}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos,
            nostrum?
          </p>
          <p className={s.videoDescr}>Pianist: --</p>
        </div>
        <div>
          <div className={s.video}>
            <iframe
              src="https://www.youtube.com/embed/mBtUd5LAUIo?list=PLrjWSfvuxpvcwx0mZHaAT5fI1Eounwmp3"
              title="Фоновая музыка без авторских прав | Chill Downtempo"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <p className={s.videoDescr}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos,
            nostrum?
          </p>
          <p className={s.videoDescr}>Pianist: --</p>
        </div>
      </div>
    </section>
  );
};

export default Listen;
