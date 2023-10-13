import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Alpha from "../assets/LOGO.png";
import { useSelector } from "react-redux";
import { AiOutlineComment, AiOutlineHome, AiOutlineLogin, AiOutlineVideoCamera } from "react-icons/ai";
import { MdOutlineAccessTime } from "react-icons/md";

const Navbar = ({ pathname, homeScreen }) => {
  const { given_name, email, picture } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div
      className={`flex h-[60px] sm:h-[80px] border-b border-bg_light items-center justify-between pt-4 sm:px-20  bg-bg_light`}
    >
      <div
        className={`text-center items-center bg-green justify-between rounded-full hid hidden md:flex`}
      >
          <Link to="/">
            <img
              src={Alpha}
              alt="logo"
              className="w-5 h-5 sm:h-7 sm:w-7"
            />
          </Link>
      </div>
      <div>
        {!email ? (
          <div className="bg-red">
            {pathname == "/signup" && (
              <div className="flex items-center gap-4">
                  <button
                    className={`${homeScreen ? "bg-transparent" : "p-2"} text-white`}
                    onClick={() => navigate("/signin")}
                  >
                    <AiOutlineLogin   className="h-5 w-5 md:h-7 md:w-7 text-white md:hidden" />
                    <p className="hidden md:block">Sign in</p>
                  </button>
              </div>
            )}
          </div>
        ) : (
          <div className="relative bg-blue">
            <div className="flex items-center gap-4">
              <div
                className={`rounded-full flex items-center gap-2 text-base ${
                  homeScreen ? "bg-transparent" : " p-2bg-bg_alt"
                }  cursor-pointer`}
              >
                <div className="flex items-center  md:justify-center gap-4">
                  <button
                    className={`${
                      homeScreen ? "bg-transparent" : "p-2"
                    } border-none bg-transparent hover:bg-transparent`}
                    onClick={() => navigate("/")}
                  >
                    <AiOutlineHome className="h-5 w-5 md:h-7 md:w-7 text-white md:hidden" />
                    <p className="hidden md:block">Home</p>
                  </button>
                  <button
                    className={`${
                      homeScreen ? "bg-transparent" : "p-2"
                    } border-none bg-transparent hover:bg-transparent`}
                    onClick={() => navigate("/blogs")}
                  >
                    <AiOutlineComment className="h-5 w-5 md:h-7 md:w-7 text-white md:hidden" />
                    <p className="hidden md:block">Blogs</p>
                  </button>
                  <button
                    className={`${
                      homeScreen ? "bg-transparent" : "p-2"
                    } border-none bg-transparent hover:bg-transparent`}
                    onClick={() => navigate("/timeline")}
                  >
                    <MdOutlineAccessTime className="h-5 w-5 md:h-7 md:w-7 text-white md:hidden" />
                    <p className="hidden md:block">Timeline</p>
                  </button>
                  <button
                    className={`${
                      homeScreen ? "bg-transparent" : "p-2"
                    } border-none bg-transparent hover:bg-transparent`}
                    onClick={() => navigate("/stories")}
                  >
                    <AiOutlineVideoCamera className="h-5 w-5 md:h-7 md:w-7 text-white md:hidden" />
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
                  homeScreen ? "bg-transparent" : "p-2"
                } border-none bg-transparent hover:bg-transparent`}
                onClick={() => navigate("/")}
                >
                <AiOutlineHome className="h-5 w-5 md:h-7 md:w-7 text-white md:hidden" />
                <p className="hidden md:block">Home</p>
              </button>
              <button
                className={`${
                  homeScreen ? "bg-transparent" : "p-2"
                } border-none bg-transparent hover:bg-transparent`}
                onClick={() => navigate("/blogs")}
              >
                <AiOutlineComment className="h-5 w-5 md:h-7 md:w-7 text-white md:hidden " />
                <p className="hidden md:block">Blogs</p>
              </button>
              <button
                className={`${
                  homeScreen ? "bg-transparent" : "p-2"
                } border-none bg-transparent hover:bg-transparent`}
                onClick={() => navigate("/timeline")}
              >
                <MdOutlineAccessTime className="h-5 w-5 md:h-7 md:w-7 text-white md:hidden " />
                <p className="hidden md:block">Timeline</p>
              </button>
              <button
                className={`${
                  homeScreen ? "bg-transparent" : "p-2"
                } border-none bg-transparent hover:bg-transparent`}
                onClick={() => navigate("/stories")}
              >
                <AiOutlineVideoCamera className="h-5 w-5 md:h-7 md:w-7 text-white md:hidden" />
                <p className="hidden md:block">Stories</p>
              </button>
              <button
                className={`${homeScreen ? "bg-transparent" : " p-1 rounded-full"} text-white`}
                onClick={() => navigate("/signin")}
              >
                <AiOutlineLogin  className="h-5 w-5 md:h-7 md:w-7 text-white md:hidden"  />
                <p className="hidden md:block">Sign in</p>
              </button>
            </div>
          </div>
        )}
      </>
    </div>
  );
};

export default Navbar;
