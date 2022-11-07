import { NavigationLinks } from '../Navigation/Navigation';
import { TextButton } from '../TextButton/TextButton';
import { Composition } from './Composition';
import './NatoursAbout.scss';

export const NatoursAbout = () => {
  return (
    <section id={NavigationLinks.About} className="section-about">
      <h2 className="heading-secondary section-about__header">
        Exciting tours for adventurous people
      </h2>
      <div className="section-about__text">
        <h3 className="heading-tertiary section-about__paragraph-heading">
          You&apos;re going to fall in love with nature
        </h3>
        <p className="paragraph">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos explicabo quibusdam
          excepturi sit placeat error voluptatum itaque, labore quis autem laborum qui, veritatis
          ipsam optio sint culpa laboriosam laudantium debitis!
        </p>

        <h3 className="heading-tertiary section-about__paragraph-heading">
          Live adventures like you&apos;ve never had before
        </h3>
        <p className="paragraph">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium cumque totam libero
          accusantium rerum facilis eius in laborum debitis. Rerum non in quidem qui eveniet itaque
          vel quibusdam modi sed.
        </p>

        <TextButton title="Learn more &rarr;" />
      </div>
      <div className="section-about__composition">
        <Composition />
      </div>
    </section>
  );
};
