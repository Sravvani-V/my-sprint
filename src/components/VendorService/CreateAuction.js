// import React from "react";

// function CreateAuction() {
//     return(
//         <>
//         </>
//     )
// }
// export default CreateAuction;


import React, {useState} from "react";
import axios from 'axios';

function CreateAuction(){
    const[startDate, setStartDate]=useState("");
    const[endDate, setEndDate]=useState("");

    const[auctionStatus, setAuctionStatus]=useState("");

    const[pId, setPId] = useState("");

    const[vId, setVId]= useState("");

    const handleSubmit = () =>{
        const auction = {
            startDate : startDate,
            endDate : endDate,
            auctionStatus : auctionStatus,

            productDto:{
                productId: pId,
            },
            vendorDto: {
                vendorId: vId,
            }
        }
        axios.post("http://localhost:8081/auction/save",auction).then(resp =>
        alert("Auction is created with Id: "+resp.data.auctionId));
    }

    return(<div>
        <div>
            <label>Start Date</label>
            <input type="text" name="startDate" value={startDate} onChange={(event)=>setStartDate(event.target.value)}/>
        </div>

        <div>
            <label>End Date</label>
            <input type="text" name="endDate" value={endDate} onChange={(event)=>setEndDate(event.target.value)}/>
        </div>

        <div>
            <label>Auction Status</label>
            <input type="text" name="auctionStatus" value={auctionStatus} onChange={(event)=>setAuctionStatus(event.target.value)}/>
        </div>

        <div>
            <label>Product Id</label>
            <input type="text" name="pId" value={pId} onChange={(event)=>setPId(event.target.value)}/>
        </div>

        <div>
            <label>Vendor Id</label>
            <input type="text" name="vId" value={vId} onChange={(event)=>setVId(event.target.value)}/>
        </div>

        <button onClick={handleSubmit}>Save</button>

    </div>
    
    
    
    
    
    )
   
   
}
export default CreateAuction;
