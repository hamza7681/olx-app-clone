import React, { useState, useContext, useEffect } from "react";
import { FirebaseContext } from "../../Store/Context";
import olxLogo from "../../assets/OlxLogo.png";
import "./Signup.css";
import { auth, db } from "../../firebase_config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { useHistory } from "react-router-dom";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const { app } = useContext(FirebaseContext);
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
    }
  }, []);

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    createUserWithEmailAndPassword(auth, mail, password)
      .then(() => {
        updateProfile(auth.currentUser, {
          displayName: username,
        }).then(async () => {
          try {
            const docRef = await addDoc(collection(db, "users"), {
              userId: auth.currentUser.uid,
              username: username,
              phone: phone,
            }).then(() => {
              history.push("/login");
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {}
        });
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      <div className="container main_signup">
        <div className=" text-center">
          <img src={olxLogo} alt="olx" className="olxLogo" />
        </div>
        <div className="container text-center pt-1 pb-3">
          <h3 className="signup_heading">Sign Up</h3>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="">
            <input
              type="email"
              placeholder="Enter Email"
              className="signup_email"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Enter Password"
              className="signup_password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter userame"
              className="signup_name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="number"
              placeholder="Enter Number"
              className="signup_number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <button className="submit_signup">
              {loading ? "Creating user ..." : "SignUp"}
            </button>
            <div className="text-center">
              <p
                href="#"
                className="login_link"
                onClick={() => history.push("/login")}
              >
                Already a User? Login
              </p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
