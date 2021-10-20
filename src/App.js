import React, { useEffect, useContext } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignupPage from "./Pages/Signup";
import LoginPage from "./Pages/Login";
import { AuthContext, FirebaseContext } from "./Store/Context";
import Home from "./Pages/Home";
import { auth } from "./firebase_config";
import { onAuthStateChanged } from "@firebase/auth";
import Create from "./Pages/Create";
import View from "./Pages/ViewPost";
import Post from "./Store/PostContext";

function App() {
  const { setUser } = useContext(AuthContext);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  });

  return (
    <>
      <Post>
        <Router>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/signup">
            <SignupPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/view">
            <View />
          </Route>
        </Router>
      </Post>
    </>
  );
}

export default App;
