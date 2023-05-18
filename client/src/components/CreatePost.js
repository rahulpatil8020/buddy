import { Button, Grid, Paper, TextField, Chip } from "@mui/material";
import React, { useState } from "react";

const CreatePost = () => {
  const [tagText, setTagText] = useState("");
  const [tagList, setTagList] = useState([]);
  const handleDeleteTag = (tagName) => (e) => {
    setTagList(tagList.filter((tag) => tag !== tagName));
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
        <Grid item sm={6}>
          <TextField
            name="adventureName"
            label="Post Caption"
            fullWidth
            variant="outlined"
            type="text"
            autoComplete="off"
          />
        </Grid>
        <Grid item sm={6}>
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
        <Grid item sm={12}>
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
        <Grid item sm={6}>
          <input
            accept="image/*"
            style={{ display: "none" }}
            id="raised-button-file"
            type="file"
          />
          <label htmlFor="raised-button-file">
            <Button sx={{ spacing: 3 }} variant="raised" component="span">
              Upload Post Image
            </Button>
          </label>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CreatePost;
