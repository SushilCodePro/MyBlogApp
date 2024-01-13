import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { app } from "./Firebase";
import { collection, getFirestore, onSnapshot } from "firebase/firestore";

function Home(){

    const[posts,setPosts]=useState([]);

    useEffect(()=>{
        const db=getFirestore(app);
        const Ref=collection(db,'posts');
        const unsubscribe=onSnapshot(Ref, (snapshot)=>{
            const data=snapshot.docs.map((doc)=>(
                {
                    id:doc.id,
                    ...doc.data(),
                }
            ))
            setPosts(data);
        });

        return () => {
            unsubscribe();
          };
    },[]);

    return(
        <div className="home">
            <h1>Tech Blog</h1>
            <div id="blog-by">Sushil</div>
            {
                posts.map((post,index)=>(
                   <div className="post" key={`post-${index}`}>
                        <Link to={`/postdetail/${post.id}`}>
                            <h3>{post.Title}</h3>
                        </Link>
                        <p>{post.SubTitle}</p>
                   </div> 
                ))
            }
        </div>
    )
}

export default Home;