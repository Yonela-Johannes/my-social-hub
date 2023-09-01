import React from 'react'
import { MdClose } from 'react-icons/md'

const WorkPopup = ({close}) => {
  return (
    <div className='absolute flex z-20 w-full h-full items-center backdrop-blur-[67px] justify-center'>
      <div className="relative bg-bg_alt pt-10 pb-4 w-[500px] rounded-lg">
        <div onClick={() => close(false)} className="absolute top-4 right-4 cursor-pointer">
          <MdClose size={20} />
        </div>
        <p className='text-center text:2xl'>Create new project</p>
        <div className="flex flex-col gap-4 mb-3 w-full p-10">
            <div>
              <input
                placeholder="Enter title"
                type="text"
                autoComplete="title"
                className="h-[42px] w-full rounded-md border-0 px-3.5 py-2 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          <div>
            <input
              placeholder="Enter description"
              className="h-[42px] w-full rounded-md border-0 px-3.5 py-2 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
            />
          </div>
            <div>
              <input
                placeholder=""
                type="file"
                name="subject"
                id="subject"
                autoComplete="Subject"
                className="h-[42px] w-full rounded-md border-0 px-3.5 py-2 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
            <div>
              <input
                type="url"
                placeholder="Enter link"
                className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                defaultValue={''}
              />
          </div>
          <button className="rounded-md mt-4 text-[18px] py-2 px-4  bg-bg_cl text-white hover:bg-green duration-300">Save</button>
        </div>
      </div>
    </div>
  )
}

export default WorkPopup
