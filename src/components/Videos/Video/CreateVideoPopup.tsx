import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import avatar from '../../../assets/pic.jpeg';
import cover from '../../../assets/lewagon.jpeg';
import { useDispatch } from 'react-redux';
import { addVideo } from '../../../actions/videos';
import { links } from '../../../assets/constants';
import PostLayout from '../../Posts/PostLayout';
import { AiOutlineClose } from 'react-icons/ai';

const CreateVideoPopup = ({setActivePopup, activePopup, user}) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
      userId: '',
      artist: '',
      videoUrl: '',
      imageUrl: '',
      description: '',
      cover: '',
      releaseDate: '',
      download: '',
      title: '',
      tags: '',
      tagUsers: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormData({...formData, userId: user._id, artist: user.name});

    dispatch(addVideo({...formData, userId: user._id, artist: user.name}));
    // setFormData(
    //   {
      // userId: '',
      // artist: '',
      // videoUrl: '',
      // imageUrl: '',
      // description: '',
      // cover: '',
      // releaseDate: '',
      // download: '',
      // title: '',
      // tags: '',
      // tagUsers: '',
    //   }
    // );
  }
  return (
    <PostLayout>
      <div className='bg-bg_alt w-full rounded-2xl'>
        <div className="flex text-center items-center rounded-2xl justify-between p-4 text-base">
          <div className="flex gap-1">
            <div className="flex">
              <img src={cover} className="w-8 h-8 object-cover rounded-full" alt='logo' />
            </div>
            <div className="text-start">
              <p>New video by</p>
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
              <input name="title" onChange={(e) => setFormData({...formData, title: e.target.value})} placeholder='title...' className='flex flex-1 h-8 text-base rounded-full bg-bg_light p-4 w-full' />
              <input name="artist" onChange={(e) => setFormData({...formData, artist: e.target.value})} placeholder='artist...' className='flex flex-1 h-8 text-base rounded-full bg-bg_light p-4 w-full' />
              <input name="image" onChange={(e) => setFormData({...formData, imageUrl: e.target.value})} placeholder='image...' className='flex flex-1 h-8 text-base rounded-full bg-bg_light p-4 w-full' />
              <input name="cover" onChange={(e) => setFormData({...formData, cover: e.target.value})} placeholder='cover...' className='flex flex-1 h-8 text-base rounded-full bg-bg_light p-4 w-full' />
              <input name="videoUrl" onChange={(e) => setFormData({...formData, videoUrl: e.target.value})} placeholder='video...' className='flex flex-1 h-8 text-base rounded-full bg-bg_light p-4 w-full' />
              <textarea name="description" onChange={(e) => setFormData({...formData, description: e.target.value})} rows={4} placeholder='description...' className='flex flex-1 h-8 text-base rounded-2xl bg-bg_light p-4 w-full' />
              <input type='date' name="releaseDate" onChange={(e) => setFormData({...formData, releaseDate: e.target.value})} placeholder='release date...' className='flex flex-1 h-8 text-base rounded-full bg-bg_light p-4 w-full' />
              <input name="tags" onChange={(e) => setFormData({...formData, tags: e.target.value})} placeholder='tags...' className='flex flex-1 h-8 text-base rounded-full bg-bg_light p-4 w-full' />
              <input name="download" onChange={(e) => setFormData({...formData, download: e.target.value})} placeholder='download...' className='flex flex-1 h-8 text-base rounded-full bg-bg_light p-4 w-full' />
              <button className='flex items-center py-4 justify-center gap-2 text-[14px]' onClick={handleSubmit}>Add video</button>
            </div>
          </div>
        </div>
      </div>
    </PostLayout>
  )
}

export default CreateVideoPopup
