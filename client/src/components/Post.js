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
} from "@mui/material";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import moment from "moment";
import { useDispatch } from "react-redux";
const Post = ({ post, likePost, deletePost }) => {
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
        sx={{
          "& .MuiCardHeader-content": {
            display: "block",
            overflow: "hidden",
          },
        }}
        title={
          <Tooltip title={post.title} arrow placement="top">
            <Typography variant="h6" noWrap>
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
        <Typography sx={{ paddingLeft: 2 }} variant="body2">
          {moment(post.createdOn).fromNow()}
        </Typography>
        <Button style={{ color: "blue" }} size="large">
          <MoreHorizIcon fontSize="medium" />
        </Button>
      </div>
      <div>
        <Typography
          sx={{ paddingLeft: 2 }}
          variant="body2"
          color="textSecondary"
          component="h2"
        >
          {post?.tags?.slice(0, 2).map((tag) => `${tag} `)}
        </Typography>
      </div>
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
      >
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(likePost(post._id))}
        >
          <ThumbUpAltIcon fontSize="small" /> Like {post.likeCount}{" "}
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(deletePost(post._id))}
        >
          <DeleteIcon fontSize="small" /> Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
