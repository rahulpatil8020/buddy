import "./App.css";
import HomePage from "./pages/Home/HomePage";
import FeedPage from "./pages/Feed/FeedPage";
import AddPostPage from "./pages/AddPost/AddPostPage";
import ChatPage from "./pages/Chat/ChatPage";
import ProfilePage from "./pages/Profile/ProfilePage";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/feed" element={<FeedPage />} />
        <Route path="/addPost" element={<AddPostPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
