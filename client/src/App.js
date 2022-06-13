import Sidebar from "./components/nav/sidebar/Sidebar"
import FeedContainer from "./components/feed/feedcontainer/FeedContainer";
import Navbar from "./components/nav/navbar/Navbar";
import Rightbar from "./components/nav/rightbar/Rightbar";
import { Box, Stack } from "@mui/material"
import UserName from "./components/username/UserName";
import AddPost from "./components/feed/addpost/Add"
import { useState, useEffect } from "react";
import { io } from "socket.io-client";
import "./App.css"
function App() {

  let initialUsername = localStorage.getItem("username") || ""

  const [username, setUsername] = useState(initialUsername)
  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [socket,setSocket] = useState(null)

  // Initialize Socket and Fetch Posts
  useEffect(() => {
    getPosts()
    setSocket(io("http://localhost:5000"));
  }, [])


  // Set Active User
  useEffect(() => {
    socket?.emit("newUser",username)
  },[socket,username]);

  // Fetch Post Function
  function getPosts() {
    fetch("http://localhost:8000/posts")
      .then(data => data.json())
      .then(data => {
        setPosts(data)
        setIsLoading(false)
      })
  }


  // Check For User
  if (!username) {
    return (
      <UserName setUsername={setUsername} />
    )
  }

  return (
    <Box>
      <Navbar socket={socket} />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        <FeedContainer posts={posts} isLoading={isLoading} socket={socket} />
        <Rightbar />
      </Stack>
      <AddPost username={username} getPosts={getPosts} />
    </Box>
  );
}

export default App;
