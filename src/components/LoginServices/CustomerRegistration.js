import React,{useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

function CustomerRegistration(){
    const[cName, setCName]=useState("");
    const[cUserName,setCUserName]=useState("");
    const[cMobile, setCMobile]=useState("");
    const[cEmail,setCEmail]=useState("");
    const[cPassword,setCPassword]=useState("");

    const[cDoorNo, setCDoorNo]=useState("");
    const[cLocality,setCLocality]=useState("");
    const[cCity,setCCity]=useState("");
    const[cPincode,setCPincode]=useState("");
    const[cState,setCState]=useState("");

    const handleButton = () =>{
        const customer = {
            customerName : cName,
            customerLogin : cUserName,
            mobile : cMobile,
            email : cEmail,
            password : cPassword,
            
            customerAddressDto: {
                doorNo : cDoorNo,
                locality: cLocality,
                city: cCity,
                pincode : cPincode,
                state : cState
            }
        }
        axios.post("http://localhost:8081/customer/save", customer).then(resp => alert("customer saved successfully"));
    }
    return(
        <div className='registration' align='center'>
            <h3 className='registrationHeading'>Registration</h3>
            <table>
                <tr>
                    <td>
                        <div>
                            <input type='text' className='rInput' name='cName' value={cName} placeholder='Name' onChange={(event) => setCName(event.target.value)} required/> 
                        </div>
                    </td>
                    <td>
                        <div>
                            <input type='text' className='rInput' name='cUserName' value={cUserName} placeholder='UserName' onChange={(event)=> setCUserName(event.target.value)}/>
                        </div>
                    </td>
                </tr>


                <tr>
                    <td>
                        <div>
                            <input type='text' className='rInput' name='cMobile' value={cMobile} placeholder='Contact' onChange={(event) => setCMobile(event.target.value)} required/> 
                        </div>
                    </td>
                    <td>
                        <div>
                            <input type='text' className='rInput' name='cEmail' value={cEmail} placeholder='Email' onChange={(event)=> setCEmail(event.target.value)}/>
                        </div>
                    </td>
                </tr>

                <tr>
                    <td>
                        <div>
                            <input type='text' className='rInput' name='cDoorNo' value={cDoorNo} placeholder='DoorNo' onChange={(event) => setCDoorNo(event.target.value)} required/> 
                        </div>
                    </td>
                </tr>

                <tr>
                    <td>
                        <div>
                            <input type='text' className='rInput' name='cLocality' value={cLocality} placeholder='Locality' onChange={(event) => setCLocality(event.target.value)} required/> 
                        </div>
                    </td>
                    <td>
                        <div>
                            <input type='text' className='rInput' name='cCity' value={cCity} placeholder='City' onChange={(event)=> setCCity(event.target.value)}/>
                        </div>
                    </td>
                </tr>


                <tr>
                    <td>
                        <div>
                            <input type='text' className='rInput' name='cPincode' value={cPincode} placeholder='Pincode' onChange={(event) => setCPincode(event.target.value)} required/> 
                        </div>
                    </td>
                    <td>
                        <div>
                            <input type='text' className='rInput' name='cState' value={cState} placeholder='State' onChange={(event)=> setCState(event.target.value)}/>
                        </div>
                    </td>
                </tr>

                <tr>
                    <td>
                        <div>
                            <input type='password' className='rInput' name='cPassword' value={cPassword} placeholder='password' onChange={(event) => setCPassword(event.target.value)} required/> 
                        </div>
                    </td>
                    <td>
                        <div>
                            <input type='password' className='rInput' name='cState' placeholder='Confirm Password' required/>
                        </div>
                    </td>
                </tr>
                


            </table>
            <button type='submit' onClick={handleButton} className='btnRegister'>Register</button>
            <div style={{color: "white"}}>Existed User? <Link to={"/login"} style={{color:"blue"}}>SignIn</Link></div>
        </div>
    )
}

export default CustomerRegistration;