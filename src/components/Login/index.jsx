import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const Login = () => {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [errormsg, setmsg] = useState("");

  const onName = (event) => {
    setemail(event.target.value);
  };

  const onPassword = (event) => {
    setPassword(event.target.value);
  };
  const jwtToken = Cookies.get("jwt_token");
  if (jwtToken !== undefined) {
    return <Navigate to="/" replace />;
  }

  const onSubmittedData = async (event) => {
    event.preventDefault();

    const details = { email, password };

    const apiUrl =
      "https://mi767o4rag.execute-api.eu-north-1.amazonaws.com/api/auth/signin";

    const options = {
      method: "POST",

      body: JSON.stringify(details),
    };

    const response = await fetch(apiUrl, options);
    const fetchedData = await response.json();
    console.log(fetchedData);
    setmsg(fetchedData.message);
    if (response.ok) {
      Cookies.set("jwt_token", fetchedData.data.jwttoken);
      console.log(fetchedData.data.jwttoken);
      navigate("/");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="main">
      <form onSubmit={onSubmittedData} className="form">
        <h1>Sign in</h1>
        <p>Sign in to your account</p>

        <label htmlFor="username">Username</label>
        <br />
        <input
          type="text"
          id="username"
          value={email}
          onChange={onName}
          placeholder="Username"
        />

        <br />
        <br />

        <label htmlFor="password">Password</label>
        <br />
        <input
          type="password" // 4. Changed to 'password' type for security
          id="password"
          value={password}
          onChange={onPassword}
          placeholder="Password"
        />

        <div className="p">
          <p>Forgot password?</p>
        </div>

        <button type="submit" className="login-button">
          Sign In
        </button>

        {errormsg !== "" ? <p>{errormsg}</p> : null}
      </form>
    </div>
  );
};

export default Login;
