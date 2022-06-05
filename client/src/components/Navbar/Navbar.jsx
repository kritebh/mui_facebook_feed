import React,{useState} from 'react'
import {AppBar, Toolbar, Typography, styled, Badge,Box,Avatar,Menu,MenuItem} from "@mui/material"
import Notification from '@mui/icons-material/Notifications';

const StyledToolbar = styled(Toolbar)({
  display:"flex",
  justifyContent:"space-between",
})

const Icons = styled(Box)(({theme}) => ({
  display:"flex",
  gap:"20px",
  alignItems:"center"
}))

function Navbar() {

  const [open,setOpen] = useState(false)

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{display:{xs:"none",sm:"block"}}}>Facebook Feed</Typography>
        <Typography variant="h5" sx={{display:{xs:"block",sm:"none"}}}>FF</Typography>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Notification ></Notification>
          </Badge>
          {/* <Avatar src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" sx={{width:30,height:30}} onClick={()=>{setOpen(!open)}}></Avatar> */}
        </Icons>
        {/* <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e)=>setOpen(false)}  
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu> */}
      </StyledToolbar>
    </AppBar>
  )
}

export default Navbar