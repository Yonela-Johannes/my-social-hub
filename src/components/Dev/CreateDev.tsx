import { useState , useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import PostLayout from "../../components/Posts/PostLayout";
import { AiOutlineCloudUpload } from 'react-icons/ai';
import cover from '../../assets/lewagon.jpeg';
import { AiOutlineClose } from 'react-icons/ai';
import axios from 'axios'
import { createDev } from "../../actions/users";

const CreateDev = ({activePopup, setActivePopup, user}) => {
  const dispatch = useDispatch();
  const [image, setImage] = useState('');
  const [imageSrc, setImageSrc] = useState('');
  const [currentId, setCurrentId] = useState('')
  const [inputData, setInputData] = useState({
    userId: '',
    title: '',
    message: '',
    image: '',
  });

  const updatePost = (id) => {
    setCurrentId(id)
  }

  const uploadImage = async (e) => {
    e.preventDefault();
    const reader = new FileReader();
    const { type } = e.target.files[0];
    if(type === 'image/png' || type === 'image/svg' || type === 'image/jpeg' || type === 'image/gif' || type === 'image/webp'){
      setImage(e.target.files[0]);
    reader.readAsDataURL(e.target.files[0]);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("I am submiting")
    dispatch(createDev(user?._id, { ...inputData, userId: user._id, image }))
    setInputData();
    alert("Your post has been created!!")
    setActivePopup(false);
  }

  return(
    <PostLayout>
      <div className='bg-bg_alt w-full rounded-2xl'>
        <div className="flex text-center items-center rounded-2xl justify-between p-4 text-base">
        <div className="flex gap-1 items-center bg-bg_light rounded-full">
            <div className="flex">
              <img src={user?.cover} className="w-8 h-8 object-cover rounded-full" alt='logo' />
            </div>
            <div className="text-start">
              <p className='mr-2 text-base'>{user?.name}</p>
            </div>
          </div>
          <div  onClick={() => setActivePopup(!activePopup)} className="rounded-full bg-bg_light p-2 cursor-pointer">
            <AiOutlineClose className='text-[20px]' />
          </div>
        </div>
        <div className="px-10 border-t border-bg_light w-full">
          <div className="flex gap-2 justify-between items-center text-center text-base text-gray-200 border-b border-bg_light py-4">
            <img src={user?.image} alt="avatar" className='w-8 h-8 object-cover rounded-full self-start align-top my-1' />
            <div className="flex flex-col w-full gap-2">
              <input name="title" onChange={(e) => setInputData({...inputData, title: e.target.value})} placeholder='title...' className='flex flex-1 h-8 text-base rounded-md bg-bg_light p-4 w-full' />
              <textarea name="post" onChange={(e) => setInputData({...inputData, message: e.target.value})} rows={2} placeholder='post...' className='flex flex-1 h-8 text-base rounded-md bg-bg_light p-4 w-full' />
              <button className='flex items-center py-4 justify-center gap-2 text-[14px]' onClick={handleSubmit}>Create Post</button>
            </div>
            {imageSrc ? (
              <div className="h-full] py-4">
                <input className='absolute bg-transparent cursor-pointer text-transparent' type="file" onChange={uploadImage} name="image" />
                <img src={imageSrc} alt="profile" className='w-80 h-full rounded-md object-cover pb-4' />
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
    </PostLayout>
  )
}

export default CreateDev;
