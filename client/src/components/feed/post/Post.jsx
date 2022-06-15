import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CommentIcon from "@mui/icons-material/Comment";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Comment from "../comment/Comment";
import moment from 'moment'
import { useState } from "react";

function Posts({ post,socket }) {
  const [isCommentOpen, setIsCommentOpen] = useState(false);
  const [comment, setComment] = useState([]);
  console.log(post)
  function handleComment() {
    setIsCommentOpen(!isCommentOpen);
    getComment();
  }

  // Function to get all comment of specific post
  function getComment() {
    fetch(`http://localhost:8000/getcomment/${post._id}`)
      .then((data) => data.json())
      .then((data) => {
        setComment(data);
      });
  }

  return (
    <Card sx={{ margin: 5 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "purple" }} aria-label="recipe">
            {post.username.substr(0, 1)}
          </Avatar>
        }
        title={post.username}
        subheader={moment(Number(post.createdAt)).format('MMMM DD, YYYY')}
      />
      <CardContent>
        <Typography variant="body2" >
          {post.title}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="comment" onClick={handleComment}>
          <CommentIcon />
        </IconButton>
      </CardActions>
      {isCommentOpen ? (
        <Comment comment={comment} post={post} getComment={getComment} socket={socket}/>
      ) : (
        ""
      )}
    </Card>
  );
}

export default Posts;
