import s from "./Listen.module.css";

const Listen = () => {
  return (
    <div className={s.listen}>
      <h2 className={s.title}>Listen</h2>
      <div className={s.wrap}>
        <div>
          <div className={s.video}>
            <iframe
              src="https://www.youtube.com/embed/xJs2HDluvTI"
              title="Handel - &#39;Furie terribili&#39; from Rinaldo"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <p className={s.videoDescr}>
            Recorded at The North Wales Opera Studio, December 2022.{" "}
          </p>
          <p className={s.videoDescr}>Pianist: John Moore</p>
        </div>
        <div>
          <div className={s.video}>
            <iframe
              src="https://www.youtube.com/embed/xJs2HDluvTI"
              title="Handel - &#39;Furie terribili&#39; from Rinaldo"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <p className={s.videoDescr}>
            Recorded at The North Wales Opera Studio, December 2022.{" "}
          </p>
          <p className={s.videoDescr}>Pianist: John Moore</p>
        </div>
      </div>
    </div>
  );
};

export default Listen;
