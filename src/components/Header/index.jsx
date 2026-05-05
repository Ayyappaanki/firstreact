import { Link } from "react-router";
import "./index.css";
const Header = () => {
  return (
    <ul>
      <li className="ul">
        <Link to="/">Dashboard</Link>
      </li>
      <li className="ul">
        <Link to="/transaction">Transaction</Link>
      </li>
      <li className="ul">
        <Link to="/users">Users</Link>
      </li>
      <li className="ul">
        <Link to="/settings">Settings</Link>
      </li>
    </ul>
  );
};
export default Header;
