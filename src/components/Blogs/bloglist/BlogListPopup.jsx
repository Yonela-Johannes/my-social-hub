import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { MdClose } from 'react-icons/md'
import { AiOutlineCloudUpload } from "react-icons/ai";
import axios from 'axios'
import parse from 'html-react-parser';
import { createPost } from "../../../app/features/post/postsSlice";
import { createBlog } from "../../../app/features/blogs/blogsSlice";
import SunEditor, { buttonList } from "suneditor-react";

const BlogListPopup = ({close}) => {
  const [messageData, setMessageData] = useState('');
  const {_id } = useSelector(state => state.auth)
  const dispatch = useDispatch();
  const [imageSrc, setImageSrc] = useState('');
  const [inputData, setInputData] = useState({
    userId: '',
    title: '',
    message: '',
    image: '',
  });

  const uploadImage = async (e) => {
    e.preventDefault();
    const reader = new FileReader();
    const { type } = e.target.files[0];
    if(type === 'image/png' || type === 'image/svg' || type === 'image/jpeg' || type === 'image/gif' || type === 'image/webp'){
      setInputData({...inputData, image: e.target.files[0]});
    reader.onload = (onLoadEvent) => {
      setImageSrc(onLoadEvent.target.result);
    }
    reader.readAsDataURL(e.target.files[0]);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    if(inputData?.image){
      formData.append("file", inputData?.image);
      formData.append("upload_preset", "nomiupload");
      await axios.post('https://api.cloudinary.com/v1_1/globalnomi/image/upload', formData)
      .then((res) => dispatch(createBlog({ ...inputData, userId: _id, image: res?.data.url, message: messageData })));
    }else {
      dispatch(createPost({ ...inputData, userId: _id}))
    }
    setInputData({});
    close(false)
  }


  return (
    <div className='absolute flex z-20 w-full h-full items-center backdrop-blur-[67px] justify-center'>
      <div className="relative bg-bg_alt pt-10 pb-4 w-[1000px] rounded-lg">
        <div onClick={() => close(false)} className="absolute top-4 right-4 cursor-pointer">
          <MdClose size={20} />
        </div>
        <p className='text-center text:2xl'>Create new blog</p>
        <div className="flex flex-col gap-4 mb-3 w-full p-10">
          <div className="md:grid grid-cols-2 gap-2 p-4">
              <div>
                <div className="flex flex-col">
                  <input name="title" onChange={(e) => setInputData({...inputData, title: e.target.value})} placeholder='title...' className='flex flex-1 h-8 text-bg_alt text-[14px] rounded-none bg-white p-4 w-full' />
                </div>
                  <SunEditor
                  height="200"
                    placeholder="Please type here..."
                    onChange={(content) => setMessageData(content)} //set to message data because it clears the previous input of the input data (inputData)
                  />
                  <div className="flex flex-col w-full gap-2 mt-4">
                    <button className='flex items-center py-4 justify-center rounded-none bg-bg_light hover:bg-bg_cl gap-2 text-[14px]' onClick={handleSubmit}>Create blog</button>
                  </div>
              </div>
              <div>
                {imageSrc ? (
                    <div className="h-full] py-4">
                      <input className='absolute bg-transparent cursor-pointer text-transparent' type="file" onChange={uploadImage} name="image" />
                      <img src={imageSrc} alt="profile" className='w-full h-[360px] rounded-md object-contain' />
                    </div>
                    ) :
                    (<div className="relative flex items-center text-base gap-2 bg-bg_cl rounded-full">
                      <div className="flex items-center justify-center w-12 h-12 cursor-pointer bg-bg_light rounded-full ">
                        <AiOutlineCloudUpload size={22} />
                      </div>
                      <p className='mr-4'>Cover image</p>
                      <input className='absolute bg-transparent cursor-pointer text-transparent' type="file" onChange={uploadImage} name="image" />
                    </div>)
                    }
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default BlogListPopup
