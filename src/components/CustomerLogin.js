import axios from 'axios';

import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom';



function CustomerLogin() {

    const [cUsername, setCUsername] = useState("");

    const [cPassword, setCPassword] = useState("");



    // const [msg, setMsg] = useState("");-

    const navigate = useNavigate();



    const handleSubmit = () => {

        const payload = {

            userName: cUsername,

            password: cPassword

        }

        axios.post("http://localhost:8081/Customer/login", payload).then(resp => {

            //setUser(resp.data);

            alert("Login success");

            const obj = {

                customerId: resp.data.customerId,

                customerName: resp.data.customerName,

            }

            localStorage.setItem("token", JSON.stringify(obj));



            navigate("/customer/dashboard");

        })

            .catch(error => {

                alert("login failed")

                // setMsg(error.response.data)

            })

    }

    return (

        <div className="container-fluid" align="center">

            <div className="ui form">



                <h1>Login Form</h1>

                <div className="form-group">

                    <label htmlFor='customerLogin'>Username</label>

                    <input type="text" name="cUsername" value={cUsername} className="form-control" id="customerLogin"

                        onChange={(event) => setCUsername(event.target.value)} />

                </div>



                <div>

                    <label htmlFor='password'>Password</label>

                    <input type="text" name="cPassword" value={cPassword} className="form-control" id="password"

                        onChange={(event) => setCPassword(event.target.value)} />

                </div>

                <button onClick={handleSubmit} className="btn btn-primary">Login</button>

                <br></br>

                <h5>Not Have an Account ?</h5>

                <Link to="/register" variant="body2">

                    Register here

                </Link>



            </div>

        </div>

    )

}



export default CustomerLogin;