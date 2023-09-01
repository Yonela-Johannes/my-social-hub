import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import PostLayout from "./PostLayout";
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import { createPost } from "../../app/features/post/postsSlice";
import axios from 'axios'

const CreatePostPopup = ({activePopup, setActivePopup}) => {
  const dispatch = useDispatch();
  const {_id, given_name, name, email, picture, message } = useSelector(state => state.auth)
  const [imageSrc, setImageSrc] = useState('');

  const [inputData, setInputData] = useState({
    userId: '',
    post: '',
    image: '',
    tags: '',
  });

  const updatePost = (id) => {

  }

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
      .then((res) => dispatch(createPost({ ...inputData, userId: _id, image: res?.data.url })));
    }else {
      dispatch(createPost({ ...inputData, userId: _id}))
    }
    setInputData({});
    setActivePopup(false);
  }

  return(
    <PostLayout>
      <div className='bg-bg_alt w-[600px] rounded-2xl'>
        <div className="flex text-center items-center rounded-2xl justify-between p-4 text-base">
        <div className="flex gap-1 items-center bg-bg_light rounded-full">
            <div className="flex">
              <img src={picture} className="w-8 h-8 object-cover rounded-full" alt='logo' />
            </div>
            <div className="text-start">
              <p className='mr-2 text-base'>{given_name}</p>
            </div>
          </div>
          <div  onClick={() => setActivePopup(!activePopup)} className="rounded-full bg-bg_light p-2 cursor-pointer">
            <AiOutlineClose className='text-[20px]' />
          </div>
        </div>
        <div className="px-10 border-t border-bg_light w-full">
          <div className="flex gap-2 justify-between items-center text-center text-base text-gray-200 border-b border-bg_light py-4">
            <img src={picture} alt="avatar" className='w-8 h-8 object-cover rounded-full self-start align-top my-1' />
            <div className="flex flex-col w-full gap-2">
              {imageSrc ? (
                <div className="h-full] py-4">
                  <input className='absolute bg-transparent cursor-pointer text-transparent' type="file" onChange={uploadImage} name="image" />
                  <img src={imageSrc} alt="profile" className='w-full h-[300px] rounded-md object-contain' />
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
              <textarea name="post" onChange={(e) => setInputData({...inputData, post: e.target.value})} rows={2} placeholder='post...' className='flex flex-1 h-8 text-base rounded-2xl bg-bg_light p-4 w-full' />
              <button className='flex items-center py-4 justify-center gap-2 text-[14px]' onClick={handleSubmit}>Create Post</button>
            </div>
          </div>
        </div>
      </div>
    </PostLayout>
  )
}

export default CreatePostPopup;
