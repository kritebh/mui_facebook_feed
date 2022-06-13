import React, { useState } from "react";
import {
  TextField,
  Box,
  Typography,
  Grid,
  Paper,
  Divider,
  Avatar,
  IconButton,
  Stack,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

function Comment({ comment, post, getComment,socket }) {
  const [addComment, setAddComment] = useState("");

  // Upload Comment
  const sendComment = () => {
    fetch("http://localhost:8000/addcomment", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: localStorage.getItem("username"),
        postId: post._id,
        comment: addComment,
      }),
    })
      .then((data) => {
        setAddComment("");
        getComment();
        socket?.emit("sendNotification",{
          senderName : localStorage.getItem("username"),
          receiverName : post.username
        })
      });
  };


  return (
    <Box p={3}>
      {comment.length>0 ? 
      <Paper style={{ padding: "40px 20px" }}>
        {comment.map((c) => {
          return (
            <Box key={c._id}>
              <Grid container wrap="nowrap" spacing={2} >
                <Grid item>
                  <Avatar>{c.username.substr(0, 1)}</Avatar>
                </Grid>
                <Grid justifyContent="left" item xs zeroMinWidth>
                  <Typography sx={{ margin: 0, textAlign: "left" }}>{c.username} </Typography>
                  <Typography sx={{ textAlign: "left",marginLeft:"10px" }}>{c.comment}</Typography>
                </Grid>
              </Grid>
              <Divider variant="fullWidth" sx={{ margin: "15px 0" }} />
            </Box>
          );
        })}
      </Paper>
      :""}
      <Stack direction="row" alignItems="center">
        <TextField
          className="inputRounded"
          placeholder="Add Comment"
          variant="outlined"
          size="small"
          sx={{ width: "94%" }}
          margin="dense"
          value={addComment}
          onChange={(e) => {
            setAddComment(e.target.value);
          }}
        />
        <IconButton aria-label="Add Comment" onClick={sendComment}>
          <SendIcon fontSize="large" />
        </IconButton>
      </Stack>
    </Box>
  );
}

export default Comment;
