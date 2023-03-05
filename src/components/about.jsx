import Banner from "./banner";
import '../styles/about.css';
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
const About = () => {
 let title='About Page';
 let [posts,setPosts]=useState('')
 let [users,setUsers]=useState('')
 useEffect(()=>{
  let fetchData=async()=>{
  const res=await axios.get('http://localhost:4000/posts');
  const res1=await axios.get('http://localhost:4000/users');
      const data=await res.data;
      const data1=await res1.data;
      setPosts(data); 
      setUsers(data1); 
  }
  fetchData()
})
    return ( 
        <div className="about">
            <Banner data={title}/>
            
          <div className="about_main">
          <div className="div1">
                <img  src="/images/food8.jpeg" alt="" />
            </div>
            <div className="div2">
              <div className="div21">
              <h1>About Stories</h1>
                <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit deleniti .</h6>
              </div>
            <div className="boxs">
           <div className="box11">
           <div className="box1 bg-warning text-dark fw-bold"><p>300<br /> Years of Experienced</p></div> <br />
            <div className="box2 bg-warning text-dark fw-bold"><p>{posts.length}<br /> Foods</p></div> <br />
           </div>
           <div className="box22">
            
           <div className="box3 bg-warning text-dark fw-bold"><p>300<br /> Lifestyle</p></div> <br />
            <div className="box4 bg-warning text-dark fw-bold"><p>{users.length}<br /> Happy Customers</p></div> <br />
           </div>
            </div>
            </div>
          </div>
          <div className="main2">
            <div className="main21">
                <div className="btm1">
                    <h4>Watch Video</h4>
                </div>
                <div className="btm_heading">
                    <h1>Roger <br /> Bosch </h1>
                </div>
                <div className="para">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, magni! Odio, praesentium sint? Soluta totam nostrum sequi expedita eveniet ab rem sit saepe illo aspernatur! Deleniti necessitatibus nemo nihil inventore.</p>
                    
                </div>
                <div className="btm_last">
            <h4> Roger.Bosch</h4>
                </div>
            </div>
            <div className="main22">
                <img src="/images/food10.jpeg" alt="" />
            </div>
          </div>
        </div>

     );
}
 
export default About;