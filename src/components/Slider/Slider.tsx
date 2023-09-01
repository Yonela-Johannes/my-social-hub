import { Splide, SplideSlide } from '@splidejs/react-splide';
// Default theme
import '@splidejs/react-splide/css';
// or other themes

import Reel from '../Reel/Reel';
function Slider ({reels, setReelPlayerState, reelPlayerState, videoPlayerState, setVideoPlayerState, playerState, setPlayerState}) {
  return(
    <Splide className='bg-bg_alt w-[340px] md:w-[600px] rounded-xl cursor-pointer py-4 my-[20px]' aria-label="My Favorite Images">

      {reels.map((reel, i) => {
        return (
          <SplideSlide key={reel._id} className='flex items-center justify-center gap-4'>
            <Reel className="w-[250px]" reel={reel}
            reels={reels}
              reelPlayerState={reelPlayerState}
              setReelPlayerState={setReelPlayerState}
              playerState={playerState}
              setPlayerState={setPlayerState}
              videoPlayerState={videoPlayerState}
              setVideoPlayerState={setVideoPlayerState}
            />
          </SplideSlide>)}
         )}
    </Splide>
  )
}

export default Slider;
