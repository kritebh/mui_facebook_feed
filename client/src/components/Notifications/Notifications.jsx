import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { Box, Badge, styled, Typography } from "@mui/material";
import MuiPaper from "@mui/material/Paper";
import ClickAwayListener from "@mui/base/ClickAwayListener";
import MuiList from "@mui/material/List";
import MuiListItem from "@mui/material/ListItem";
import MuiDivider from "@mui/material/Divider";
import Notification from "@mui/icons-material/Notifications";
import Popper from "@mui/material/Popper";

import Grow from "@mui/material/Grow";

const Icons = styled(Box)(() => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
}));

const Paper = styled(MuiPaper)({
  transformOrigin: "top left",
  backgroundImage: "none",
});
const List = styled(MuiList)(({ theme }) => ({
  width: "300px",
  maxHeight: "400px",
  overflow: "auto",
}));
const ListItem = styled(MuiListItem)({
  display: "flex",
  flexDirection: "column",
});
const Divider = styled(MuiDivider)(({ theme }) => ({
  margin: "5px",
}));

function Notifications() {
  const [notifications, setNotifications] = useState([]);

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  // function handleNotification() {
  //   console.log(isNotificationPanelOpen);
  // }

  useEffect(() => {
    const socket = io("http://localhost:5000");
    console.log(socket.on("firstevent",(msg)=>{
      console.log(msg);
    }));
  }, []);

  return (
    <Box>
      <Icons onClick={() => setOpen(!open)}>
        <Badge badgeContent={notifications.length} color="error" showZero>
          <Notification />
        </Badge>
      </Icons>
      {open && notifications.length ? (
        <Popper
          id="notifications-popup"
          anchorEl={anchorRef.current}
          open={open}
          placement="bottom-end"
          transition
          disablePortal
          role={undefined}
          style={{
            position: "absolute",
            inset: "0px 0px auto auto",
            margin: " 0px",
            transform: "translate(-44px, 41px)",
          }}
        >
          {({ TransitionProps }) => (
            <ClickAwayListener
              onClickAway={() => {
                setOpen(false);
              }}
            >
              <Grow in={open} {...TransitionProps}>
                <Paper
                  sx={{
                    mt: 0.5,
                    border: "1px solid",
                  }}
                >
                  <List>
                    {notifications.map((message, index) => (
                      <React.Fragment key={message.id}>
                        <ListItem alignItems="flex-start">
                          <Typography gutterBottom>
                            <span
                              // eslint-disable-next-line react/no-danger
                              dangerouslySetInnerHTML={{ __html: message }}
                            />
                          </Typography>
                        </ListItem>
                        {index < notifications.length - 1 ? <Divider /> : null}
                      </React.Fragment>
                    ))}
                  </List>
                </Paper>
              </Grow>
            </ClickAwayListener>
          )}
        </Popper>
      ) : (
        ""
      )}
    </Box>
  );
}

export default Notifications;
