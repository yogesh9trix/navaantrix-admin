import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { posts } from '../Pages/Home/Home';

function Post() {
  const { postId } = useParams();
  const [short, setShort] = useState('Please select any link');
  useEffect(() => {
    const post = posts.find((post) => post.id == postId);
    setShort(post.short);
    console.log(post)
  }, [postId])
  return (
    <div>
      { short }
    </div>
  )
}

export default Post