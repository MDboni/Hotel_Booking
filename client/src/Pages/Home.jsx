
import ExclusiveOffers from '../components/ExclusiveOffers'
import FeaturedDestination from '../components/FeaturedDestination'
import Footerr from '../components/Footer'
import Hero from '../components/Hero'
import NewsLater from '../components/NewsLater'
import Testimonial from '../components/Testimonial'


const Home = () => {
  return (
    <>
        <Hero/>
        <FeaturedDestination/>
        <ExclusiveOffers/>
        <Testimonial/>
        <NewsLater/>
        <Footerr/>
    </>
  )
}

export default Home