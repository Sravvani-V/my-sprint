import { useState, useEffect } from 'react';
import axios from 'axios';

function AuctionByCategory() {
    const [pCategory, setPCategory] = useState("");
    const [auctions, setAuctions] = useState([]);
    const [products, setProducts] = useState([]);

    function handleSubmit(event) {
        event.preventDefault();
        let filteredProduct = products.filter(Product => Product.pCategory === pCategory)
        let productId = filteredProduct.map(p => p.productId)
    }
    async function fetchAuctions() {
        const { data } = await axios.get("http://localhost:8081/auction/getBy");
        setAuctions(data);
    }
    fetchAuctions();

    useEffect(() => {
        async function fetchProducts() {
            const { data } = await axios.get("http://localhost:8081/product/all");
            setProducts(data);
        }
        fetchProducts();

    }, []);

    return (
        <div>

            <h2> Auction Under Given category</h2>
            <form onSubmit={handleSubmit}>
                <label>Enter Category: <input type="text" value={pCategory} onChange={e => setPCategory(e.target.value)} /></label>
                <button type="submit">Submit</button>
            </form>
            
            <ul>
                {auctions.map(auction => (
                    <li key={auction.auctionId}>
                        {auction.startDate} - {auction.endDate} -
                        {auction.auctionStatus}
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default AuctionByCategory;
