import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLayout from "./components/layout/UserLayout";
import Login from "./pages/login";       // ✅ Added
import Register from "./pages/register"; // ✅ Added

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* User Routes */}
        <Route path="/*" element={<UserLayout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Admin Routes - Add AdminLayout later */}
        {/* <Route path="/admin/*" element={<AdminLayout />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
