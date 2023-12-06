import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Dropzone from "react-dropzone";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { MdCloudUpload } from "react-icons/md";
import { FallingLines } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { createStory } from "../../app/features/videos/videoSlice";

const CreateStory = () => {
  const [caption, setCaption] = useState('');
  const [topics, setTopics] = useState([])
  const [topic, setTopic] = useState();
  const [loading, setLoading] = useState(false);

  const [videoSrc, setVideoSrc] = useState(null);
  const navigate = useNavigate()
  const { _id } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [inputData, setInputData] = useState({
    userId: "",
    caption: "",
    story: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputData.caption) return toast("Post caption is required");
    if (!inputData.story) return toast("Post video is required");
    if (inputData.caption.length < 4)
      return toast("Caption should have a minimum of 4 characters");
    if (!_id)
      return toast("Something went wrong: user details missing!");

    setLoading(true);
    const formData = new FormData();
    if (inputData?.story) {
      formData.append("file", inputData?.story);
      formData.append("upload_preset", "nomiupload");
      await axios
        .post(
          "https://api.cloudinary.com/v1_1/globalnomi/video/upload",
          formData
        )
        .then((res) =>
          dispatch(
            createStory({
              ...inputData,
              userId: _id,
              story: res?.data.url,
            })
          )
        )
        .catch(error => {
          console.log(error)
          toast("Error creating post")
          setLoading(false)
        })
    } else {
      toast("Something went wrong!")
      setLoading(false);
    }
    setLoading(false);
    setVideoSrc(null)
    setInputData({});
    navigate("/stories");
  };

  return (
    <>
      <Toaster />
      {loading ? (
        <FallingLines
          color="#5A2E98"
          width="100"
          visible={true}
          ariaLabel="falling-lines-loading"
        />
      ) : (
        <div className="text-black my-20 w-[300px] md:w-full md:p-10">
          <div>
          <div className='flex flex-col gap-3 pb-10'>
            <textarea
              type='text'
              placeholder="Enter caption"
              value={inputData.caption}
              onChange={(e) =>
                setInputData({ ...inputData, caption: e.target.value })
              }
              className='rounded w-full outline-none text-md  p-2'
            />
          </div>
            <div className="cursor-pointer ">
              <Dropzone
                acceptedFiles=".mp4,.webm,.ogg"
                multiple={false}
                onDrop={(acceptedFiles) =>
                  acceptedFiles.map((file, index) => {
                    const { type } = file;
                    if (
                      type === "video/mp4" ||
                      type === "video/webm" ||
                      type === "video/ogg"
                    ) {
                      setInputData({ ...inputData, story: file });
                      const reader = new FileReader();
                      reader.readAsDataURL(file);
                      reader.onloadend = () => {
                        setVideoSrc(reader.result);
                      };
                    }
                  })
                }
              >
                {({ getRootProps, getInputProps, isDragActive }) => (
                  <div {...getRootProps()} className="p-[1rem]">
                    <input name="banner" {...getInputProps()} />
                    {isDragActive ? (
                      <div className="flex flex-col text-center items-center justify-center">
                        <p className="text-center text-[13px] text-primary">
                          <MdCloudUpload size={22} />{" "}
                        </p>
                        <p className="text-center text-[13px]"> Drop here!</p>
                      </div>
                    ) : videoSrc === null ? (
                      <div className="flex flex-col text-center items-center justify-center">
                        <p className="text-center text-[13px] text-primary">
                          <MdCloudUpload size={22} />
                        </p>
                        <p className="text-center text-[13px]">
                          Drag and Drop here or click to choose
                        </p>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        <div>
                          <video
                            className="h-[200px] w-[200px] object-cover rounded-md"
                            src={videoSrc}
                            alt=""
                          />
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </Dropzone>
            </div>
            <button onClick={handleSubmit}>Create story</button>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateStory;
