// import './App.css'; 
import axios from 'axios'; 
import { useState, useEffect } from "react"; 
import { Link } from 'react-router-dom'; 
import { useNavigate } from 'react-router-dom'; 

const Showitem = () => {
    const [post, setpost] = useState([]);
    const [cart, setCart] = useState([]);
    const navigate = useNavigate();

    // Fetch data only once on mount
    useEffect(() => {
        axios.get('http://localhost/reacturvish/admin/showitem.php')
            .then(function (response) {
                // handle success
                console.log(response);
                setpost(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, []); // Add an empty dependency array to make it run only once on mount

    const handleDelete = (id) => {
        axios.post('http://localhost/reacturvish/admin/deleteitem.php', { id }) 
            .then(function (response) {
                console.log(response);
                if (response.data.success) {
                    // Remove the deleted item from the UI
                    setpost(prevPosts => prevPosts.filter(post => post.id !== id));
                } else {
                    alert("Failed to delete item.");
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    const handleAddToCart = (product) => {
        const currentCart = JSON.parse(localStorage.getItem("cart")) || [];
        const existingProductIndex = currentCart.findIndex((item) => item.id === product.id);
    
        if (existingProductIndex >= 0) {
          currentCart[existingProductIndex].quantity += 1;
        } else {
          product.quantity = 1;
          currentCart.push(product);
        }
    
        localStorage.setItem("cart", JSON.stringify(currentCart));
        setCart(currentCart);
    
        navigate("/Cart");
      };
    
    
    
    

    return (
        <>
            <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
                <div className="body-wrapper">
                    <div className="row">
                        <div className="col-lg-8 d-flex align-items-stretch">
                            {/* <div className="card w-100"> */}
                                <div className="card-body p-4">
                                    <h5 className="card-title fw-semibold p-5">Show Item</h5>
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
                                                    post.map((p) => (
                                                        <tr key={p.id}>
                                                            <td className="border-bottom-0">{p.id}</td>
                                                            <td className="border-bottom-0">{p.iname}</td>
                                                            <td className="border-bottom-0">{p.detaile}</td>
                                                            <td className="border-bottom-0">{p.prize}</td>
                                                            <td className="border-bottom-0"><img src={`http://localhost/reacturvish/admin/${p.image_im}`} className="card-img-top" alt={p.image_im} /></td>
                                                            <td className="border-bottom-0">
                                                            <Link className="btn btn-danger" onClick={() => handleDelete(p.id)}> 
                                                                 <i className="fa-solid fa-pen-to-square"></i> Delete</Link>
                                                            </td>
                                                            <td>
                                                            <Link to={`/Updateitem?id=${p.id}`} className="btn btn-primary">  
                                                                <i className="fa-solid fa-pen-to-square"></i> Update
                                                            </Link>
                                                            </td>
                                                            <td>
                                                              <button className="btn btn-primary" onClick={() => handleAddToCart(p)}>Cart</button>
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
            {/* </div> */}
            <div className="py-6 px-6 text-center">
                <p className="mb-0 fs-4">Design and Developed by <a href="https://adminmart.com/" target="_blank" className="pe-1 text-primary text-decoration-underline">Urvishjivani.com</a></p>
            </div>
        </>
    )
}

export default Showitem;
