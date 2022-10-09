import firstStoryImgPath from '../../assets/nat-8.jpg';
import secondImgPath from '../../assets/nat-9.jpg';
import bgMp4VideoPath from '../../assets/video.mp4';
import bgWebmVideoPath from '../../assets/video.webm';
import { TextButton } from '../TextButton/TextButton';

import '../../sass/base/_typography.scss';
import { BgVideo, Video } from '../BgVideo/BgVideo';
import { NavigationLinks } from '../Navigation/Navigation';
import './StoriesSection.scss';

export const StoriesSection = () => {
  const videos: Video[] = [
    { src: bgMp4VideoPath, type: 'video/mp4' },
    { src: bgWebmVideoPath, type: 'video/webm' },
  ];
  return (
    <section id={NavigationLinks.Stories} className="stories-section">
      <div className="bg-video">
        <BgVideo videos={videos} />
      </div>
      <h2 className="heading-secondary stories-section__heading">We make people genuinely happy</h2>
      <div className="stories-section__stories-container">
        <div className="story">
          <figure className="story__shape">
            <img src={firstStoryImgPath} alt="Person on a tour" className="story__image" />
            <figcaption className="story__caption">Mary Smith</figcaption>
          </figure>
          <div className="story__text">
            <h3 className="heading-tertiary story__story-heading">
              I had the best week with my family ever!
            </h3>
            <p className="story__smth">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut libero perferendis
              deleniti saepe eius ab, magni numquam magnam odit laborum velit enim accusamus debitis
              molestias quaerat quam dolorem perspiciatis repudiandae. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Sunt fuga corporis obcaecati fugit, eveniet repellendus
              a, reprehenderit nisi, iure provident maiores deserunt quis vel! Itaque suscipit ipsam
              dignissimos ipsum eos.
            </p>
          </div>
        </div>
        <div className="story">
          <figure className="story__shape">
            <img src={secondImgPath} alt="Person on a tour" className="story__image" />
            <figcaption className="story__caption">Nikita Nemykin</figcaption>
          </figure>
          <div className="story__text">
            <h3 className="heading-tertiary story__story-heading">WOW it&apos;s so neat!</h3>
            <p className="story__smth">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut libero perferendis
              deleniti saepe eius ab, magni numquam magnam odit laborum velit enim accusamus debitis
              molestias quaerat quam dolorem perspiciatis repudiandae. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Sunt fuga corporis obcaecati fugit, eveniet repellendus
              a, reprehenderit nisi, iure provident maiores deserunt quis vel! Itaque suscipit ipsam
              dignissimos ipsum eos.
            </p>
          </div>
        </div>
      </div>
      <TextButton className="stories-section__more-btn" title="Read all stories &rarr;" />
    </section>
  );
};
