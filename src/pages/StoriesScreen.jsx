import { useEffect } from "react";
import Layout from "../components/Layout/Layout";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { MdAdd } from "react-icons/md";
import Footer from "./blog/footer/Footer";
import VideoCard from "../components/video/VideoCard";
import { getStories } from "../app/features/videos/videoSlice";
import NoResults from "../components/video/NoResults";

const StoriesScreen = () => {
  const { given_name, family_name, email, isAdmin } = useSelector(
    (state) => state.auth
  );
  const { stories } = useSelector((state) => state.stories);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    dispatch(getStories());
  }, [pathname]);

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center">
        {email && isAdmin && (
          <div className="flex flex-col sm:flex-row items-center justify-between md:w-[1000px] my-8 pr-8">
            <h3 className="text-center font-bold text-3xl pb-4">Stories</h3>
            <div className="flex items-center px-2 w-full justify-around">
              <p className="text-center text-lighter text-md">
                {given_name} {family_name}, Bring Your Ideas to Life - Write Your
                Next Post Today!
              </p>
              <div
                onClick={() => navigate("/create-story")}
                className="bg-bg_light p-2 rounded-xl h-min w-min cursor-pointer"
              >
                <MdAdd size={20} />
              </div>
            </div>
          </div>
        )}
        <div className="flex flex-col gap-10 videos h-full">
          {stories?.length ? (
            stories?.map((video) => <VideoCard story={video} key={video._id} />)
          ) : (
            <NoResults text={`No Videos`} />
          )}
        </div>
        <div className="mb-12 md:mb-20">
          <Footer />
        </div>
      </div>
    </Layout>
  );
};
export default StoriesScreen;
