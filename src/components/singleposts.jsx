import { useEffect, useState } from "react";
import Banner from "./banner";
import { Link,useParams } from "react-router-dom";
import axios from "axios";
const SinglePost = () => {
    let title="Single Post"

    let [post,setPost]=useState([])
    let params=useParams()

    useEffect(()=> {
        let fetchData=async()=>{
            let response=await axios.get(`http://localhost:4000/posts/${params.id}`)
            let data=await response.data
            setPost(data)
        }
        fetchData()
    })
    
    return ( 
        <div className="singlePost">
            <Banner data={title}/>
            <div className="foodinfo text-center my-5 d-flex justify-content-center">
                <div className="foodimage col-5">
                    <img src={post.image} className="rounded-2"  alt="" height="400" width="500"/>
                </div>
                <div className="foodinfolist col-5 text-start">
                <h1 className="my-3">{post.title}</h1>
                <div className="line mb-3">
                    <p>{post.summary}</p>
                </div>
                <div className="location">
                <h2><img width="30" src="" alt="" />Location</h2>
                <div className="line mb-3"></div>
                <iframe src={post.location} className="my-3" width="400" height="350" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                </div>
            </div>
          <div className="linkbtn text-center" >
            <Link to='/home/posts' className="btn btn-outline-success btn-lg rounded-4 my-3 homebtn fw-bolder">Go back to Posts </Link>
          </div>   

        </div>
     );
}
 
export default SinglePost;