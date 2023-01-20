import React, {useState} from "react";
import  axios from 'axios';
import {Link, useNavigate} from "react-router-dom";
import Picture1 from '../assets/Picture1.jpg';

function Login(){

    const [cUsername,setCUserName]=useState("");
    const [cPassword,setPassword]=useState("");
    const[formErrors, setFormErrors] = useState("");
    //const [msg,setMessage]=useState("");

    const navigate=useNavigate();

    const handleSubmit=()=>{

        let errors={};
        if(!cUsername){
            errors['usernameError'] = "UserName is required."
        }
        if(!cPassword){
            errors['passwordError'] = "Password is required"
        }
        setFormErrors(errors);

        const noErrors = Object.keys(errors).length === 0;

        if(noErrors){
            const login = {
                userName : cUsername,
                password  : cPassword
            }
            axios.post("http://localhost:8081/customer/login",login).then(resp =>{

                

                const obj={
                    customerId:resp.data.customerId,
                    customerName:resp.data.customerName
                }

                localStorage.setItem("myToken",JSON.stringify(obj));

                alert("Successfully Logged In");

                navigate("/customer/dashBoard");
            })

            .catch(error =>{
                alert("Login Failed")


        })
    }
    }
    return(
        <div id="lBackground">
            <div align='center' className="login">
                <h2 id="loginhead">Login</h2>
                <img className="card-image-top" src={Picture1} alt="Card-image" id="user1img" style={{height:"125px"}}></img>

                <div>
                    <input className="tInput" type="text" placeholder="Enter login Id" name="cUsername" value={cUsername} onChange={(event)=>setCUserName(event.target.value)} required/>

                    {
                        formErrors.usernameError && <div style={{color: "red"}}>{formErrors.usernameError}</div>
                    }

                </div>
                <div>
                    <input className="tInput" type="password" placeholder="Enter Password" name="cPassword" value={cPassword} onChange={(event)=> setPassword(event.target.value)} required/>

                    {
                        formErrors.passwordError && <div style={{color: "red"}}>{formErrors.passwordError}</div>
                    }

                </div>
                <div>
                    <button className="btnLogic" onClick={handleSubmit}>SignIn</button>
                </div>
                <div>
                    <p style={{color:"black"}} >Not an User? <Link to={"/registration"} style={{color:"blue"}}>Register</Link></p>
                </div>
            </div>
        </div>
    )
}
export default Login;