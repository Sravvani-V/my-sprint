import React, {useState} from "react";
import  axios from 'axios';
import {Link, useNavigate} from "react-router-dom";
import Picture1 from '../assets/Picture1.jpg';

function VendorLogin(){

    const [vUsername,setVUserName]=useState("");
    const [vPassword,setPassword]=useState("");
    const[formErrors, setFormErrors] = useState("");
    //const [msg,setMessage]=useState("");

    const navigate=useNavigate();

    const handleSubmit=()=>{

        let errors={};
        if(!vUsername){
            errors['usernameError'] = "UserName is required."
        }
        if(!vPassword){
            errors['passwordError'] = "Password is required"
        }
        setFormErrors(errors);

        const noErrors = Object.keys(errors).length === 0;

        if(noErrors){
            const login = {
                userName : vUsername,
                password  : vPassword
            }
            axios.post("http://localhost:8081/vendor/login",login).then(resp =>{

                

                const obj={
                    vendorId:resp.data.vendorId,
                    customerName:resp.data.vendorName
                }

                localStorage.setItem("myToken",JSON.stringify(obj));

                alert("Successfully Logged In");

                navigate("/vendor/dashBoard");
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
                    <input className="tInput" type="text" placeholder="Enter login Id" name="vUsername" value={vUsername} onChange={(event)=>setVUserName(event.target.value)} required/>

                    {
                        formErrors.usernameError && <div style={{color: "red"}}>{formErrors.usernameError}</div>
                    }

                </div>
                <div>
                    <input className="tInput" type="password" placeholder="Enter Password" name="vPassword" value={vPassword} onChange={(event)=> setPassword(event.target.value)} required/>

                    {
                        formErrors.passwordError && <div style={{color: "red"}}>{formErrors.passwordError}</div>
                    }

                </div>
                <div>
                    <button className="btnLogic" onClick={handleSubmit}>SignIn</button>
                </div>
                <div>
                    <p style={{color:"white"}} >Not an User? <Link to={"/registration"} style={{color:"blue"}}>Register</Link></p>
                </div>
            </div>
        </div>
    )
}
export default VendorLogin;