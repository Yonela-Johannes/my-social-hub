const VideoPlayerPane = ({videoPlayerState, setVideoPlayerState, playlist, comments, playerState, setPlayerState}) => {

  const handlePlayPause = (id) => {
    if(id == videoPlayerState?.currentIndex) {
      setVideoPlayerState({ ...videoPlayerState, isPlaying: !videoPlayerState?.isPlaying });
    }else {
      setVideoPlayerState({
        currentReels: playlist,
        currentIndex: id,
        isActive: true,
        isPlaying: true,
        playlist: false,
        max: false,
        activeVideo: playlist.find((reel) => reel._id == id),
      });
      setPlayerState({...playerState, isPlaying: false});
    }
  }

  const handleToggle = () => {
    setVideoPlayerState({...videoPlayerState, showComments: !videoPlayerState.showComments})
  }

  return (
    <div className='h-full w-[500px] pt-4 mt-2'>
      <div onClick={handleToggle} className="flex items-center text-center justify-center bg-bg_light mr-4">
        <p className='flex items-center hover:bg-bg_light duration-300 cursor-pointer p-2 rounded-md'>
            {videoPlayerState.showComments ? "Show Videos" : "Show Comments"}
          </p>
      </div>
      {videoPlayerState?.showComments ? (
        <div>
          {comments.length > 0 ? comments.map((comment) => (
          <div key={comment._id} className="flex items-center gap-2 m-4 hover:bg-bg_light duration-300 cursor-pointer p-2 rounded-md">
            <img src={comment?.imageUrl} alt={comment?.title} className="w-6 h-6 object-cover rounded-full" />
            <p className='text-base'>{comment?.title}</p>
          </div>
          )) : (
            <p className="flex items-center gap-2 m-4 hover:bg-bg_light duration-300 cursor-pointer p-2 rounded-md" >No comments</p>
          )}
        </div>
      ) : (
        <div>
          {playlist?.length > 0 ? playlist.map((track) =>
          (
            <div onClick={() => handlePlayPause(track._id)}  key={track._id} className="flex items-center gap-2 m-4 hover:bg-bg_light duration-300 cursor-pointer p-2 rounded-md">
              <img src={track?.imageUrl} alt={track?.title} className="w-6 h-6 object-cover rounded-full" />
              <p className='text-base'>{track?.title}</p>
            </div>
          )) : (
            <p className="flex items-center gap-2 m-4 hover:bg-bg_light duration-300 cursor-pointer p-2 rounded-md">No videos in your playlist</p>
          )}
        </div>
      )}
    </div>
  )
}

export default VideoPlayerPane
