import React, { useState } from "react";
import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom';

function PlaceBid() {
    const [bValue, setBValue] = useState("");

    //const[cId,setCId] = useState("");

    const { auctionId } = useParams();

    const { customerId } = useParams();

    const [formErrors, setFormErrors] = useState("");

    const customer = JSON.parse(localStorage.getItem("myToken"));

    //customerId=customer.customerId;

    //const[aId, setAId] =useState("");

    const handleSubmit = () => {

        let errors = {};
        if (!bValue) {
            errors['ValueError'] = "Value should be positive!"
        }
        setFormErrors(errors);
        const noErrors = Object.keys(errors).length === 0;

        if (noErrors) {
            const bid = {
                bidValue: bValue,
                auctionBidDto: {
                    auctionId: auctionId,
                },
                customerDto: {
                    customerId: customer.customerId,
                }
            }
            axios.post("http://localhost:8081/place/bid", bid).then(resp =>
                alert("Bid is saved with Id: " + resp.data.bidId));

        }

    }
    return (<div>
        <div>
            <label>Bid Value</label>
            <input type="text" name="bValue" value={bValue} onChange={(event) => setBValue(event.target.value)} />
            {
                formErrors.ValueErrors && <div style={{ color: "red" }}>{formErrors.ValueError}</div>
            }

        </div>

        <button onClick={handleSubmit}>Save</button>


    </div>)
}
export default PlaceBid;
