import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CommentIcon from "@mui/icons-material/Comment";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Comment from "../Comment/Comment";
import { useState } from "react";

function Posts({ post }) {
  const [isCommentOpen, setIsCommentOpen] = useState(false);
  const [comment, setComment] = useState([]);

  function handleComment() {
    setIsCommentOpen(!isCommentOpen);
    console.log(comment.length);

    getComment();
  }

  function getComment() {
    console.log("Api called");

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
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={post.title}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {post.description ? post.description : post.title}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="comment" onClick={handleComment}>
          <CommentIcon />
        </IconButton>
      </CardActions>
      {isCommentOpen ? (
        <Comment comment={comment} postId={post._id} getComment={getComment} />
      ) : (
        ""
      )}
    </Card>
  );
}

export default Posts;
