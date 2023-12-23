import AddedMovies from "../AddedMovies/AddedMovies";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import Rated from "../Rated/Rated";
import Upcoming from "../Upcoming/Upcoming";
import Watch from "../Watch/Watch";
import WatchList from "../WatchList/WatchList";

const Home = () => {
  return (
    <div>
      <Hero />
      <Upcoming/>
      <Watch/>
      <Rated/>
      <WatchList/>
      <AddedMovies/>
      <Footer/>
    </div>
  );
};

export default Home;
