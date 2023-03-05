import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput } from 'mdb-react-ui-kit';
import '../styles/signup.css'
const SignUp = () => {
    let [name, setName] = useState('')
    let [number, setNumber] = useState('')
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let [confirmPassword, setConfirmPassword] = useState('')

    let navigate = useNavigate()

    let handleSubmit = (e) => {
        e.preventDefault();

        //data to be posted
        let data = { name, number, email, password, confirmPassword }
        if (name && email && password === confirmPassword) {
            axios.post('http://localhost:4000/signup', data)
                .then((res) => {
                    alert(res.data.message)
                    navigate('/')
                })
        }
        else {
            alert('invalid credentials')
        }
    }
    return (
        <MDBContainer fluid>

            <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                <MDBCol col='12'>

                    <MDBCard className='bg-dark text-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '400px' }}>
                        <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
                            <h2 className="fw-bold mb-2 text-uppercase">SignUp</h2>
                            <p className="text-white-50 mb-5">Please enter your details</p>
                            <form action="" onSubmit={handleSubmit} className=" d-flex flex-column align-items-center mx-auto w-100">
                                <MDBInput type="text" value={name} onChange={(e) => setName(e.target.value)} wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Name' id='formControlLg' size="lg" name='name' />
                                <MDBInput type="tel" value={number} onChange={(e) => setNumber(e.target.value)} wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Mobile Number' id='formControlLg' size="lg" name='number' />
                                <MDBInput type="email" value={email} onChange={(e) => setEmail(e.target.value)} wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Email' id='formControlLg' size="lg" name='email' />
                                <MDBInput type="password" value={password} onChange={(e) => setPassword(e.target.value)} wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Password' id='formControlLg' size="lg" name='password' />
                                <MDBInput type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Confirm Password' id='formControlLg' size="lg" name='confirmPassword' />
                                <MDBBtn outline className='mx-2 px-5 btn btn-primary' color='white' >SignUp</MDBBtn>
                            </form>
                            <div>
                                <p className="mb-0">Already have an account? <Link to="/" class="text-white-50 fw-bold">Login</Link></p>
                            </div>
                        </MDBCardBody>
                    </MDBCard>

                </MDBCol>
            </MDBRow>

        </MDBContainer>
    );
}

export default SignUp;