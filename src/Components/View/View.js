import React, { useState, useContext, useEffect } from "react";
import { PostContext } from "../../Store/PostContext";
import "./View.css";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db, auth } from "../../firebase_config";
import { onAuthStateChanged } from "firebase/auth";
import { useHistory } from "react-router-dom";

function View() {
  const [userDetails, setUserDetails] = useState();
  const { postDetails } = useContext(PostContext);
  const [currentUser, setCurrentUser] = useState(false);
  const history = useHistory();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User is logged in");
        setCurrentUser(user);
      } else {
        console.log("User is not logged in");
      }
    });
  }, []);

  useEffect(async () => {
    if (!currentUser) return;
    const q = query(
      collection(db, "users"),
      where("userId", "==", currentUser.uid)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      setUserDetails(data);
      console.log(data);
    });
  }, [currentUser]);

  return (
    <>
      <div className="viewParentDiv">
        <div className="imageShowDiv">
          <img src={postDetails.url} alt="" />
        </div>
        <div className="rightSection">
          <div className="productDetails">
            <h3>Price</h3>
            <p style={{ fontWeight: "bold" }}>Rs. {postDetails.price} </p>
            <span>{postDetails.createdAt}</span>
          </div>
          {userDetails && (
            <div className="contactDetails">
              <p>Seller details</p>
              <p>{userDetails.username}</p>
              <p>{userDetails.phone}</p>
            </div>
          )}
        </div>
      </div>
      <button className="back_home" onClick={() => history.push("/")}>
        Back to Home
      </button>
    </>
  );
}
export default View;
