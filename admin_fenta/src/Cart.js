// import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
      // Get the cart from localStorage when the page loads
      const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
      setCart(savedCart); // Set the cart data
    }, []);
  
    // Handle changing the quantity of an item
    // const handleQuantityChange = (itemId, change) => {
    //   const updatedCart = cart.map((item) =>
    //     item.id === itemId
    //       ? { ...item, quantity: item.quantity + change }
    //       : item
    //   );
    //   setCart(updatedCart);
    //   localStorage.setItem("cart", JSON.stringify(updatedCart));
    // };
  
    // Handle removing an item from the cart
    const handleRemove = (itemId) => {
      const updatedCart = cart.filter((item) => item.id !== itemId);
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    };
  
    // Calculate the total price

   

    return (
        <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
        <div className="body-wrapper">
            <div className="row">
                <div className="col-lg-8 d-flex align-items-stretch">
                    {/* <div className="card w-100"> */}
                        <div className="card-body p-4">
                            <h5 className="card-title fw-semibold p-5">Add To Cart</h5>
                            <div className="table-responsive">
                                <table className="table text-nowrap mb-0 align-middle" id="table">
                                    <thead className="text-dark fs-4">
                                        <tr>
                                            <th className="border-bottom-0">
                                                <h6 className="fw-semibold mb-0">Id</h6>
                                            </th>
                                            <th className="border-bottom-0">
                                                <h6 className="fw-semibold mb-0">Item Name</h6>
                                            </th>
                                            <th className="border-bottom-0">
                                                <h6 className="fw-semibold mb-0">Details</h6>
                                            </th>
                                            <th className="border-bottom-0">
                                                <h6 className="fw-semibold mb-0">Price</h6>
                                            </th>
                                            <th className="border-bottom-0">
                                                <h6 className="fw-semibold mb-0">Image</h6>
                                            </th>
                                            {/* <th className="border-bottom-0">
                                                <h6 className="fw-semibold mb-0">Actions</h6>
                                            </th> */}
                                        </tr>
                                    </thead>
                                    <tbody>
                                                {
                                                   cart.map(item => (
                                                        <tr key={item.id}>
                                                            <td className="border-bottom-0">{item.id}</td>
                                                            <td className="border-bottom-0">{item.iname}</td>
                                                            <td className="border-bottom-0">{item.detaile}</td>
                                                            <td className="border-bottom-0">{item.prize}</td>
                                                            <td className="border-bottom-0"><img src={`http://localhost/reacturvish/admin/${item.image_im}`} className="card-img-top" alt={item.image_im} /></td>
                                                            <td className="border-bottom-0">
                                                            <Link className="btn btn-primary" onClick={() => handleRemove(item.id)}> 
                                                                 <i className="fa-solid fa-pen-to-square"></i> Remove</Link>
                                                            </td>
                                                           
                                                </tr>
                                                    ))
                                                }
                                            </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    // </div>
    );
}

export default Cart;


