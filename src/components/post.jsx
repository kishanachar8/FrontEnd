import Banner from "./banner";
import { useState,useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../styles/posts.css'
const Posts = () => {
    let [posts, setPosts] = useState([]);

    let title= 'All Posts'
    useEffect(() => {
        let fetchData = async () => {
            let res = await axios.get('http://localhost:4000/posts');
            let data=await res.data
            setPosts(data)
        }
        fetchData()
    })
    return ( 
        <div className="Posts">
            <Banner data={title}/>
            <div className="posts_lists">
                {
                    posts.map(data=>(
                        <div className="pst">
                            
                            <div className="post_img">
                            <img height="300px" width="350px" src={data.image} alt="" /> 
                            </div>
                            <h1>Title:{data.title}</h1> 
                            <h1>Author:{data.author}</h1>
                            <Link  className="btn btn-success " to={`/home/posts/${data._id}`}>Read Post</Link>
                        </div>
                    ))
                }
            </div>
        </div>
     );
}
 
export default Posts;