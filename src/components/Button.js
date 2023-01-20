import {useState} from 'react';
import Home from './Home';
import Login from './Login';
import VendorLogin from './VendorLogin';
import "./Button.css";

function Button(){
    const[page, setPage]=useState('');

    const handleCustomerClick = () =>{
        setPage('customer');
    };
    const handleVendorClick =() =>{
        setPage('vendor');
    };

    return(
        <div className='log'>
            <h4><b>Who is Logging In?</b></h4>
            <button onClick={handleCustomerClick}>Customer</button>
            <button onClick={handleVendorClick}>Vendor</button>
            {page === 'customer' && <Login/>}
            {page === 'vendor' && <VendorLogin/>}
        </div>
    )
}

export default Button;