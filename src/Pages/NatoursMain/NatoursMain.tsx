import { Features } from '../../components/Features/Features';
import { NatoursAbout } from '../../components/NatoursAbout/NatoursAbout';
import { StoriesSection } from '../../components/StoriesSection/StoriesSection';
import { Tours } from '../../components/Tours/Tours';

export const NatoursMain = () => {
  return (
    <main>
      <NatoursAbout />
      <Features />
      <Tours />
      <StoriesSection />
    </main>
  );
};
