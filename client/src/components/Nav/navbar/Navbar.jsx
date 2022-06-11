import React from 'react'
import {AppBar, Toolbar, Typography, styled} from "@mui/material"

import Notifications from "../../notifications/Notifications"

const StyledToolbar = styled(Toolbar)({
  display:"flex",
  justifyContent:"space-between",
})



function Navbar({socket}) {

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{display:{xs:"none",sm:"block"}}}>Facebook Feed</Typography>
        <Typography variant="h5" sx={{display:{xs:"block",sm:"none"}}}>FF</Typography>
        <Notifications socket={socket}></Notifications>
      </StyledToolbar>
    </AppBar>
  )
}

export default Navbar