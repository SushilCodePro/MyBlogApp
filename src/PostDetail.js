import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { app } from "./Firebase";
import { collection, getFirestore, onSnapshot,doc } from "firebase/firestore";
import { useParams } from 'react-router-dom';

function PostDetail(){

    const[post,setPost]=useState([]);
    const{postId} =useParams();

    useEffect(()=>{
        // console.log(`useeffect`);
        const db=getFirestore(app);
        // const postRef = doc(collection(db, 'posts'), postId);//this also
        const postRef = doc(db, 'posts', postId);
        const unsubscribe = onSnapshot(postRef, (docSnapshot) => {
            if (docSnapshot.exists()) {
              // Check if the document exists before updating state
              setPost({
                id: docSnapshot.id,
                ...docSnapshot.data(),
              });
            } else {
              // Handle case where the document doesn't exist
              console.log(`No document with id ${postId}`);
              setPost(null); // You can set it to null or handle differently based on your use case
            }
          });

        return () => {
            unsubscribe();
          };
    },[postId]);

    return(
        <div className="post-detail">
            {/* console.log("PostDetail"); */}
           <h1>{post.Title}</h1>
           <p>{post.Content}</p>
        </div>
    )
}

export default PostDetail;