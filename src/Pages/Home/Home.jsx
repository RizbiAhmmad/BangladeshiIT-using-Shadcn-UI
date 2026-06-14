import { useEffect, useState } from "react";
import { default as SparklesIndex } from '../../Sparkles';
import { MeetTheTeam } from '../About/MeetTheTeam';
import Contact from '../Contact/Contact';
import OurServices from '../Services/OurServices';
import Blog from './Blog';
import OurClients from './OurClients';
// import ReviewVideos from './ReviewVideos';
import Technologies from './Technologies';
import Testimonial from './Testimonial';
import VideoGallery from './VideoGallery';
import PopupOnLoad from '../../components/PopupOnLoad';
import ScrollToTop from '../../components/ScrollToTop';
import { updateMetaTags } from '../../utils/seoUtils';

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Set SEO tags for home page
    updateMetaTags({
      title: "Bangladeshi IT - Web Development & E-commerce Solutions",
      description: "Professional web development, e-commerce, and digital marketing services in Bangladesh. Expert team delivering custom solutions for your business.",
      image: "https://bangladeshiit.com/og-image.png",
      url: "https://bangladeshiit.com",
      type: "website"
    });
    setShowPopup(true);
  }, []);

  return (
    <div>
      {showPopup && <PopupOnLoad />}
      <ScrollToTop />
      <SparklesIndex />
      {/* <Banner></Banner> */}
      <VideoGallery></VideoGallery>
      <OurServices></OurServices>
      <Technologies></Technologies>
      <MeetTheTeam></MeetTheTeam>
      <Testimonial></Testimonial>
      {/* <ReviewVideos></ReviewVideos> */}
      <OurClients></OurClients>
      <Blog></Blog>
      <Contact></Contact>
    </div>
  );
};

export default Home;