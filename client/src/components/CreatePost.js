import {
  Button,
  Grid,
  Paper,
  TextField,
  Chip,
  Typography,
  Stack,
  Dialog,
  DialogTitle,
  DialogActions,
  Slide,
} from "@mui/material";
import React, { useState } from "react";
import Input from "./Input";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createAdventurePost } from "../actions/adventurePosts";
import { createFeedPost } from "../actions/feedPost";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CreatePost = ({ postName, postLabel, type, formData, setFormData }) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [tagText, setTagText] = useState("");
  // const [formData, setFormData] = useState(initialFormData);
  const [selectedImage, setSelectedImage] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleDialogClose = () => {
    setDialogOpen(false);
  };
  const handleDeleteTag = (tagName) => (e) => {
    setFormData({
      ...formData,
      tags: formData.tags.filter((tag) => tag !== tagName),
    });
  };
  const onFileChange = (e) => {
    setSelectedImage(e.target.files[0]);
  };
  const confirmSubmit = (e) => {
    e.preventDefault();
    if (type === "feedPost") {
      dispatch(createFeedPost(formData, navigate));
    } else {
      dispatch(createAdventurePost(formData, navigate));
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setDialogOpen(true);
  };
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <Dialog
        open={dialogOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleDialogClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"You sure about this?"}</DialogTitle>
        <DialogActions>
          <Button onClick={handleDialogClose}>No</Button>
          <Button onClick={confirmSubmit}>Yes</Button>
        </DialogActions>
      </Dialog>
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
              name={"title"}
              handleChange={handleInputChange}
              label={postLabel}
              type="text"
              autoComplete="off"
              half
            />

            <Grid item xs={12} sm={6}>
              <TextField
                name="tags"
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
                    setFormData({
                      ...formData,
                      tags: [...formData.tags, tagText],
                    });
                    setTagText("");
                  }
                }}
                autoComplete="off"
              ></TextField>
              {formData.tags?.map((i) => {
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
              name={"details"}
              handleChange={handleInputChange}
              label={"Post Details"}
              type="text"
              autoComplete="off"
              rows={4}
              multiline
            />
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
    </>
  );
};

export default CreatePost;
