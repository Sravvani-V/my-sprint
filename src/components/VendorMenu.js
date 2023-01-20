//creating array of navlinks so
//that we can import them in navbar
export const VendorMenu = [
    {
      title: "Home",
      url: "/",
      cName: "nav-links",
      icon: "fa-solid fa-house-user"
    },
  
    {
      title: "Products",
      // url: "/products/name",
      url:"/product/dashboard",
      cName: "nav-links",
      icon: "fa-solid fa-circle-info"
    },

    {
      title: "Auctions",
      // url: "/addproduct",
      url:"/auction/sidebar",
      cName: "nav-links",
      icon: "fa-solid fa-circle-info"
    },
  
    // {
    //   title: "Bids",
    //   url: "/update/product",
    //   cName: "nav-links",
    //   icon: "fa-solid fa-briefcase"
    // },
  
    // {
    //   title: "My Profile",
    //   url: "/contact",
    //   cName: "nav-links",
    //   icon: "fa-solid fa-address-book"
    // },
  
    {
      title: "LogOut",
      url: "/vendor/logout",
      cName: "nav-links-mobile"
    }
  ];
  