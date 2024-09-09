import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import MainLayout from "./MainLayout/MainLayout"; // Main layout that includes Sidebar
import Categories from "./pages/Categories";
import NewsFeed from "./pages/NewsFeed";
import PlanPage from "./pages/PlanPage";
import Settings from "./pages/Settings";
import Template from "./pages/Template"; // Template component
import Users from "./pages/Users";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<NewsFeed />} /> {/* Default route */}
          <Route path="templates" element={<Template />} />{" "}
          {/* Templates route */}
          <Route path="plans" element={<PlanPage />} />{" "}
          <Route path="/categories" element={<Categories />} />
          <Route path="/users" element={<Users />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
