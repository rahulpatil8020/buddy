import {
  Button,
  Grid,
  Paper,
  TextField,
  Chip,
  Typography,
  Stack,
  Container,
} from "@mui/material";
import React, { useState } from "react";

const CreatePost = () => {
  const [tagText, setTagText] = useState("");
  const [tagList, setTagList] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const handleDeleteTag = (tagName) => (e) => {
    setTagList(tagList.filter((tag) => tag !== tagName));
  };
  const onFileChange = (e) => {
    setSelectedImage(e.target.files[0]);
  };
  return (
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
        <Grid item xs={12} sm={6}>
          <TextField
            name="adventureName"
            label="Post Caption"
            fullWidth
            variant="outlined"
            type="text"
            autoComplete="off"
          />
        </Grid>
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
        <Grid item xs={12}>
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
        </Grid>
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
          <Button sx={{ marginRight: 3 }} variant="contained">
            Upload
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CreatePost;
