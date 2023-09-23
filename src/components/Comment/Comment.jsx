import React, { useState } from 'react'
import CommentPopup from './CommentPopup'
import NewComment from './NewComment'

const Comment = ({user}) => {
  const [activePopup, setActivePopup] = useState(false)
  return (
    <div className="">
      <div className="">
        {activePopup && (
          <CommentPopup
            activePopup={activePopup}
            setActivePopup={setActivePopup}
            user={user}
          />
        )}
      </div>
    <div>
      <NewComment
        activePopup={activePopup}
        setActivePopup={setActivePopup}
        user={user}
      />
    </div>
    </div>
  )
}

export default Comment
