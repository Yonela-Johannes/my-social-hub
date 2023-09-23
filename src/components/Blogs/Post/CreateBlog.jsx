import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import parse from 'html-react-parser';
import { AiOutlineArrowLeft, AiOutlineCloudUpload } from 'react-icons/ai';
import Layout from '../../Layout/Layout';
import SunEditor, { buttonList } from "suneditor-react";
import 'suneditor/dist/css/suneditor.min.css';
import { useNavigate } from 'react-router-dom';
import { createBlog } from '../../../app/features/blogs/blogsSlice';


const CreateBlog = () => {
  const {_id, name, given_name, email, picture, message } = useSelector(state => state.auth)
  const navigate = useNavigate();
  const [messageData, setMessageData] = useState('');
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
    if(type === 'image/png' || type === 'image/svg' || type === 'image/jpeg' || type === 'image/gif'){
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
    formData.append("file", inputData?.image);
    formData.append("upload_preset", "nomiupload");
    await axios.post('https://api.cloudinary.com/v1_1/globalnomi/image/upload', formData)
    .then((res) => dispatch(createBlog({ ...inputData, userId: _id, image: res?.data.url, message: messageData })));
    setInputData({});
    navigate('/blogs')
  }


  const handleUpdatedBlog = () => {
    setInputData({...inputData, message: messageData});
  }

  const revertToPrevious = () => {
    setInputData({...inputData, message: messageData});
  }

  return (
    <Layout>
      <div className='h-full'>
        {email && (
            <button onClick={() => navigate(`/blogs`)} >
              <p>Back</p>
              <AiOutlineArrowLeft size={15} />
            </button>
          )}
        <div className='bg-bg_alt rounded-2xl z-10 text-base'>
            <div className="flex text-center items-center rounded-2xl justify-between p-4 text-base">
            <div className="flex gap-1 items-center bg-bg_light rounded-full">
                <div className="flex">
                  <img src={picture} alt="avatar" className='w-8 h-8 object-cover rounded-full self-start align-top' />
                </div>
                <div className="text-start">
                  <p className='mr-2 text-base'>{`${name}`}</p>
                </div>
              </div>
              <div className="flex gap-1 items-center bg-bg_light rounded-full">
                <div className="flex">
                  <img src={picture} className="w-8 h-8 object-cover rounded-full" alt='logo' />
                </div>
                <div className="text-start">
                  <p className='mr-2 text-base'>{given_name}</p>
                </div>
              </div>
            </div>
            <div className="md:grid grid-cols-2 gap-2 p-4">
              <div>
                <div className="flex flex-col">
                  <input name="title" onChange={(e) => setInputData({...inputData, title: e.target.value})} placeholder='title...' className='flex flex-1 h-8 text-bg_alt text-[14px] rounded-none bg-white p-4 w-full' />
                </div>
                  <SunEditor
                  height="400"
                    placeholder="Please type here..."
                    onChange={(content) => setMessageData(content)} //set to message data because it clears the previous input of the input data (inputData)
                  />
                  <div className="flex flex-col w-full gap-2 mt-4">
                    <button className='flex items-center py-4 justify-center rounded-none bg-bg_light hover:bg-bg_cl gap-2 text-[14px]' onClick={handleSubmit}>Create blog</button>
                  </div>
              </div>
              <div className="relative flex flex-col px-2">
                <div className="border-t border-bg_light w-full">
                  <div className="flex w-full gap-2 justify-center items-center text-center text-base text-gray-200 border-b border-bg_light">
                    {imageSrc ? (
                        <div className="w-full flex flex-col items-center justify-center my-4">
                          <input className=' cursor-pointer text-transparent w-full' type="file" onChange={uploadImage} name="image" />
                          <img src={imageSrc} alt="profile" className='w-40 h-40 object-cover' />
                        </div>
                        ) :
                        (<div className="relative flex items-center text-base gap-2 bg-bg_cl rounded-full">
                          {/* <div className="flex items-center justify-center w-12 h-12 cursor-pointer bg-bg_light rounded-full ">
                            <AiOutlineCloudUpload size={22} />
                          </div> */}
                          <p className='mr-4'>Image</p>
                          <input className='absolute bg-transparent cursor-pointer text-transparent' type="file" onChange={uploadImage} name="image" />
                        </div>)
                      }
                  </div>
                </div>
                <div className="">
                  <h1 className='text-[14px] font-bold'>{inputData?.title}</h1>
                  <h1 className='text-[14px] font-bold'>{inputData?.header}</h1>
                  <div className="mt-4 bg-[red]">
                    {parse(messageData)}
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </Layout>
  )
}

export default CreateBlog;
