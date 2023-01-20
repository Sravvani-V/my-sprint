import React, { useEffect, useState } from 'react';

import axios from 'axios';

import { useParams } from 'react-router-dom';

import { Link } from 'react-router-dom';



function UpdateCustomer() {



    const { cid } = useParams();



    const [cId, setCId] = useState("");

    const [cName, setCName] = useState("");

    const [cEmail, setCEmail] = useState("");

    const [cUserName, setCUserName] = useState("");

    const [cPassword, setCPassword] = useState("");

    const [cContactNo, setCContactNo] = useState("");



    const [cAddressId, setCAddressId] = useState("");

    const [cDoorNo, setCDoorNo] = useState("");

    const [cLocality, setCLocality] = useState("");

    const [cState, setCState] = useState("");

    const [cCity, setCCity] = useState("");

    const [cPincode, setCPincode] = useState("");



    useEffect(() => {

        axios.get("http://localhost:8081/customer/" + cid).then(resp => {

            setCId(resp.data.customerId);

            setCName(resp.data.customerName);

            setCEmail(resp.data.email);

            setCUserName(resp.data.userName);

            setCPassword(resp.data.password);

            setCContactNo(resp.data.contactNo);



            setCAddressId(resp.data.address.addressId);

            setCDoorNo(resp.data.address.doorNo);

            setCLocality(resp.data.address.locality);

            setCCity(resp.data.address.city);

            setCState(resp.data.address.state);

            setCPincode(resp.data.address.pincode);

        });

    }, [])



    const updateCustomerSubmit = () => {

        const payload = {




            customerId: cId,

            customerName: cName,

            email: cEmail,

            contactNo: cContactNo,

            userName: cUserName,

            password: cPassword,

            customeraddress: {

                addressId: cAddressId,

                doorNo: cDoorNo,

                locality: cLocality,

                city: cCity,

                state: cState,

                pincode: cPincode



            }



    }



    axios.put("http://localhost:8081/customer/update", payload).then(resp => alert("Customer Updated"));

}

return (<div>

    <div className="container">



<div className="form-group">



    <div>

        <label>Customer Id: </label>

        <input type="text" name="cId" value={cId} className="form-control" onChange={(event) => setCId(event.target.value)} />

    </div>

    <div>

        <label>Customer Name: </label>

        <input type="text" name="cName" value={cName} className="form-control"  onChange={(event) => setCName(event.target.value)} />

    </div>

    <div>

        <label>Email: </label>

        <input type="text" name="cEmail" value={cEmail} className="form-control"  onChange={(event) => setCEmail(event.target.value)} />

    </div>

    <div>

        <label>UserName: </label>

        <input type="text" name="cUserName" value={cUserName} className="form-control"  onChange={(event) => setCUserName(event.target.value)} />

    </div>

    <div>

        <label>Password: </label>

        <input type="text" name="cPassword" value={cPassword} className="form-control"  onChange={(event) => setCPassword(event.target.value)} />

    </div>

    <div>

        <label>ContactNo: </label>

        <input type="text" name="cContactNo" value={cContactNo}  className="form-control" onChange={(event) => setCContactNo(event.target.value)} />

    </div>

    <div>

        <label>AddressId: </label>

        <input type="text" name="cAddressId" value={cAddressId} className="form-control"  onChange={(event) => setCAddressId(event.target.value)} />

    </div>

    <div>

        <label>Door No: </label>

        <input type="text" name="cDoorNo" value={cDoorNo} className="form-control"  onChange={(event) => setCDoorNo(event.target.value)} />

    </div>

    <div>

        <label>Locality: </label>

        <input type="text" name="cLocality" value={cLocality} className="form-control"  onChange={(event) => setCLocality(event.target.value)} />

    </div>

    <div>

        <label>City: </label>

        <input type="text" name="cCity" value={cCity} className="form-control"  onChange={(event) => setCCity(event.target.value)} />

    </div>

    <div>

        <label>State: </label>

        <input type="text" name="cState" value={cState} className="form-control"  onChange={(event) => setCState(event.target.value)} />

    </div>

    <div>

        <label>Pincode: </label>

        <input type="text" name="cPincode" value={cPincode}  className="form-control" onChange={(event) => setCPincode(event.target.value)} />

    </div>



    <button onClick={updateCustomerSubmit}>Update</button>

    <p><Link to='/customer/dashboard'>Back </Link></p>

</div>

</div>

</div>

)



}

export default UpdateCustomer;