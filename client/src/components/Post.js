import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  CardHeader,
  Tooltip,
  Avatar,
  IconButton,
  Skeleton,
} from "@mui/material";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";

function stringAvatar(name) {
  return {
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

const Post = ({ post, likePost, deletePost, loading }) => {
  const authData = useSelector((state) => state.authReducer.authData);
  const dispatch = useDispatch();
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
    >
      <CardHeader
        avatar={
          <Avatar
            alt="User Profile"
            {...stringAvatar(`${authData?.user?.name}`)}
          />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        sx={{
          "& .MuiCardHeader-content": {
            display: "block",
            overflow: "hidden",
          },
        }}
        title={
          <Tooltip title={post.title} arrow placement="top">
            <Typography variant="body1" noWrap sx={{ fontWeight: 500 }}>
              {post.title}
            </Typography>
          </Tooltip>
        }
        subheader={moment(post.createdOn).fromNow()}
      />
      <CardMedia
        sx={{
          height: 0,
          paddingTop: "56.25%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          backgroundBlendMode: "darken",
        }}
        image={
          post.image ||
          "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
        }
        title={post.title}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "horizontal",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* <Typography variant="h6">{post.createdBy}</Typography> */}
        {/* <Typography sx={{ paddingLeft: 2 }} variant="body2">
          {moment(post.createdOn).fromNow()}
        </Typography>
        <Button style={{ color: "blue" }} size="large">
          <MoreHorizIcon fontSize="medium" />
        </Button> */}
      </div>
      <Typography
        sx={{ paddingLeft: 2 }}
        variant="body2"
        color="textSecondary"
        component="h2"
      >
        {post?.tags?.slice(0, 2).map((tag) => `${tag} `)}
      </Typography>
      <CardContent>
        <Typography
          sx={{
            textAlign: "justify",
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: "4",
            WebkitBoxOrient: "vertical",
          }}
          variant="body2"
          color="textSecondary"
          component="p"
        >
          {post.details.substring(0, 150)}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          padding: "0 16px 8px 16px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(likePost(post._id, authData.user._id))}
        >
          {post?.likedBy?.includes(authData.user._id) ? (
            <ThumbUpAltIcon fontSize="small" />
          ) : (
            <ThumbUpOffAltIcon fontSize="small" />
          )}{" "}
          Like {post.likes > 0 ? post.likes : null}
        </Button>
        {post.createdBy === authData.user._id ? (
          <Button
            size="small"
            color="primary"
            onClick={() => dispatch(deletePost(post._id))}
          >
            <DeleteIcon fontSize="small" /> Delete
          </Button>
        ) : null}
      </CardActions>
    </Card>
  );
};

export default Post;
