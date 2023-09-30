import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { MdClose } from 'react-icons/md'
import { AiOutlineCloudUpload } from "react-icons/ai";
import axios from 'axios'
import parse from 'html-react-parser';
import { createPost } from "../../../app/features/post/postsSlice";
import { createBlog } from "../../../app/features/blogs/blogsSlice";
import SunEditor, { buttonList } from "suneditor-react";
import { toggleBlogModal } from "../../../app/features/auth/authSlice";
import Write from "../../../pages/blog/write/Write";

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
    dispatch(toggleBlogModal())
  }


  return (
    <div className='absolute flex z-40 w-full h-full items-center backdrop-blur-[67px] justify-center'>
      <div className="relative bg-bg_alt pt-10 pb-4 w-[1000px] rounded-lg">
        <div onClick={() => dispatch(toggleBlogModal())} className="absolute top-4 right-4 cursor-pointer">
          <MdClose size={20} />
        </div>
        <p className='text-center font-bold text-3xl pb-4'>Customize you new blog</p>
        <p className="text-center text-lighter text-md">Customize your blog's unique personality and message.<br /> And remember, you can always update it as your blog evolves
        </p>
        <Write />
      </div>
    </div>
  )
}

export default BlogListPopup
