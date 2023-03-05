import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput } from 'mdb-react-ui-kit';
import '../styles/login.css'
const Login = () => {
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')

    let navigate = useNavigate();

    let handleSubmit = (e) => {
        e.preventDefault();

        let data = {email, password }
            axios.post('http://localhost:4000/', data)
                .then((res) => {
                    if(res.data.message === 'login success'){
                        navigate('/home')
                    }
                    else{
                        alert(res.data.message)
                    }
                })
    }
    return (
        <MDBContainer fluid>

            <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                <MDBCol col='12'>

                    <MDBCard className='bg-dark text-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '400px' }}>
                        <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

                            <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                            <p className="text-white-50 mb-5">Please enter your Email and password!</p>

                            <form action="" onSubmit={handleSubmit} className='d-flex flex-column align-items-center mx-auto w-100'>
                            <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Email address' id='formControlLg' type='email' size="lg" onChange={(e) => setEmail(e.target.value)} name='email' />
                            <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Password' id='formControlLg' type='password' size="lg" onChange={(e) => setPassword(e.target.value)}  name='password'/>
                            <MDBBtn outline className='mx-2 px-5 btn btn-primary' color='white' >Login</MDBBtn>
                            </form>
                            <div>
                                <p className="mb-0">Don't have an account? </p>
                                <Link to="/signup" className="text-white-50 fw-bold">Sign Up</Link>
                            </div>
                        </MDBCardBody>
                    </MDBCard>

                </MDBCol>
            </MDBRow>

        </MDBContainer>
    );
}

export default Login;