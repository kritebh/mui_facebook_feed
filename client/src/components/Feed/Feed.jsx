import { Box ,Typography} from "@mui/material"
import Post from './Post'

function Feed({posts,isLoading}) {
    
  if(posts.length===0){

    return <Box bgcolor="skyblue" flex={4}  p={{ xs: 0, md: 2 }}>
        <Typography variant="h6" color="gray" textAlign="center">Add Some Posts </Typography>
    </Box>
  }

  return (
    <Box bgcolor="skyblue" flex={4}  p={{ xs: 0, md: 2 }}>
      {isLoading?"Loading":posts.map((post)=>{
        return <Post post={post} key={post._id} />
      })}
     </Box>
  )
}

export default Feed