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

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setShowPopup(true);
  }, []);

  return (
    <div>
      {showPopup && <PopupOnLoad />}
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