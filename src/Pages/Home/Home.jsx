import Index from '../../Sparkles';
import { MeetTheTeam } from '../About/MeetTheTeam';
import Contact from '../Contact/Contact';
import OurServices from '../Services/OurServices';
import Banner from './Banner';
import Blog from './Blog';
import OurClients from './OurClients';
// import ReviewVideos from './ReviewVideos';
import Technologies from './Technologies';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>          
            <Index></Index>
            <Banner></Banner>
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