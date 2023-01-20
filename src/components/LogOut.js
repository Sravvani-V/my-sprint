import React from 'react';
import {useNavigate} from 'react-router-dom';

function LogOut(){

    const customer = JSON.parse(localStorage.getItem("myToken"));
    const navigate = useNavigate();

    const handleLogout = () =>{
        if(customer !== null){
            localStorage.removeItem("myToken");
            alert("Logged out successfully");
            navigate("/");
        }
    }

    return(<div>
        <button onClick={handleLogout} className="btn btn-primary">Logout</button>
        </div>)

}
export default LogOut;