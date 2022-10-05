import { Booking } from '../../components/Booking/Booking';
import { Features } from '../../components/Features/Features';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import { NatoursAbout } from '../../components/NatoursAbout/NatoursAbout';
import { Navigation } from '../../components/Navigation/Navigation';
import { StoriesSection } from '../../components/StoriesSection/StoriesSection';
import { Tours } from '../../components/Tours/Tours';

export const Natours = () => {
  return (
    <>
      <Navigation />
      <Header />
      <main>
        <NatoursAbout />
        <Features />
        <Tours />
        <StoriesSection />
        <Booking />
      </main>
      <Footer />
    </>
  );
};
