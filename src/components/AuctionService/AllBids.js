import React, { useEffect, useState } from 'react';
import axios from 'axios';


function AllBids() {
    const [bids, setBids] = useState([]);
    //similar to componentDidMount and componenetDiduPDATE:
    useEffect(() => {
        axios.get("http://localhost:8081/getAllBids").then(resp => setBids(resp.data));

    }, [])
    return (
        <div>
            
                <h1>List Of Bids</h1>
            <table border={2} align="center">
                <thead>
                    <tr>
                        <th>Bid Id</th>
                        <th>Bid Value</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bids.map(b =>
                            <tr key={b.bidId}>
                                <td>{b.bidId}</td>
                                <td>{b.bidValue}</td>
                            </tr>
                             
                    )
                    }

                </tbody>
            </table>

                </div>
           
    )
}
export default AllBids;