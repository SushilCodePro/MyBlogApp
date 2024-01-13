import { useState } from "react";
import { app } from './Firebase';
import { addDoc, collection, getFirestore } from "firebase/firestore";

function CreatePost() {
  const [Title, setTitle] = useState("");
  const [SubTitle, setSubTitle] = useState("");
  const [Content, setContent] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("Title", Title);
    console.log("SubTitle", SubTitle);
    console.log("Content", Content);

    const db = getFirestore(app);
    const Ref = collection(db, 'posts');

    try {
      // Use addDoc to add a new document to the 'post' collection
      const docRef = await addDoc(Ref, {
        Title,
        SubTitle,
        Content,
        CreatedAt: new Date(),
      });
      alert("Product added successfully");
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }

    // Clear the form fields after submission
    setTitle("");
    setSubTitle("");
    setContent("");
  }

  return (
    <div className="create-post">
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label>Title</label>
          <input value={Title} onChange={(e) => {setTitle(e.target.value)}} />
        </div>
        <div className="form-field">
          <label>SubTitle</label>
          <input value={SubTitle} onChange={(e) => setSubTitle(e.target.value)} />
        </div>
        <div className="form-field">
          <label>Content</label>
          <textarea value={Content} onChange={(e) => setContent(e.target.value)} />
        </div>
        <button className="create-post-btn" type="submit">
          Create Post
        </button>
      </form>
    </div>
  );
}

export default CreatePost;
