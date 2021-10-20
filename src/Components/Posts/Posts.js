import React, { useContext, useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import Heart from "../../assets/Heart";
import "./Post.css";
import { db, auth } from "../../firebase_config";
import { onAuthStateChanged } from "firebase/auth";
import { PostContext } from "../../Store/PostContext";
import { useHistory } from "react-router-dom";

function Posts() {
  const [products, setProducts] = useState([]);
  const [currentUser, setCurrentUser] = useState(false);
  const [loading, setLoading] = useState(true);
  const { setPostDetails } = useContext(PostContext);
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
    // const q = query(
    //   collection(db, "Products"),
    //   where("userId", "==", auth.currentUser.uid)
    // );
    const querySnapshot = await getDocs(collection(db, "Products"));
    // const querySnapshot = await getDocs(q)
    let documents = [];
    querySnapshot.forEach((doc) => {
      let product = doc.data();
      product.id = doc.id;
      documents.push(product);
    });
    setProducts(documents);
    setLoading(false);
    console.log(documents);
  }, [currentUser]);

  return loading ? (
    "Loading..."
  ) : (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
          {products.map((docs) => {
            return (
              <div
                className="card"
                onClick={() => {
                  setPostDetails(docs);
                  history.push("./view");
                }}
              >
                <div className="favorite">
                  <Heart></Heart>
                </div>
                <div className="image">
                  <img src={docs.url} alt="" />
                </div>
                <div className="content">
                  <p className="rate">Rs. {docs.price}</p>
                  <span className="kilometer">{docs.category}</span>
                  <p className="name"> {docs.name}</p>
                </div>
                <div className="date">
                  <span>{docs.createdAt}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          {products.map((docs) => {
            return (
              <div
                className="card"
                onClick={() => {
                  setPostDetails(docs);
                  history.push("./view");
                }}
              >
                <div className="favorite">
                  <Heart></Heart>
                </div>
                <div className="image">
                  <img src={docs.url} alt="" />
                </div>
                <div className="content">
                  <p className="rate">Rs. {docs.price}</p>
                  <span className="kilometer">{docs.category}</span>
                  <p className="name"> {docs.name}</p>
                </div>
                <div className="date">
                  <span>{docs.createdAt}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Posts;
