import {
  Button,
  Grid,
  Paper,
  TextField,
  Chip,
  Typography,
  Stack,
} from "@mui/material";
import React, { useState } from "react";
import Input from "./Input";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createAdventurePost } from "../actions/adventurePosts";
const CreatePost = ({ postName, postLabel, type }) => {
  const initialFormData = {
    name: "",
    tags: [],
    postDetails: "",
    image: "",
    createdBy: "",
  };
  const [tagText, setTagText] = useState("");
  const [tagList, setTagList] = useState([]);
  const [formData, setFormData] = useState(initialFormData);
  const [selectedImage, setSelectedImage] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleDeleteTag = (tagName) => (e) => {
    setTagList(tagList.filter((tag) => tag !== tagName));
  };
  const onFileChange = (e) => {
    setSelectedImage(e.target.files[0]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      tags: [...tagList],
    });
    if (type === "feedpost") {
      // dispatch(feedpost(formData, navigate));
    } else {
      dispatch(createAdventurePost(formData));
    }
  };
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <Paper
        elevation={3}
        sx={{
          padding: 2,
          display: "flex",
          alignItems: "start",
          justifyContent: "space-around",
        }}
      >
        <Grid container spacing={3}>
          <Input
            name={"name"}
            handleChange={handleInputChange}
            label={postLabel}
            type="text"
            autoComplete="off"
            half
          />
          {/* <Grid item xs={12} sm={6}>
            <TextField
              name="adventureName"
              label="Post Caption"
              fullWidth
              variant="outlined"
              type="text"
              autoComplete="off"
            />
          </Grid> */}

          <Grid item xs={12} sm={6}>
            <TextField
              name="adventureTags"
              label="Tags"
              fullWidth
              variant="outlined"
              type="text"
              value={tagText}
              onChange={(e) => {
                setTagText(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  setTagList([...tagList, tagText]);
                  setTagText("");
                }
              }}
              autoComplete="off"
            ></TextField>
            {tagList.map((i) => {
              return (
                <Chip
                  label={i}
                  sx={{ marginTop: 1, marginRight: 1 }}
                  onDelete={handleDeleteTag(i)}
                />
              );
            })}
          </Grid>
          <Input
            name={"postDetails"}
            handleChange={handleInputChange}
            label={"Post Details"}
            type="text"
            autoComplete="off"
            rows={4}
            multiline
          />
          {/* <Grid item xs={12}>
            <TextField
              name="adventureDetails"
              label="Post Details"
              fullWidth
              variant="outlined"
              type="text"
              multiline
              rows={4}
              autoComplete="off"
            />
          </Grid> */}
          <Grid item sm={6} xs={12}>
            <Stack
              sx={{ display: "flex", alignItems: "center" }}
              direction={"row"}
              spacing={1}
            >
              <input
                accept="image/*"
                style={{ display: "none" }}
                id="raised-button-file"
                type="file"
                onChange={onFileChange}
              />
              <label htmlFor="raised-button-file">
                <Button variant="outlined" component="span">
                  Select Post Image
                </Button>
              </label>
              <Typography>{selectedImage?.name}</Typography>
            </Stack>
          </Grid>
          <Grid container justifyContent="center" item sm={6} xs={12}>
            <Button type="submit" sx={{ marginRight: 3 }} variant="contained">
              Upload
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </form>
  );
};

export default CreatePost;
