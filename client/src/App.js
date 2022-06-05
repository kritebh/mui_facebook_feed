import Sidebar from "./components/Sidebar"
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import { Box, Stack } from "@mui/material"
import UserName from "./components/UserName";
import { useState } from "react";
import "./App.css"
function App() {

  let initialUsername =  localStorage.getItem("username") || ""

  const [username,setUsername] = useState(initialUsername)


  if(!username){
    return(
      <UserName setUsername={setUsername} />
    )
  }

  return (
    <Box>
      <Navbar/>
      <Stack direction="row" spacing={2} justifyContent="space-between">
      <Sidebar/>
      <Feed />
      <Rightbar />
      </Stack>
    </Box>
  );
}

export default App;
