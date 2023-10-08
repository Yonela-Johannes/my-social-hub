import CreateStory from "./CreateStory"

const StoryListPopup = ({close}) => {
  return (
      <div className="flex flex-col m-auto my-2 md:my-10 items-center justify-center bg-bg_alt pt-10 pb-4 w-[320px] md:w-[1000px] self-center rounded-lg md:px-10 md:p-20">
        <div className="flex flex-col items-center w-[300px] md:w-full">
          <p className='text-center font-bold text-3xl pb-4'>Customize your new post</p>
          <p className="text-center text-lighter   text-md">Customize your post's unique personality and message.<br /> And remember, you can always update it as your blog evolves
          </p>
        </div>
        <div>
          <CreateStory />
        </div>
      </div>
  )
}

export default StoryListPopup
