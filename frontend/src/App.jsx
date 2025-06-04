import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLayout from "./components/layout/UserLayout";
import Login from "./pages/login";
import Register from "./pages/register";
import Profile from "./pages/profile";              // ✅ Add this line
import AdminProfile from "./pages/AdminProfile";    // ✅ Add this line

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* User Routes */}
        <Route path="/*" element={<UserLayout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />

        {/* Admin Routes */}
        <Route path="/admin/profile" element={<AdminProfile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
