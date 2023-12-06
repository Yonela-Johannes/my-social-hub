import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Dropzone from "react-dropzone";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { modules } from "./moduleToolbar";
import { MdCloudUpload } from "react-icons/md";
import { FallingLines } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { createPost } from "../../../app/features/post/postsSlice";

const CreatePost = () => {
  const [imageSrc, setImageSrc] = useState(null);
  const navigate = useNavigate()
  const { _id } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [inputData, setInputData] = useState({
    userId: "",
    title: "",
    post: "",
    image: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputData.title) return toast("Post title is required");
    if (inputData.title.length < 4)
      return toast("Title should have a minimum of 4 characters");
    if (!_id)
      return toast("Something went wrong: user details missing!");

    setLoading(true);
    const formData = new FormData();
    if (inputData?.image) {
      formData.append("file", inputData?.image);
      formData.append("upload_preset", "nomiupload");
      await axios
        .post(
          "https://api.cloudinary.com/v1_1/globalnomi/image/upload",
          formData
        )
        .then((res) =>
          dispatch(
            createPost({
              ...inputData,
              userId: _id,
              image: res?.data.url,
            })
          )
        )
        .catch(error => {
          console.log(error)
          toast("Error creating post")
          setLoading(false)
        })
    } else {
      dispatch(
        createPost({
          ...inputData,
          userId: _id,
        })
      )
      setLoading(false);
    }
    setLoading(false);
    setImageSrc(null)
    setInputData({});
    navigate("/timeline");
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
        <div className="bg-white text-black my-20 w-[300px] md:w-full">
          <div>
            <input
              id="title"
              label="Post title"
              name="title"
              className="bg-white mb-4"
              InputLabelProps={{
                shrink: true,
              }}
              placeholder="Post title"
              value={inputData.title}
              onChange={(e) =>
                setInputData({ ...inputData, title: e.target.value })
              }
            />

            <div className="text-[16px]">
              <ReactQuill
                theme="snow"
                className="mb-3 text-[16px]"
                placeholder={"Write the post content..."}
                modules={modules}
                value={inputData.post}
                onChange={(e) =>
                  setInputData({ ...inputData, post: e })
                }
              />
            </div>

            <div className="p-2 cursor-pointer">
              <Dropzone
                acceptedFiles=".jpg,.jpeg,.png"
                multiple={false}
                onDrop={(acceptedFiles) =>
                  acceptedFiles.map((file, index) => {
                    const { type } = file;
                    if (
                      type === "image/png" ||
                      type === "image/svg" ||
                      type === "image/jpeg" ||
                      type === "image/gif" ||
                      type === "image/webp"
                    ) {
                      setInputData({ ...inputData, image: file });
                      console.log(typeof inputData.image);
                      const reader = new FileReader();
                      reader.readAsDataURL(file);
                      reader.onloadend = () => {
                        setImageSrc(reader.result);
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
                    ) : imageSrc === null ? (
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
                          <img
                            className="h-[200px] w-[200px] object-cover rounded-md"
                            src={imageSrc}
                            alt=""
                          />
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </Dropzone>
            </div>
            <button onClick={handleSubmit}>Create post</button>
          </div>
        </div>
      )}
    </>
  );
};

export default CreatePost;
