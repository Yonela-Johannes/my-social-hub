import React, { useState } from 'react'
import cover from '../../assets/lewagon.jpeg';
import PostLayout from '../Posts/PostLayout';
import { useDispatch } from 'react-redux';
import { createBlog } from '../../actions/blogs';
import { AiOutlineClose } from 'react-icons/ai';

const CommentPopup = ({setActivePopup, activePopup, user}) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    creator: '',
    comment: ','

  });
  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(createBlog({...formData, name: user.name, creator: user._id}));
    setFormData(
      {
        name: '',
        creator: '',
        comment: '',

      }
    );
  }

  return (
    <PostLayout>
      <div className='bg-bg_alt w-full rounded-2xl z-10 text-base'>
        <div className="flex text-center items-center rounded-2xl justify-between p-4 text-base">
          <div className="flex gap-2 items-center text-center bg-bg_light rounded-full">
            <div className="flex">
              <img src={cover} className="w-8 h-8 object-cover rounded-full" alt='logo' />
            </div>
            <div className="text-start mr-2">
              <p>{`${user.name} ${user.last_name}`}</p>
            </div>
          </div>
          <div  onClick={() => setActivePopup(!activePopup)} className="flex items-center rounded-full bg-bg_light p-1 cursor-pointer">
            <AiOutlineClose className='text-[20px]' />
          </div>
        </div>
        <div className="px-10 border-t border-bg_light w-full">
          <div className="flex gap-2 justify-between items-center text-center text-base text-gray-200 border-b border-bg_light py-4">
            <div className="flex flex-col w-full gap-2 text-base">
              <textarea name="comment" onChange={(e) => setFormData({...formData, comment: e.target.value})} rows={15} placeholder='comment...' className='flex flex-1 text-base h-8 rounded-2xl bg-bg_light p-4 w-full' />
              <button className='flex items-center py-4 justify-center gap-2 text-base' onClick={handleSubmit}>Comment</button>
            </div>
          </div>
        </div>
      </div>
    </PostLayout>
  )
}

export default CommentPopup;
