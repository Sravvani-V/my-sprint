import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

import './App.css';
import AllAuctions from './components/AuctionService/AllAuctions';
import AllBids from './components/AuctionService/AllBids';
import AuctionDashboard from './components/AuctionDashboard';
import Button from './components/Button';
import CustomerDashboard from './components/CustomerDashboard';
import Home from './components/Home';
import Login from './components/Login';


import Navbar from './components/Navbar';
import VendorDashboard from './components/VendorDashboard';
import CustomerRegistration from './components/LoginServices/CustomerRegistration';
import AddProduct from './components/VendorService/AddProduct';
import SearchProductById from './components/VendorService/SearchProductById';
import SearchProductByName from './components/VendorService/SearchProductByName';
import UpdateProduct from './components/VendorService/UpdateProduct';
import AuctionStatus from './components/AuctionService/AuctionStatus';
import AuctionByCategory from './components/AuctionService/AuctionByCategory';
import StyleHome from './components/StyleHome';
import AllAuctionCard from './components/AuctionService/AllAuctionCard';
import AuctionDetails from './components/AuctionService/AuctionDetails';
import ActiveAuctionCards from './components/AuctionService/ActiveAuctionCards';
import AllBidsCard from './components/AuctionService/AllBidsCard';
import BidDetails from './components/AuctionService/BidDetails';
import AllProductsCard from './components/AuctionService/AllProductsCard';
import ProductDetails from './components/AuctionService/ProductDetails';
import CustomerAuction from './components/CustomerServices/CustomerAuction';
import CustomerAuctionDetails from './components/CustomerServices/CustomerAuctionDetails';
import BidByAuction from './components/CustomerServices/BidByAuction';
import AuctionBids from './components/CustomerServices/AuctionBids';
import PlaceBid from './components/CustomerServices/PlaceBid';
import CustomerCopy from './components/CustomerServices/CustomerCopy';
import About from './components/About';
import Contact from './components/Contact';
import ProductDashboard from './components/VendorService/ProductDashboard';
import FetchAllProduct from './components/VendorService/FetchAllProducts';
import FetchAllProducts from './components/VendorService/FetchAllProducts';
import DeleteProduct from './components/VendorService/DeleteProduct';
import LogOut from './components/LogOut';
import AuctionSidebar from './components/VendorService/AuctionSidebar';
import CreateAuction from './components/VendorService/CreateAuction';
import UpdateAuction from './components/VendorService/UpdateAuction';
import ViewAllAuction from './components/VendorService/ViewAllAuctions';
import Footer from './components/Footer';
import FeedbackMenu from './components/CustomerServices/FeedbackMenu';
import UpdateCustomer from './components/CustomerServices/UpdateCustomer';



export default function App(){
  

  return(

    

      <BrowserRouter>
      <Routes>
       
       {/* <Route path="/" element={<Navbar/>}/> */}
       {/* <Route path="/login" element={<Login/>}/> */}

       <Route path="/" element={<Home/>}/>
        <Route path="/auction/dashboard" element={<AuctionDashboard/>}/>
        
        
        <Route path="/auction/details/:aid" element={<AuctionDetails/>}/>
        <Route path="/all/auctions" element={<AllAuctionCard/>}/>
        
        <Route path="/customer/dashboard" element={<CustomerDashboard/>}/>
        <Route path="/logout" element={<LogOut/>}/>

        <Route path="/vendor/dashboard" element={<VendorDashboard/>}/>
        
        <Route path="/button" element={<Button/>}/>
        <Route path="/registration" element={<CustomerRegistration/>}/>
        <Route path="/all/bids" element={<AllBids/>}/>

        <Route path="/login" element={<Login/>}/>
        
        <Route path="/products/name" element={<SearchProductByName/>}/>
        {/* <Route path='/update/product' element={<UpdateProduct/>}/> */}
        
        <Route path='/active' element={<ActiveAuctionCards/>}/>
        <Route path='/auction/details/:aid' element={<AuctionDetails/>}/>

        <Route path='/allbids' element={<AllBidsCard/>}/>
        <Route path='/bid/details/:pid' element={<BidDetails/>}/>

        <Route path="/product/dashboard" element={<ProductDashboard/>}/>
        <Route path="/addproduct" element={<AddProduct/>}/>
        <Route path="/product/all" element={<FetchAllProducts/>}/>
        <Route path="/allproducts" element={<AllProductsCard/>}/>
        <Route path="/product/details/:pid" element={<ProductDetails/>}/>
        <Route path="/product/delete" element={<DeleteProduct/>}/>
        <Route path="/product/update" element={<UpdateProduct/>}/>

        <Route path='/auction/sidebar' element={<AuctionSidebar/>}/>
        <Route path="/auction/create" element={<CreateAuction/>}/>
        <Route path="/auction/update" element={<UpdateAuction/>}/>
        <Route path="/auction/view/auctions" element={<ViewAllAuction/>}/>

         <Route path="/customerAuction" element={<CustomerAuction/>}/> 

        {/* <Route path="/customerAuction" element={<CustomerCopy/>}/> */}
        <Route path="/customer/auction/details/:aid" element={<CustomerAuctionDetails/>}/>
        <Route path="/bid/in/auction/:auctionId" element={<BidByAuction/>}/>

        <Route path="/place/bid/:auctionId" element={<PlaceBid/>}/>

        <Route path="/about" element={<About/>}/>

        <Route path="/contact" element={<Contact/>}/>


        <Route path="/footer" element={<Footer/>}/>

        <Route path="/feedback" element={<FeedbackMenu/>}/>

        <Route path="/customer/update" element={<UpdateCustomer/>}/>

        <Route path="/vendor/logout" element={<LogOut/>}/>
        

        {/* <Route path="/auction/bids/:aid" element={<AuctionBids/>}/> */}
        

      
         
      </Routes>
      
      </BrowserRouter>  
    
        //  <Navbar/>
        // <AuctionDashboard/>
        
        // <BrowserRouter>
        // <Routes>
        //   <Route path='/' element={<Login/>}/>
        //   <Route path="/customer/dashboard" element={<Home/>}/> 
        //   <Route path='/' element={<Button/>}/>
        // </Routes>
        // </BrowserRouter>
        

        
       
  );
}
