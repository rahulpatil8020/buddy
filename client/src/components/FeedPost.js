import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import moment from "moment";
import { useDispatch } from "react-redux";
import { likeFeedPost, deleteFeedPost } from "../actions/feedPost";
// import useStyles from "./styles";

const FeedPost = ({ post }) => {
  const dispatch = useDispatch();
  // const classes = useStyles();

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: "15px",
        height: "100%",
        position: "relative",
      }}
      // className={classes.card}
    >
      <CardMedia
        sx={{
          height: 0,
          paddingTop: "56.25%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          backgroundBlendMode: "darken",
        }}
        // className={classes.media}
        image={
          post.image ||
          "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
        }
        title={post.title}
      />
      <div
        sx={{ position: "absolute", top: "20px", left: "20px", color: "white" }}
        // className={classes.overlay}
      >
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">
          {moment(post.createdOn).fromNow()}
        </Typography>
      </div>
      <div
        sx={{
          position: "absolute",
          top: "20px",
          right: "20px",
          color: "white",
        }}
        // className={classes.overlay2}
      >
        <Button
          style={{ color: "white" }}
          size="small"
          // onClick={() => setCurrentId(post._id)}
        >
          <MoreHorizIcon fontSize="default" />
        </Button>
      </div>
      <div
        sx={{
          display: "flex",
          justifyContent: "space-between",
          margin: "20px",
        }}
        // className={classes.details}
      >
        <Typography variant="body2" color="textSecondary" component="h2">
          {post.tags.map((tag) => `${tag} `)}
        </Typography>
      </div>
      <Typography
        sx={{ padding: "0 16px" }}
        // className={classes.title}
        gutterBottom
        variant="h5"
        component="h2"
      >
        {post.title}
      </Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.details}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          padding: "0 16px 8px 16px",
          display: "flex",
          justifyContent: "space-between",
        }}
        // className={classes.cardActions}
      >
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(likeFeedPost(post._id))}
        >
          <ThumbUpAltIcon fontSize="small" /> Like {post.likeCount}{" "}
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(deleteFeedPost(post._id))}
        >
          <DeleteIcon fontSize="small" /> Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default FeedPost;
