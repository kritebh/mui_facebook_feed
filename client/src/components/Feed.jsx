import {useState,useEffect} from 'react'
import { Box} from "@mui/material"
import Post from './Post'

function Feed() {

  const [posts,setPosts] = useState([])
  const [isLoading,setIsLoading] = useState(true)

  useEffect(()=>{
      fetch("http://localhost:8000/posts")
      .then(data=>data.json())
      .then(data=>{
        setPosts(data)
        setIsLoading(false)
      })
    },[])
    
  return (
    <Box bgcolor="skyblue" flex={4}  p={{ xs: 0, md: 2 }}>
      {isLoading?"Loading":posts.map((post)=>{
        return <Post post={post} key={post._id}/>
      })}
     </Box>
  )
}

export default Feed