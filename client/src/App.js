import Sidebar from "./components/Navbar/Sidebar"
import Feed from "./components/Feed/Feed";
import Navbar from "./components/Navbar/Navbar";
import Rightbar from "./components/Navbar/Rightbar";
import { Box, Stack } from "@mui/material"
import UserName from "./components/Auth/UserName";
import Add from "./components/Feed/Add"
import { useState, useEffect } from "react";
import "./App.css"
function App() {

  let initialUsername = localStorage.getItem("username") || ""

  const [username, setUsername] = useState(initialUsername)
  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getPosts()
  }, [])


  function getPosts() {
    fetch("http://localhost:8000/posts")
      .then(data => data.json())
      .then(data => {
        setPosts(data)
        setIsLoading(false)
      })
  }

  if (!username) {
    return (
      <UserName setUsername={setUsername} />
    )
  }

  return (
    <Box>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        <Feed posts={posts} isLoading={isLoading} />
        <Rightbar />
      </Stack>
      <Add username={username} getPosts={getPosts} />
    </Box>
  );
}

export default App;
