import React, { useState, useContext } from "react";
import { FirebaseContext } from "../../Store/Context";
import olxLogo from "../../assets/OlxLogo.png";
import "./Login.css";
import { auth } from "../../firebase_config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useHistory } from "react-router-dom";

function Login() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const { app } = useContext(FirebaseContext);
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    setLoading(true);
    e.preventDefault();
    signInWithEmailAndPassword(auth, mail, password)
      .then(() => {
        history.push("/");
      })
      .catch((e) => {
        alert(e.message);
      })
      .finally(() => setLoading(false));
  };

  const moveToSignup = () => {
    history.push("/signup");
  };

  return (
    <>
      <div className="container main_login">
        <div className=" text-center">
          <img src={olxLogo} alt="olx" className="olxLogo" />
        </div>
        <div className="container text-center pt-1 pb-3">
          <h3 className="login_heading">Login</h3>
        </div>
        <form onSubmit={handleLogin}>
          <div className="">
            <input
              type="email"
              placeholder="Enter Email"
              className="login_email"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Enter Password"
              className="login_password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="submit_login">
              {loading ? "Logging You In" : "SignIn"}
            </button>
            <div className="text-center">
              <p onClick={moveToSignup} className="signup_link">
                New to Olx? Signup
              </p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
