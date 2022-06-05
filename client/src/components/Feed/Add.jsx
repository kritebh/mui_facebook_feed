import React, { useState } from "react";
import {
  Tooltip,
  Fab,
  Modal,
  Typography,
  Box,
  styled,
  TextField,
  Avatar,
  Button,
  Stack,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});

function Add({ username, getPosts }) {
  const [open, setOpen] = useState(false);

  const [postContent, setPostContent] = useState("");

  function handlePostContent() {
    fetch("http://localhost:8000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: localStorage.getItem("username"),
        title: postContent,
      }),
    })
      .then((data) => {
        console.log(data);
        data.json();
      })
      .then((data) => {
        setOpen(false);
        setPostContent("");
        getPosts();
      });
  }

  return (
    <>
      <Tooltip
        title="Add Post"
        sx={{ position: "fixed", bottom: 16, left: 16 }}
        onClick={(e) => setOpen(true)}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={500} height={280} bgcolor="white" p={3} borderRadius={5}>
          <Typography variant="h6" color="gray" textAlign="center">
            Create Post
          </Typography>
          <UserBox>
            <Avatar sx={{ width: 30, height: 30 }}>
              {" "}
              {username.substr(0, 1)}{" "}
            </Avatar>
            <Typography>{username}</Typography>
          </UserBox>
          <Stack alignItems="center" spacing={2}>
            <TextField
              id="standard-multiline-static"
              multiline
              rows={3}
              placeholder="What's on your mind?"
              variant="standard"
              sx={{ width: "100%" }}
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
            />
            <Button
              sx={{ width: "50%" }}
              variant="contained"
              onClick={handlePostContent}
            >
              Post
            </Button>
          </Stack>
        </Box>
      </StyledModal>
    </>
  );
}

export default Add;
