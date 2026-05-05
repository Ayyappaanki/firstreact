import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Transaction from "./components/Transaction";
import Settings from "./components/Settings";
import Users from "./components/Users";
import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const logout = () => {
    Cookies.remove("jwt_token");
    navigate("/login");
  };
  return (
    <div className="main">
      <div className="sidebar">
        <Header />
      </div>

      <div className="content">
        <div className="header">
          <h1>Dashboard</h1>
          <button className="btn" onClick={logout}>
            Logout
          </button>
        </div>

        {children}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <div className="body">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <Layout>
                <Dashboard />
              </Layout>
            }
          />
          <Route
            path="/settings"
            element={
              <Layout>
                <Settings />
              </Layout>
            }
          />
          <Route
            path="/transaction"
            element={
              <Layout>
                <Transaction />
              </Layout>
            }
          />
          <Route
            path="/users"
            element={
              <Layout>
                <Users />
              </Layout>
            }
          />
        </Routes>
      </div>
    </div>
  );
};
export default App;
