import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Alpha from "../assets/AlphaWhite.png";
import { useSelector } from "react-redux";
import { AiOutlineComment, AiOutlineLogin, AiOutlineVideoCamera } from "react-icons/ai";
import { MdOutlineAccessTime } from "react-icons/md";

const Navbar = ({ pathname, homeScreen }) => {
  const { given_name, email, picture } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (given_name && email && picture) {
      navigate("/blogs");
    }
  }, [given_name, email, picture]);

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div
      className={`${
        homeScreen && "bg-green"
      } flex h-[60px] sm:h-[80px] border-b border-bg_light items-center justify-between px-4 sm:px-20  bg-bg_light`}
    >
      <div
        className={`${
          homeScreen
            ? "bg-transparent"
            : " p-2 text-center items-center bg-green justify-between rounded-full"
        } flex`}
      >
        <div className="">
          <Link to="/">
            <img
              src={Alpha}
              alt="logo"
              className="w-4 h-4 sm:h-6 sm:w-6 rotate-180"
            />
          </Link>
        </div>
      </div>
      <div>
        {!email ? (
          <>
            {pathname == "/signup" && (
              <div className="flex items-center gap-4">
                <div className="">
                  <button
                    className={`${homeScreen ? "bg-transparent" : " p-2"} `}
                    onClick={() => navigate("/signin")}
                  >
                    <AiOutlineLogin />
                    Sign in
                  </button>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="relative">
            <div className="flex items-center gap-4">
              <div
                className={`rounded-full flex items-center gap-2 text-base ${
                  homeScreen ? "bg-transparent" : " p-2bg-bg_alt"
                }  cursor-pointer`}
              >
                <div className="flex items-center justify-center gap-4">
                  <button
                    className={`${
                      homeScreen ? "bg-transparent" : " p-2"
                    } border-none bg-transparent hover:bg-transparent`}
                    onClick={() => navigate("/blogs")}
                  >
                    <AiOutlineComment className="h-7 w-7 text-white" />
                    <p className="hidden md:block">Blogs</p>
                  </button>
                  <button
                    className={`${
                      homeScreen ? "bg-transparent" : " p-2"
                    } border-none bg-transparent hover:bg-transparent`}
                    onClick={() => navigate("/timeline")}
                  >
                    <MdOutlineAccessTime className="h-7 w-7 text-white" />
                    <p className="hidden md:block">Timeline</p>
                  </button>
                  <button
                    className={`${
                      homeScreen ? "bg-transparent" : " p-2"
                    } border-none bg-transparent hover:bg-transparent`}
                    onClick={() => navigate("/stories")}
                  >
                    <AiOutlineVideoCamera className="h-7 w-7 text-white" />
                    <p className="hidden md:block">Stories</p>
                  </button>
                  <button
                    title="Log out"
                    className="border-none"
                    onClick={() => handleLogout()}
                  >
                    <img
                      src={picture}
                      alt="avatar"
                      className="w-[28px] h-[28px] md:w-[40px] md:h-[40px] rounded-full object-cover"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <>
        {!email && pathname !== "/signup" && pathname !== "/signin" && (
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center gap-4">
              <button
                className={`${
                  homeScreen ? "bg-transparent" : " p-2"
                } border-none bg-transparent hover:bg-transparent`}
                onClick={() => navigate("/blogs")}
              >
                <AiOutlineComment className="h-7 w-7 text-white " />
                <p className="hidden md:block">Blogs</p>
              </button>
              <button
                className={`${
                  homeScreen ? "bg-transparent" : " p-2"
                } border-none bg-transparent hover:bg-transparent`}
                onClick={() => navigate("/timeline")}
              >
                <MdOutlineAccessTime className="h-7 w-7 text-white " />
                <p className="hidden md:block">Timeline</p>
              </button>
              <button
                className={`${
                  homeScreen ? "bg-transparent" : " p-2"
                } border-none bg-transparent hover:bg-transparent`}
                onClick={() => navigate("/stories")}
              >
                <AiOutlineVideoCamera className="h-7 w-7 text-white" />
                <p className="hidden md:block">Stories</p>
              </button>
              <button
                className={`${homeScreen ? "bg-transparent" : " p-2"} `}
                onClick={() => navigate("/signin")}
              >
                <AiOutlineLogin className="h-4 w-4 p-2 bg-primary rounded-full" />
                Sign in
              </button>
            </div>
          </div>
        )}
      </>
    </div>
  );
};

export default Navbar;
