import axios from "axios";
import React, { useEffect, useState } from "react";

const baseURL = "https://jsonplaceholder.typicode.com/posts";
 
export default function TestApi (){
    const [post, setPost] = useState(null)
 
   React.useEffect(()=>{
        axios.get(`${baseURL}/1`).then((response)=>{
            setPost(response.data)
        })
    },[])


   async function CreatePost (){
        
         await axios.post(baseURL, {
               title: "me love you",
               body : "This is a new tile",
            }).then ((response)=>{
               setPost(response.data)
            })
        }

        if(!post) return "No Post!"

        return (
            <div>
                <h1>{post.title}</h1>
                <p>{post.body}</p>

                <button onClick={CreatePost}>Create Post</button>
            </div>
        )
   
}