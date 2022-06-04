import React from 'react'

function Comment({comment}) {
  return (
    <div>
      {comment.map(c=>{
        return <p key={c._id}>{c.comment}</p> 
      })}
    </div>
  )
}

export default Comment