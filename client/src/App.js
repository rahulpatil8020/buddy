import React, { useState, useEffect } from "react";
import HomePage from "./pages/Home/HomePage";
import AppHeader from "./components/AppHeader/AppHeader";
import FeedPage from "./pages/Feed/FeedPage";
import AddPostPage from "./pages/AddPost/AddPostPage";
import ChatPage from "./pages/Chat/ChatPage";
import Auth from "./pages/Auth/Auth";
import ProfilePage from "./pages/Profile/ProfilePage";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material";
import { useDispatch } from "react-redux";
import { getAllAdventurePosts } from "./actions/adventurePosts";
const theme = createTheme({
  palette: {
    primary: {
      main: "#6418c9",
    },
    secondary: {
      main: "#7cc918",
    },
  },
});
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllAdventurePosts());
  }, [dispatch]);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <AppHeader />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/feed" element={<FeedPage />} />
          <Route path="/addPost" element={<AddPostPage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
        <Navbar />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
