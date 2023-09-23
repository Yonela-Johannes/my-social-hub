import { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from '@material-ui/core'
import FileBase from 'react-file-base64'
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost, getPosts } from "../../actions/posts";

const Form = ({ currentId, setCurrentId }) => {
  const dispatch = useDispatch();
  const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId): null)
  const [postData, setPostData] = useState ({
    creator: '', image: '', video: '', song: '', title: '', message: '', tags: '',
  });

  useEffect(() => {
    if(post) setPostData(post);
  }, [post]);


  const clear = () => {
    setPostData({
      creator: '',
      image: '',
      video: '',
      song: '',
      title: '',
      message: '',
      tags: ''
    });
    setCurrentId('')
    dispatch(getPosts())
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(currentId){
      dispatch(updatePost(currentId, postData));
      clear()
    }else {
      dispatch(createPost(postData));
    }
    setPostData({
      creator: '',
      image: '',
      video: '',
      song: '',
      title: '',
      message: '',
      tags: ''
    });
    clear();
    dispatch(getPosts())
  };


  return(
    <Paper className="bg-[#c0c0c0] flex-col p-4 rounded-lg">
      <form autoComplete="off" noValidate className="flex-col" onSubmit={handleSubmit}>
      <Typography variant="h6">{currentId ? `Edit "${post?.title}"` : 'CreateMemory'}</Typography>
        <div>
          <TextField
            name='creator'
            variant='outlined'
            label="Creator"
            fullWidth
            value={postData.creator}
            onChange={(e) => setPostData({...postData, creator: e.target.value})}
          />
          <TextField
            name='title'
            variant='outlined'
            label="Title"
            fullWidth
            value={postData.title}
            onChange={(e) => setPostData({...postData, title: e.target.value})}
          />
          <TextField
            name='tags'
            variant='outlined'
            label="Tags"
            fullWidth
            value={postData.tags}
            onChange={(e) => setPostData({...postData, tags: e.target.value})}
          />
          <TextField
            name='message'
            variant='outlined'
            label="Message"
            fullWidth
            value={postData.message}
            onChange={(e) => setPostData({...postData, message: e.target.value})}
          />
        </div>
        <FileBase
          type="file"
          multiple={false}
          onDone={({base64}) => setPostData({ ...postData, image: base64})}
        />
        <TextField
            name='video'
            variant='outlined'
            label="Video"
            fullWidth
            value={postData.video}
            onChange={(e) => setPostData({...postData, video: e.target.value})}
          />
          <TextField
            name='song'
            variant='outlined'
            label="Song"
            fullWidth
            value={postData.song}
            onChange={(e) => setPostData({...postData, song: e.target.value})}
          />
        <Button
          type='submit'
          variant='contained'
          color='primary'
          size='large'
          fullWidth
        >{currentId ? 'Save' : 'Post'}</Button>
        <Button
          type='submit'
          variant='contained'
          color='secondary'
          size='small'
          fullWidth
          onClick={clear}
        >Clear</Button>
      </form>
    </Paper>
  )
}

export default Form;
