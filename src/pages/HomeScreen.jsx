import Landing from '../components/Landing/Landing';
import Footer from '../components/Footer';

const HomeScreen = ({homeScreen}) => {

  return (
    <div className="flex flex-col items-center overflow-hidden">
      <Landing />
      <Footer />
    </div>
  )
}

export default HomeScreen
