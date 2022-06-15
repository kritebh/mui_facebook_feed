import React from 'react'
import {AppBar, Toolbar, Typography, styled,Avatar,Box} from "@mui/material"

import Notifications from "../../notifications/Notifications"

const StyledToolbar = styled(Toolbar)({
  display:"flex",
  justifyContent:"space-between",
})

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));


function Navbar({socket,username}) {

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{display:{xs:"none",sm:"block"}}}>Facebook Feed</Typography>
        <Typography variant="h5" sx={{display:{xs:"block",sm:"none"}}}>FF</Typography>
        <Icons>
          <Notifications socket={socket}></Notifications>
          <Avatar sx={{ width: 30, height: 30,bgcolor: "purple" }}>{username.substr(0, 1)}</Avatar>
        </Icons>
      </StyledToolbar>
    </AppBar>
  )
}

export default Navbar