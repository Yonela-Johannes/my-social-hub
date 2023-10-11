import { useState, lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Navbar } from "./components";
import { MutatingDots } from "react-loader-spinner";
import WorkPopup from "./components/Work/WorkPopup";
import Team from "./components/Service/Team";
import Contact from "./components/Contact/Contact";
import Reviews from "./components/Client/Reviews";
import BlogDetails from "./components/Blogs/BlogDetails";
import { useSelector } from "react-redux";
import PortfolioScreen from "./pages/PortfolioScreen";
import Aboutme from "./pages/Aboutme";
import PostDetails from "./components/Posts/PostDetails";
import PostListPopup from "./components/Posts/post/PostListPopup";
import StoryListPopup from "./components/video/StorylistPopup";
import VideoDetailsScreen from "./pages/VideoDetailsScreen";
const Signin = lazy(() => import("./pages/Auth/Signin.jsx"));

const HomeScreen = lazy(() => import("./pages/HomeScreen"));
const BlogScreen = lazy(() => import("./pages/BlogScreen"));
const PostScreen = lazy(() => import("./pages/PostScreen"));
const StoriesScreen = lazy(() => import("./pages/StoriesScreen"));
const BlogDetailsScreen = lazy(() =>
  import("./components/Blogs/BlogDetailsScreen")
);
const BlogList = lazy(() => import("./pages/BlogsList"));
const BlogListPopup = lazy(() =>
  import("./components/Blogs/bloglist/BlogListPopup")
);
const Projects = lazy(() => import("./pages/Projects"));

const Loader = () => {
  return (
    <MutatingDots
      height="100"
      width="100"
      color="#4fa94d"
      secondaryColor="#4fa94d"
      radius="12.5"
      ariaLabel="mutating-dots-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
};
const App = () => {
  const {
    workModal,
    ourTeamModal,
    contactUsModal,
    ourReviews,
    blogDetails,
    postDetails,
    portfolioModal,
    aboutMeModal,
  } = useSelector((state) => state.auth);
  const location = useLocation();
  const { pathname } = location;
  const [activeNav, setActiveNav] = useState(false);
  return (
    <div className="flex-1 flex flex-col text-text bg-bg_cl align-center justify-center font-sans">
      <div className="absolute lg:static z-30 bg-red w-full bottom-0 left-0 right-0">
        <Navbar
          pathname={pathname}
          setActiveNav={setActiveNav}
          activeNav={activeNav}
        />
      </div>
      <div className={`sm:w-full self-center flex w-full`}>
        <div
          className={`w-full h-[calc(100vh)] ${
            pathname == "/signin" || pathname == "/signup"
              ? "md:overflow-hidden"
              : "overflow-y-scroll"
          } flex xl:flex-row flex-reverse`}
        >
          <div className="flex-1">
            <Routes>
              <Route
                path="/signin"
                element={
                  <Suspense fallback={Loader()}>
                    <Signin />
                  </Suspense>
                }
              />
              <Route
                path="/"
                element={
                  <Suspense fallback={Loader()}>
                    <HomeScreen />
                  </Suspense>
                }
              />
              <Route
                path="/blogs"
                element={
                  <Suspense fallback={Loader()}>
                    <BlogScreen />
                  </Suspense>
                }
              />
              <Route
                path="/timeline"
                element={
                  <Suspense fallback={Loader()}>
                    <PostScreen />
                  </Suspense>
                }
              />
              <Route
                path="/stories"
                element={
                  <Suspense fallback={Loader()}>
                    <StoriesScreen />
                  </Suspense>
                }
              />
              <Route
                path="/blogs/:id"
                element={
                  <Suspense fallback={Loader()}>
                    <BlogDetailsScreen />
                  </Suspense>
                }
              />
              <Route
                path="/details/:id"
                element={
                  <Suspense fallback={Loader()}>
                    <VideoDetailsScreen />
                  </Suspense>
                }
              />
              <Route
                path="/blogs-list"
                element={
                  <Suspense fallback={Loader()}>
                    <BlogList />
                  </Suspense>
                }
              />
              <Route
                path="/create-blog"
                element={
                  <Suspense fallback={Loader()}>
                    <BlogListPopup />
                  </Suspense>
                }
              />
              <Route
                path="/create-post"
                element={
                  <Suspense fallback={Loader()}>
                    <PostListPopup />
                  </Suspense>
                }
              />
              <Route
                path="/create-story"
                element={
                  <Suspense fallback={Loader()}>
                    <StoryListPopup />
                  </Suspense>
                }
              />
              <Route
                path="/projects"
                element={
                  <Suspense fallback={Loader()}>
                    <Projects />
                  </Suspense>
                }
              />
            </Routes>
          </div>
        </div>
      </div>
      {aboutMeModal && <Aboutme />}
      {workModal && <WorkPopup />}
      {ourReviews && <Reviews />}
      {ourTeamModal && <Team />}
      {contactUsModal && <Contact />}
      {blogDetails && <BlogDetails />}
      {postDetails && <PostDetails />}
      {portfolioModal && <PortfolioScreen />}
    </div>
  );
};
export default App;
