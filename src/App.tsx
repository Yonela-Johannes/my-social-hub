import { useState, useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';
import { Navbar, Sidebar, VideoPlayer, Loader } from './components';
import BlogScreen from './pages/BlogScreen';
import Signin from './pages/Auth/Signin';
import PostScreen from './pages/PostScreen';
import VideoScreen from './pages/VideoScreen';
import PlayerPane from './components/ReelPlayer copy/PlayerPane';
import VideoPlayerPane from './components/VideoPlayer/VideoPlayerPane';
import CreateBlog from './components/Blogs/Post/CreateBlog';
import HomeScreen from './pages/HomeScreen';
import QNA from './pages/QNA';
import { useDispatch, useSelector } from 'react-redux';
import Server from './components/Server';
import DashboardScreen from './pages/DashboardScreen';
import BlogsList from './pages/BlogsList';
import PostsList from './pages/PostsList';
import WorkList from './pages/WorkList';

const App = () => {
  const { given_name, email, picture, message, isAdmin, menuState } = useSelector(state => state.auth)
  const location = useLocation()
  const { pathname } = location;
  const [activeNav, setActiveNav] = useState(false);
  const [homeScreen, setHomeScreen] = useState(false)
  const dispatch = useDispatch();


  const [postPopup, setPostPopup] = useState({
    currentIndex: 0,
    isActive: false,
    isPlaying: false,
    max: false,
  });

  const [videoPlayerState, setVideoPlayerState] = useState({
    currentVideos: [],
    currentIndex: 0,
    isActive: false,
    isPlaying: false,
    max: false,
    showComments: true,
    playlist: false,
    activeVideo: {
      userId: '',
      artist: '',
      videoUrl: '',
      description: '',
      releaseDate: '',
      download: '',
      title: '',
      imageUrl: '',
      cover: '',
      tags: '',
      tagUsers: '',
    },
  });

  const [reelPlayerState, setReelPlayerState] = useState({
    currentReels: [],
    currentIndex: 0,
    isActive: false,
    isPlaying: false,
    max: false,
    showComments: true,
    playlist: false,
    activeReel: {
      userId: '',
      artist: '',
      videoUrl: '',
      description: '',
      title: '',
      imageUrl: '',
      tags: '',
      tagUsers: '',
    },
  });

  const [videoPlayerSidebar, setVideoPlayerSidebar] = useState({
    slideUp: false,
    expand: false,
    playlist: false
  });

  useEffect(() => {
    if(pathname === "/"){
      setHomeScreen(true)
    }else{
      setHomeScreen(false)
    }
  },[pathname]);

  return (
    <div className="flex-1 flex flex-col text-text bg-bg_cl align-center justify-center font-sans">
        {/* <Navbar pathname={pathname} homeScreen={homeScreen} setActiveNav={setActiveNav} activeNav={activeNav} /> */}
        <div className={`${homeScreen ? "flex-col" : "sm:w-full self-center"} flex w-full`}>
          {pathname !== '/' && (
            <>
            {activeNav && (
              <div className={`${activeNav && "absolute z-[9999]"} sm:hidden text-text px-4 min-w-[50px] sm:min-w[100px] justify-center md:flex animate-slideleft duration-200`}>
                <Sidebar />
              </div>
            )}
              <div className={`${homeScreen ? "w-full" : `text-text ${menuState ? 'min-w-[120px]' : 'min-w-[280px]'}  sm:min-w[100px] justify-center md:flex animate-slideleft hidden  bg-bg_alt`}`}>
                <Sidebar />
              </div>
            </>
          )}
            <div className={`w-full h-[calc(100vh)] ${pathname == '/signin' || pathname == '/signup'? "overflow-hidden" : "overflow-y-scroll"
            } flex xl:flex-row flex-reverse`} >
              <div className="flex-1">
                <Routes>
                  <Route path="/home" element={<BlogScreen />} />
                  <Route path="/dashboard" element={<DashboardScreen />} />
                  <Route path="/blogs" element={<BlogScreen />} />
                  <Route path="/signin" element={<Signin />} />
                  <Route path="/" element={<HomeScreen homeScreen={homeScreen} />} />
                  <Route path="/blogs/newblog" element={<CreateBlog />} />
                  <Route path="/posts" element={<PostScreen />} />
                  <Route path="/qna" element={<QNA />} />
                  <Route path="/posts-list" element={<PostsList />} />
                  <Route path="/blogs-list" element={<BlogsList />} />
                  <Route path="/work-list" element={<WorkList />} />
                  <Route path="/videos" element={<VideoScreen
                      setReelPlayerState={setReelPlayerState}
                      videoPlayerState={videoPlayerState}
                      setVideoPlayerState={setVideoPlayerState}
                   />} />
                </Routes>
              </div>
            </div>
        </div>
      {/* {playerState?.activeSong?.title && (
        <div className="absolute h-24 bottom-0 left-0 right-0 flex animate-slideup bg-bg_cl border-t border-bg_light backdrop-blur-sm z-10">
        )}
      <div className="p-10 z-10">
        {videoPlayerState?.activeVideo?.title && (
          <div className={`${videoPlayerState.max ? "w-full h-full justify-evenly" : "max-w-[460px] flex-col"}  absolute left-0 sm:left-auto right-0 md:right-3 bottom-0 sm:bottom-2 z-10 rounded-md flex animate-slide right bg-bg_alt backdrop-blur-sm ${playerState?.activeSong?.title && 'mb-24'}`}>
            <VideoPlayer
              setPlayerState={setPlayerState}
              playerState={playerState}
              videoPlayerState={videoPlayerState}
              setVideoPlayerState={setVideoPlayerState}
              videoPlayerSidebar={videoPlayerSidebar}
              setVideoPlayerSidebar={setVideoPlayerSidebar}
              reelPlayerState={reelPlayerState}
              setReelPlayerState={setReelPlayerState}
            />
          {videoPlayerState?.playlist && (
            <div>
              <VideoPlayerPane
                playlist={videoPlayerState.currentVideos}
                comments={videoPlayerState.activeVideo}
                videoPlayerState={videoPlayerState}
                setVideoPlayerState={setVideoPlayerState}
                playerState={playerState}
                setPlayerState={setPlayerState}
              />
            </div>
          )}
          </div>
        )}
      </div>
      <div className="p-10 z-10">
        {reelPlayerState?.activeReel?.title && (
        <div className={`${reelPlayerState.max ? "w-full h-full justify-evenly" : "max-w-[460px] flex-col"} absolute left-0 sm:left-auto right-0 md:right-3 bottom-0 sm:bottom-2 z-10 rounded-md flex animate-slide right bg-bg_alt backdrop-blur-sm ${playerState?.activeSong?.title && 'mb-24'}`}>
          <ReelPlayer
            setPlayerState={setPlayerState}
            playerState={playerState}
            videoPlayerState={videoPlayerState}
            setVideoPlayerState={setVideoPlayerState}
            videoPlayerSidebar={videoPlayerSidebar}
            setVideoPlayerSidebar={setVideoPlayerSidebar}
            reelPlayerState={reelPlayerState}
            setReelPlayerState={setReelPlayerState}
          />
          {reelPlayerState?.playlist && (
            <div>
              <PlayerPane
                playlist={reelPlayerState.currentReels}
                comments={reelPlayerState.activeReel}
                reelPlayerState={reelPlayerState}
                setReelPlayerState={setReelPlayerState}
                playerState={playerState}
                setPlayerState={setPlayerState}
              />
            </div>
          )}
        </div>
      )}
      </div>
    </div> */}
</div>
  )
}
export default App;
