import { useState, useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';
import { Navbar, Sidebar } from './components';
import BlogScreen from './pages/BlogScreen';
import Signin from './pages/Auth/Signin.jsx';
import HomeScreen from './pages/HomeScreen';
import BlogsList from './pages/BlogsList';
import BlogListPopup from './components/Blogs/bloglist/BlogListPopup';
import WorkPopup from './components/Work/WorkPopup';
import Projects from './pages/Projects';
import Team from './components/Service/Team';
import Contact from './components/Contact/Contact';
import Reviews from './components/Client/Reviews';
import BlogModal from './pages/BlogModal';
import BlogDetails from './components/Blogs/BlogDetails';
import { useSelector } from 'react-redux';
import PortfolioScreen from './pages/PortfolioScreen';
import Aboutme from './pages/Aboutme';

const App = () => {
  const {
    blogModal,
    workModal,
    ourTeamModal,
    contactUsModal,
    ourReviews,
    blog,
    blogDetails,
    selectedBlog,
    portfolioModal,
    aboutMeModal,
  } = useSelector(state => state.auth);
  const location = useLocation()
  const { pathname } = location;
  const [activeNav, setActiveNav] = useState(false);
  return (
  <div className="relative flex-1 flex flex-col text-text bg-bg_cl align-center justify-center font-sans">
    <Navbar pathname={pathname} setActiveNav={setActiveNav} activeNav={activeNav} />
      <div className={`sm:w-full self-center flex w-full`}>
          <div className={`w-full h-[calc(100vh)] ${pathname == '/' || pathname == '/signin' || pathname == '/signup'? "md:overflow-hidden" : "overflow-y-scroll"
          } flex xl:flex-row flex-reverse`} >
            <div className="flex-1">
              <Routes>
                <Route path="/home" element={<BlogScreen />} />
                <Route path="/blogs" element={<BlogScreen />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/" element={<HomeScreen />} />
                <Route path="/blogs-list" element={<BlogsList />} />
                <Route path="/projects" element={<Projects />} />
              </Routes>
            </div>
          </div>
      </div>
    {aboutMeModal && (<Aboutme />)}
    {blogModal && (<BlogListPopup />)}
    {workModal && (<WorkPopup />)}
    {ourReviews && (<Reviews />)}
    {ourTeamModal && (<Team />)}
    {contactUsModal && (<Contact />)}
    {blog && (<BlogModal />)}
    {blogDetails && (<BlogDetails />)}
    {portfolioModal && (<PortfolioScreen />)}
</div>
  )
}
export default App;
