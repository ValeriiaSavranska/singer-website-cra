import singerPhoto from "../../images/about-photo.webp";
import s from "./About.module.css";

const About = () => {
  return (
    <div className={s.container}>
      <img
        src={singerPhoto}
        alt="singer"
        // width={280}
        // height={280}
        className={s.img}
      />
      <h2 className={s.name}>ABOUT VICTORIA</h2>
      <div className={s.wrap}>
        <p>
          Victoria Harley is a soprano from Filey, North Yorkshire, currently
          based in Birmingham and studying with Amanda Roocroft. She is a 2024
          Artist on the Serena Fenwick Programme with British Youth Opera. She
          was the 2023 recipient of the St Clare Barfield Rosebowl for Operatic
          Distinction.
        </p>
        <p>
          In September 2023 she performed the role of La Fée in Massenet's
          Cendrillon (performed in English) with Bedfordshire Youth Opera. She
          was especially grateful for the opportunity to work with Rachel
          Nicholls, who was the production's vocal coach. In March 2024 she will
          performing the role of Noémie in Massenet's Cendrillon (performed in
          French) at the Royal Birmingham Conservatoire conducted by Paul
          Wingfield and directed by Matthew Eberhardt. She recently performed
          the title role in Janáček’s The Cunning Little Vixen (performed in
          English) in RBC’s 2023 Spring Opera. Other operatic roles at RBC
          include Noémie (Cendrillon, Massenet) and Nance Ferrell (Banished,
          Stephen McNeff), and roles performed in RBC Opera Scenes include
          Vanessa (Vanessa, Barber), The Governess (The Turn of the Screw,
          Britten), Irma (Louise, Charpentier - covered and performed),
          Fiorlidigi (Così Fan Tutte), Marcellina (Le Nozze de Figaro), and Una
          Conversa (Suor Angelica, Puccini – covered and performed). She has
          also performed the role of Musetta (La Bohème, Puccini) with City of
          Manchester Opera. In March 2024 she will make her Oratorio debut as
          the soprano soloist in Brahms' Ein deutsches Requiem and Beethoven's
          Christus am Ölberge with Bury Choral Society, conducted by Juan Ortuño
          (both performed in English).
        </p>
        <p>
          Victoria is passionate about contemporary opera, and debuted the role
          of Helena Handcart in the premiere of Roger Simmonds' Fame and Envy
          with Oxfordshire Contemporary Opera, directed by Callie Nestlewroth
          (June 2023). She has also collaborated with several composers at the
          Royal Birmingham Conservatoire, performing the role of the Mother in a
          scene from Isabella Ennes' The Letter From Under the Door. She also
          performed a chorus role (Tum-Tum) in the premiere of Philip Matty’s
          chamber opera The Jabberwocky, and Peter Bell and Alexander
          Kaniewski’s outdoor folklore and music project A Book of Portraits, in
          which the role of ‘The Lover’ was written for her.
        </p>
        <p>
          At RBC, she has sung in masterclasses with Della Jones, Jacques
          Imbrailo an Susan Bickley. She has also sung with Dylan Perez in the
          yearly Voxbox concert at RBC. Victoria was recently invited to sing in
          a masterclass at the North Wales Opera Studio with James Black. At
          NWOS she was also asked to stand in last minute to sing excerpts from
          The Enchanted Pig, Così Fan Tutte, Die Zauberflöte, Le Nozze de Figaro
          and La Bohème in a Gala Concert.
        </p>
        <p>
          Victoria recently won second place in the Ashleyan Opera Prize (2023)
          and was a prize winner in the Edward Brooks Lieder Prize (2022).
        </p>
        <p>
          Before attending Royal Birmingham Conservatoire, Victoria studied
          Music at the University of Huddersfield and a Masters in Musicology at
          the University of Manchester. While living in Manchester, she sang
          with the Manchester Chamber Choir and Halle Choir. A highlight of her
          time with the Halle Choir was singing at the BBC Proms in 2018. She
          also recently attended a short course at the National Opera Studio
          (2022).
        </p>
        <p>
          Outside of opera, Victoria has been performing with metal bands since
          2015 and has toured the UK and Europe with several bands. Most
          recently she was the operatic vocalist with Necronautical and recorded
          an album with them, as well as touring and performing at some of the
          largest metal festivals in the UK.
        </p>
      </div>
    </div>
  );
};
export default About;
