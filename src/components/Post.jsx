import React from 'react'

function Post() {
  return (
    <div>
        <label htmlFor='author'>Author</label>
        <input type='text' id='author' name='author' />
        <label htmlFor='body'>Description</label>
        <input type='text' id='body' name='description' />
    </div>
  )
}

export default Post;
