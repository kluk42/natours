import { Features } from '../../components/Features/Features';
import { NatoursAbout } from '../../components/NatoursAbout/NatoursAbout';
import { Tours } from '../../components/Tours/Tours';

export const NatoursMain = () => {
  return (
    <main>
      <NatoursAbout />
      <Features />
      <Tours />
    </main>
  );
};
