import axios from 'axios';
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

const Signup = () => {
    const [post, setpost] = useState([]);
    useEffect(() => {
        axios.get('http://localhost/reacturvish/showregistration.php')
            .then(function (response) {
                // handle success
                console.log(response);
                setpost(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    },[]);

    const handleDelete = (id) =>{
        axios.post('http://localhost/reacturvish/admin/deletesignup.php', { id })
        .then(function (response) {
            console.log(response);
            // Update the state after deletion
            if (response.data.success) {
                setpost((prevPosts) => prevPosts.filter(post => post.id !== id));
            } else {
                alert("Failed to delete item.");
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    return (
        <>
            <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">

                <div className="body-wrapper">


                    <div class="row">
                        <div class="col-lg-8 d-flex align-items-stretch">
                            {/* <div class="card w-100"> */}
                                <div class="card-body p-4">
                                    <h5 class="card-title fw-semibold p-5">Sign Up</h5>
                                    <div class="table-responsive">
                                        <table class="table text-nowrap mb-0 align-middle">
                                            <thead class="text-dark fs-4">
                                                <tr>
                                                    <th class="border-bottom-0">
                                                        <h6 class="fw-semibold mb-0">Id</h6>
                                                    </th>
                                                    <th class="border-bottom-0">
                                                        <h6 class="fw-semibold mb-0">First-Name</h6>
                                                    </th>
                                                    <th class="border-bottom-0">
                                                        <h6 class="fw-semibold mb-0">Last-Name</h6>
                                                    </th>
                                                    <th class="border-bottom-0">
                                                        <h6 class="fw-semibold mb-0">Email</h6>
                                                    </th>
                                                    <th class="border-bottom-0">
                                                        <h6 class="fw-semibold mb-0">Password</h6>
                                                    </th>
                                                    <th class="border-bottom-0">
                                                        <h6 class="fw-semibold mb-0">confirm-Password</h6>
                                                    </th>                                                  
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    post.map((e) =>(
                                                    
                                                        <>
                                                <tr>
                                                    <td class="border-bottom-0"><h7 class="fw-semibold mb-0">{e.id}</h7></td>
                                                    <td class="border-bottom-0">
                                                        <h7 class="fw-semibold mb-1">{e.fname}</h7>
                                                        {/* <span class="fw-normal">Web Designer</span> */}
                                                    </td>
                                                    <td class="border-bottom-0">
                                                        <h7 class="mb-1 fw-semibold">{e.lname}</h7>
                                                    </td>
                                                    <td class="border-bottom-0">
                                                        <div class="d-flex align-items-center gap-2">
                                                            <h7 class="mb-1 fw-semibold">{e.email}</h7>
                                                        </div>
                                                    </td>
                                                    <td class="border-bottom-0">
                                                        <h7 class="mb-1 fw-semibold">{e.password}</h7>
                                                    </td>
                                                    <td class="border-bottom-0">
                                                        <h7 class="mb-1 fw-semibold">{e.cpassword}</h7>
                                                    </td>
                                                    
                                                    <td>
                                                        <Link className="btn btn-danger" onClick={() => handleDelete(e.id)}> 
                                                        <i className="fa-solid fa-pen-to-square"></i> Delete</Link>
                                                    </td>
                                                    <td>
                                                    <Link to={`/Updatesignup?id=${e.id}`} className="btn btn-primary">
                                                        <i className="fa-solid fa-pen-to-square"></i> Update
                                                    </Link>
                                                    </td>
                                                </tr>
                                                </>
                                                        
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
            <div class="py-6 px-6 text-center">
                <p class="mb-0 fs-4">Design and Developed by <a href="https://adminmart.com/" target="_blank" class="pe-1 text-primary text-decoration-underline">Urvishjivani.com</a></p>
            </div>

        </>
    )
};

export default Signup;
