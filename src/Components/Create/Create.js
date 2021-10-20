import React, { Fragment, useState, useContext, useEffect } from "react";
import "./Create.css";
import { useHistory } from "react-router-dom";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage, db, auth } from "../../firebase_config";
import { collection, addDoc } from "firebase/firestore";

const Create = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const date = new Date();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
    }
  }, []);

  const handleSubmit = () => {
    setLoading(true);
    const storageRef = ref(storage, `/images/${image.name}`);
    uploadBytesResumable(storageRef)
      .then(({ ref }) => {
        getDownloadURL(ref).then((url) => {
          console.log(url);
          try {
            addDoc(collection(db, "Products"), {
              name,
              category,
              price,
              url,
              userId: auth.currentUser.uid,
              createdAt: date.toDateString(),
            }).then(() => {
              history.push("/");
            });
          } catch (e) {
            console.log(e.message);
          }
        });
      })
      .finally(() => setLoading(false));
  };

  return (
    <Fragment>
      <div className="container-fluid mt-5 mb-5">
        <div className="container pt-5 pb-5 main_box">
          <div className="container">
            <h3>Add your Products</h3>
          </div>
          <div className="container">
            <label htmlFor="fname" className="label_field">
              Product Name
            </label>
            <input
              type="text"
              id="fname"
              name="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
            />
            <br />
            <label htmlFor="fname" className="label_field">
              Category
            </label>
            <input
              className="input"
              type="text"
              id="fname"
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="form-control"
            />
            <br />
            <label htmlFor="fname" className="label_field">
              Price
            </label>
            <br />
            <input
              className="input"
              type="number"
              id="fname"
              name="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="form-control"
            />
            <br />
            <br />
            <img
              alt=""
              width="100%"
              height="auto "
              src={image ? URL.createObjectURL(image) : ""}
            ></img>
            <br />
            <br />
            <input
              type="file"
              onChange={(e) => {
                setImage(e.target.files[0]);
              }}
              className="form-control"
            />
            <br />
            <button onClick={handleSubmit} className="uploadBtn">
              {loading ? "Adding Your Product..." : "Add Product"}
            </button>
          </div>
        </div>
        <button className="back_home1" onClick={() => history.push("/")}>
          Back to Home
        </button>
      </div>
    </Fragment>
  );
};

export default Create;
