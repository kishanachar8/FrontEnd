import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
    let[name,setName]=useState('')
    let[number,setNumber]=useState('')
    let[email,setEmail]=useState('')
    let[password,setPassword]=useState('')
    let[confirmPassword,setConfirmPassword]=useState('')

    let navigate=useNavigate()

    let handleSubmit=(e)=>{
        e.preventDefault();

        //data to be posted
        let data={name,number,email,password,confirmPassword}
        if(name && email && password === confirmPassword){
            axios.post('http://localhost:4000/signup',data)
            .then((res)=>{
                alert(res.data.message)
                navigate('/')
            })
        }
        else{
            alert('invalid credentials')
        }
    }
    return ( 
        <div className="signUp">
            <h1>SignUp Page</h1>
            <div className="signUp_form">
                <form action="" onSubmit={handleSubmit}>
                    <div className="Name">
                        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control" placeholder="Name"  name="name" required/>
                    </div>
                    <div className="mobile_number">
                        <input type="tel" value={number} onChange={(e)=>setNumber(e.target.value)}  className="form-control" placeholder="Phone Number" name="number" required/>
                    </div>
                    <div className="email">
                        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="Email" name="email" required/>
                    </div>
                    <div className="password">
                        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="password" name="password" required/>
                    </div>
                    <div className="confirm_password">
                        <input type="password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} className="form-control" placeholder="Confirm password" name="confirmPassword" required/>
                    </div>
                    <div className="signUp_button">
                        <button className="btn btn-outline-primary">SignUp</button>
                    </div>
                    <div className="login_button">
                        <p>Already a User?</p>
                        <Link to='/login' className="btn btn-outline-primary">Login</Link>
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default SignUp;