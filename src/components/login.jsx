import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Login = () => {
    let[email,setEmail]=useState('')
    let[password,setPassword]=useState('')

    let handleSubmit = () => {
    }
    return (
        <div className="login">
            <h1>Login Page</h1>
            <div className="login_form">
                <form action="" onSubmit={handleSubmit}>
                    <div className="email">
                        <input type="email" placeholder="email address" className="form-control" name="email" />
                    </div>
                    <div className="password">
                        <input type="password" placeholder="password" className="form-control" name="password" />
                    </div>
                    <div className="login_button">
                        <button className="btn btn-outline-primary">Login</button>
                    </div>
                    <div className="signUp_button">
                        <p>Are you a new user?</p>
                        <Link to='/signup' className='btn btn-outline-primary'>Sign up</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;