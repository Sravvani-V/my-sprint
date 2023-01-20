import React, { useEffect, useState } from 'react';

import axios from 'axios';

import { useParams } from 'react-router-dom';

import { Link } from 'react-router-dom';

// import Navbar from './Navbar';

// import Sidebar1 from './Sidebar1';



function UpdateVendor() {

    const{vid}=useParams();

    const [vendorId, setVendorId] = useState("");

    const [vendorName, setVendorName] = useState("");

    const [loginId, setLoginId] = useState("");

    const [emailId, setEmailId] = useState("");

    const [passWord, setPassWord] = useState("");

    const [mobileNum, setMobileNum] = useState("");



    useEffect(() => {

        axios.get("http://localhost:8081/vendor/" + vid).then(resp => {



            setVendorId(resp.data.vendorId);

            setVendorName(resp.data.vendorName);

            setLoginId(resp.data.loginId);

            setEmailId(resp.data.emailId);

            setPassWord(resp.data.passWord);

            setMobileNum(resp.data.mobileNum);

        });

    }, [])



    const updateProductSubmit = () => {

        const payload = {

            vendorId:vendorId,

            vendorName: vendorName,

            loginId: loginId,

            emailId: emailId,

            passWord: passWord,

            mobileNum: mobileNum

        }



        axios.put("http://localhost:8081/vendor/update", payload).then(resp => alert("Vendor Updated"));

    }

    return (<div>

        <div className="container">

       

        {/* <Navbar/>

        <Sidebar1/> */}

            <br/><br/><br/>

            <h1>Enter Vendor Details to Update</h1><br/><br/>

            <div className="form-group">



                <div>

                    <label id="vendorId">Vendor Id : </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                    <input type="text" name="vendorId" value={vendorId} className="form-control" onChange={(event) => setVendorId(event.target.value)} placeholder='Enter Vendor ID:'/><br/>

                </div>

                <br/>



                <div>

                    <label id="vendorName">Vendor Name : </label>

                    <input type="text" name="vendorName" value={vendorName} className="form-control" onChange={(event) => setVendorName(event.target.value)} placeholder='Enter vendor Name:'/>

                </div>

                <br/>



                <div>

                    <label id="loginId">LoginId : </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                    <input type="text" name="loginId" value={loginId} className="form-control" onChange={(event) => setLoginId(event.target.value)} placeholder='loginid:'/>

                </div>

                <br/>



                <div>

                    <label id="emailId">Email Id : </label>

                    <input type="email" name="emailId" value={emailId} className="form-control" onChange={(event) => setEmailId(event.target.value)} placeholder='Enter email:'/>

                </div>

                <br/>



                <div>

                    <label id="mobileNum">Mobile : </label>

                    <input type="text" name="mobileNum" value={mobileNum} className="form-control" onChange={(event) => setMobileNum(event.target.value)} placeholder='Enter Mobile:'/>

                </div>

                <br/>



                <div>

                    <label id="passWord">Password : </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                    <input type="text" name="passWord" value={passWord} className="form-control" onChange={(event) => setPassWord(event.target.value)} placeholder='Enter Password:'/>

                </div>

               

               

                <br/>

                <button onClick={UpdateVendor}>Update</button>



                <p><Link to="/"><b>Back</b></Link></p>

               

            </div>

        </div>

    </div>

    )



}

export default UpdateVendor;