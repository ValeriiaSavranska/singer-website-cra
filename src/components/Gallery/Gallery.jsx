import { useState, useEffect } from 'react';
import { IoIosArrowDropleftCircle } from 'react-icons/io';
import { IoIosArrowDroprightCircle } from 'react-icons/io';
// import singerPhoto1 from "../../images/home-photo.webp";
// import singerPhoto2 from "../../images/about-photo.webp";
// import singerPhoto3 from "../../images/Soprano-soloist.webp";
// import singerPhoto4 from "../../images/Fairytales-and-Ghost.webp";
import s from './Gallery.module.css';

const data = [
  // { ind: 0, img: singerPhoto1, text: "Some title" },
  // { ind: 1, img: singerPhoto2, text: "Some title" },
  // { ind: 2, img: singerPhoto3, text: "Some title" },
  // { ind: 3, img: singerPhoto4, text: "Some title" },
  {
    albumId: 1,
    id: 1,
    title: 'accusamus beatae ad facilis cum similique qui sunt',
    url: 'https://via.placeholder.com/600/92c952',
    thumbnailUrl: 'https://via.placeholder.com/150/92c952',
  },
  {
    albumId: 1,
    id: 2,
    title: 'reprehenderit est deserunt velit ipsam',
    url: 'https://via.placeholder.com/600/771796',
    thumbnailUrl: 'https://via.placeholder.com/150/771796',
  },
  {
    albumId: 1,
    id: 3,
    title: 'officia porro iure quia iusto qui ipsa ut modi',
    url: 'https://via.placeholder.com/600/24f355',
    thumbnailUrl: 'https://via.placeholder.com/150/24f355',
  },
  {
    albumId: 1,
    id: 4,
    title: 'culpa odio esse rerum omnis laboriosam voluptate repudiandae',
    url: 'https://via.placeholder.com/600/d32776',
    thumbnailUrl: 'https://via.placeholder.com/150/d32776',
  },
  {
    albumId: 1,
    id: 5,
    title: 'natus nisi omnis corporis facere molestiae rerum in',
    url: 'https://via.placeholder.com/600/f66b97',
    thumbnailUrl: 'https://via.placeholder.com/150/f66b97',
  },
  {
    albumId: 1,
    id: 6,
    title: 'accusamus ea aliquid et amet sequi nemo',
    url: 'https://via.placeholder.com/600/56a8c2',
    thumbnailUrl: 'https://via.placeholder.com/150/56a8c2',
  },
  {
    albumId: 1,
    id: 7,
    title: 'officia delectus consequatur vero aut veniam explicabo molestias',
    url: 'https://via.placeholder.com/600/b0f7cc',
    thumbnailUrl: 'https://via.placeholder.com/150/b0f7cc',
  },
  {
    albumId: 1,
    id: 8,
    title: 'aut porro officiis laborum odit ea laudantium corporis',
    url: 'https://via.placeholder.com/600/54176f',
    thumbnailUrl: 'https://via.placeholder.com/150/54176f',
  },
  {
    albumId: 1,
    id: 9,
    title: 'qui eius qui autem sed',
    url: 'https://via.placeholder.com/600/51aa97',
    thumbnailUrl: 'https://via.placeholder.com/150/51aa97',
  },
  {
    albumId: 1,
    id: 10,
    title: 'beatae et provident et ut vel',
    url: 'https://via.placeholder.com/600/810b14',
    thumbnailUrl: 'https://via.placeholder.com/150/810b14',
  },
];

const Gallery = () => {
  const slides = [...data];
  const lastInd = slides.length - 1;
  // const [slides, setSlides] = useState(data);
  const [curentSlideInd, setCurentSlideInd] = useState(0);
  const [btnLeftDisabled, settnLeftDisabled] = useState(0);
  const [btnRighttDisabled, setBtnRighttDisabled] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [orientation, setOrientation] = useState(
    window.innerWidth < window.innerHeight ? 'portrait' : 'landscape'
  );
  const [isModalShow, setIsModalShow] = useState(0);

  (function () {
    var throttle = function (type, name, obj) {
      obj = obj || window;
      var running = false;
      var func = function () {
        if (running) {
          return;
        }
        running = true;
        requestAnimationFrame(function () {
          obj.dispatchEvent(new CustomEvent(name));
          running = false;
        });
      };
      obj.addEventListener(type, func);
    };

    throttle('resize', 'optimizedResize');
  })();

  window.addEventListener('optimizedResize', function () {
    if (window.innerWidth < window.innerHeight) {
      setOrientation('portrait');
    } else {
      setOrientation('landscape');
    }

    setWindowWidth(window.innerWidth);
  });

  useEffect(() => {
    if (windowWidth >= 768 && curentSlideInd >= lastInd - 2) {
      setBtnRighttDisabled(1);
    } else if (windowWidth < 768 && curentSlideInd !== lastInd) {
      setBtnRighttDisabled(0);
    }
  }, [orientation, windowWidth, curentSlideInd, lastInd]);

  useEffect(
    effect => {
      if (curentSlideInd <= 0) {
        // setCurentSlideInd(lastInd);
        settnLeftDisabled(1);
      } else {
        settnLeftDisabled(0);
      }
      if (
        curentSlideInd >= lastInd ||
        (windowWidth >= 768 && curentSlideInd >= lastInd - 2)
      ) {
        // setCurentSlideInd(0);
        setBtnRighttDisabled(1);
      } else {
        setBtnRighttDisabled(0);
      }
    },
    [curentSlideInd, lastInd, windowWidth]
  );

  return (
    <section className={s.section}>
      <h2 className={s.title}>Gallery</h2>
      {/* <p>CURENT SLIDE: {curentSlideInd}</p> */}
      <div className={s.wrap}>
        <button
          disabled={btnLeftDisabled}
          className={s.btn}
          type="button"
          onClick={() => setCurentSlideInd(prevState => prevState - 1)}
        >
          <IoIosArrowDropleftCircle size={40} />
        </button>
        <div className={s.sectionCenter}>
          {data.map((slide, index) => {
            // const { ind, img, text } = slide;
            const { id, title, url } = slide;
            let position = 'nextSlide';
            if (index === curentSlideInd) {
              position = 'activeSlide';
            }

            if (
              index === curentSlideInd - 1 ||
              (curentSlideInd === 0 && index === slides.length - 1)
            ) {
              position = 'lastSlide';
            }
            return (
              <div
                className={[s.slide, s[position]].join(' ')}
                key={id}
                style={{
                  transform: `translateX(${
                    index * 100 - curentSlideInd * 100
                  }%)`,
                }}
              >
                {/* <p>{ind}</p> */}
                <div className={s.imgWrap}>
                  <img src={url} alt={title} />
                </div>
              </div>
            );
          })}
        </div>
        <button
          disabled={btnRighttDisabled}
          className={s.btn}
          type="button"
          onClick={() => setCurentSlideInd(prevState => prevState + 1)}
        >
          <IoIosArrowDroprightCircle size={40} />
        </button>
      </div>

      {/* <div
        className={
          isModalShow
            ? [s.modalBackdrop, s.modalActive].join(' ')
            : [s.modalBackdrop]
        }
      >
        <div className={s.modal}>
          <div className={s.wrapImgModal}>
            <button
              disabled={btnLeftDisabled}
              className={[s.btn, s.btnModal, s.btnModalPrev].join(' ')}
              type="button"
              onClick={() => setCurentSlideInd(prevState => prevState - 1)}
            >
              <IoIosArrowDropleftCircle size={50} />
            </button>
            <img
              className={s.modalImg}
              src={slides[curentSlideInd].url}
              alt={slides[curentSlideInd].title}
            />
            <button
              disabled={btnRighttDisabled}
              className={[s.btn, s.btnModal, s.btnModalNext].join(' ')}
              type="button"
              onClick={() => setCurentSlideInd(prevState => prevState + 1)}
            >
              <IoIosArrowDroprightCircle size={50} />
            </button>
          </div>
          <p className={s.modalTitle}>{slides[curentSlideInd].title}</p>
        </div>
        <button className={s.btnClose} type="button">
          X
        </button>
      </div> */}
    </section>
  );
};

export default Gallery;
