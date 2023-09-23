import { useState, useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';
import { Navbar, Sidebar } from './components';
import BlogScreen from './pages/BlogScreen';
import Signin from './pages/Auth/Signin.jsx';
import PostScreen from './pages/PostScreen';
import VideoScreen from './pages/VideoScreen';
import CreateBlog from './components/Blogs/Post/CreateBlog.jsx';
import HomeScreen from './pages/HomeScreen';
import QNA from './pages/QNA';
import { useDispatch, useSelector } from 'react-redux';
import DashboardScreen from './pages/DashboardScreen';
import BlogsList from './pages/BlogsList';
import PostsList from './pages/PostsList';
import WorkList from './pages/WorkList';
import ServerPopup from './components/server/ServerPopup';
import PostListPopup from './components/Posts/postlist/PostListPopup';
import BlogListPopup from './components/Blogs/bloglist/BlogListPopup';
import WorkPopup from './components/Work/WorkPopup';
import Projects from './pages/Projects';
import DevModal from './components/Dev/DevModal';
import BookSessionPopup from './components/Book/BookSessionPopup';
import Opening from './pages/Opening';
import Team from './components/Service/Team';
import Contact from './components/Contact/Contact';
import Reviews from './components/Client/Reviews';
import BlogModal from './pages/BlogModal';
import BlogDetails from './components/Blogs/BlogDetails';

const App = () => {
  const {
    serverPopup,
    postModal,
    blogModal,
    workModal,
    devModal,
    bookSessionModal,
    emailUsModal,
    aboutUsModal,
    ourWorkModal,
    ourTeamModal,
    contactUsModal,
    ourReviews,
    blog,
    blogDetails,
    selectedBlog
  } = useSelector(state => state.auth);
  const location = useLocation()
  const { pathname } = location;
  const [activeNav, setActiveNav] = useState(false);
  console.log(blogDetails)

  return (
  <div className="relative flex-1 flex flex-col text-text bg-bg_cl align-center justify-center font-sans">
    <Navbar pathname={pathname} setActiveNav={setActiveNav} activeNav={activeNav} />
      <div className={`sm:w-full self-center flex w-full`}>
        {pathname !== '/' && (
          <>
          {activeNav && (
            <div className={`${activeNav && "absolute z-[9999]"} sm:hidden text-text px-4 min-w-[50px] sm:min-w[100px] justify-center md:flex animate-slideleft duration-200`}>
              <Sidebar />
            </div>
          )}
            <div className={`text-text min-w-[280px] sm:min-w[100px] justify-center md:flex animate-slideleft hidden  bg-bg_alt`}>
              <Sidebar />
            </div>
          </>
        )}
          <div className={`w-full h-[calc(100vh)] ${pathname == '/dsfs' || pathname == '/signin' || pathname == '/signup'? "overflow-hidden" : "overflow-y-scroll"
          } flex xl:flex-row flex-reverse`} >
            <div className="flex-1">
              <Routes>
                <Route path="/home" element={<BlogScreen />} />
                <Route path="/blogs" element={<BlogScreen />} />
                <Route path="/dashboard" element={<DashboardScreen />} />
                <Route path="/dev" element={<DashboardScreen />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/" element={<HomeScreen />} />
                <Route path="/blogs/newblog" element={<CreateBlog />} />
                <Route path="/posts" element={<PostScreen />} />
                <Route path="/qna" element={<QNA />} />
                <Route path="/opening" element={<Opening />} />
                <Route path="/posts-list" element={<PostsList />} />
                <Route path="/blogs-list" element={<BlogsList />} />
                <Route path="/work-list" element={<WorkList />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/videos" element={<VideoScreen />} />
              </Routes>
            </div>
          </div>
      </div>
    {serverPopup && (<ServerPopup />)}
    {postModal && (<PostListPopup />)}
    {blogModal && (<BlogListPopup />)}
    {workModal && (<WorkPopup />)}
    {devModal && (<DevModal />)}
    {bookSessionModal && (<BookSessionPopup />)}
    {/* {emailUsModal && (<Contact />)} */}
    {/* {aboutUsModal && (< />)} */}
    {/* {ourWorkModal && (<Reviews />)} */}
    {ourReviews && (<Reviews />)}
    {ourTeamModal && (<Team />)}
    {contactUsModal && (<Contact />)}
    {blog && (<BlogModal />)}
    {blogDetails && (<BlogDetails />)}
</div>
  )
}
export default App;
