import axios from 'axios';
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';

const Showdata = () => {
    const [post, setpost] = useState([]);
    const navigate = useNavigate();
    const location = useLocation(); 
    const queryParams = new URLSearchParams(location.search);
    const id = queryParams.get("id");

    // Fetch data only once on mount
    useEffect(() => {
        axios.get('http://localhost/reacturvish/admin/showbooking.php')
            .then(function (response) {
                // handle success
                console.log(response);
                setpost(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, []);

    const handleDelete = (id) => {
        axios.post('http://localhost/reacturvish/admin/deletebook.php', { id })
        .then(function (response) {
            console.log(response);
            if (response.data.success) {
                setpost((prevPosts) => prevPosts.filter(post => post.id !== id));
            } else {
                alert("Failed to delete item.");
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    };

    const handleApprove = (id, currentStatus) => {
        const newStatus = currentStatus === "Pending" ? "Approved" : "Pending";
        
        axios.post("http://localhost/reacturvish/admin/updatestatus.php", 
            `id=${id}&status=${newStatus}`,  // Send as URL-encoded string
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded' // Set correct header for form data
                }
            }
        )
        
        .then((response) => {
            console.log("Response:", response);
            if (response.data && response.data.success) {
                setpost(prevPosts => 
                    prevPosts.map(post => 
                        post.id === id ? { ...post, status: newStatus } : post
                    )
                );
                alert(`Booking status updated to ${newStatus}!`);
            } else {
                alert(response.data?.message || "Failed to update booking status.");
            }
        })
        .catch((error) => {
            console.error("Error updating status:", error);
            alert("Error updating status: " + error.message);
        });
    };

    return (
        <>
            <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
                <div className="body-wrapper">
                    <div className="row">
                        <div className="col-lg-8 d-flex align-items-stretch">
                            {/* <div className="card w-100"> */}
                                <div className="card-body p-4">
                                    <h5 className="card-title fw-semibold p-5">Show Data</h5>
                                    <div className="table-responsive">
                                        <table className="table text-nowrap mb-0 align-middle">
                                            <thead className="text-dark fs-4">
                                                <tr>
                                                    <th className="border-bottom-0"><h6 className="fw-semibold mb-0">Id</h6></th>
                                                    <th className="border-bottom-0"><h6 className="fw-semibold mb-0">Name</h6></th>
                                                    <th className="border-bottom-0"><h6 className="fw-semibold mb-0">Phone No</h6></th>
                                                    <th className="border-bottom-0"><h6 className="fw-semibold mb-0">Email</h6></th>
                                                    <th className="border-bottom-0"><h6 className="fw-semibold mb-0">Person</h6></th>
                                                    <th className="border-bottom-0"><h6 className="fw-semibold mb-0">Date</h6></th>
                                                    <th className="border-bottom-0"><h6 className="fw-semibold mb-0">Status</h6></th>
                                                    {/* <th className="border-bottom-0"><h6 className="fw-semibold mb-0">Actions</h6></th> */}
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    post.map((e) => (
                                                        <tr key={e.id}>
                                                            <td className="border-bottom-0"><h7 className="fw-semibold mb-0">{e.id}</h7></td>
                                                            <td className="border-bottom-0"><h7 className="fw-semibold mb-1">{e.name}</h7></td>
                                                            <td className="border-bottom-0"><h7 className="mb-1 fw-semibold">{e.phone}</h7></td>
                                                            <td className="border-bottom-0"><h7 className="mb-1 fw-semibold">{e.email}</h7></td>
                                                            <td className="border-bottom-0"><h7 className="mb-1 fw-semibold">{e.person}</h7></td>
                                                            <td className="border-bottom-0"><h7 className="mb-1 fw-semibold">{e.date}</h7></td>
                                                            <td className="border-bottom-0">
                                                                <h7 className="mb-1 fw-semibold">{e.status}</h7>
                                                            </td>
                                                            <td className="border-bottom-0">
                                                                <button className="btn btn-danger" onClick={() => handleDelete(e.id)}>
                                                                    <i className="fa-solid fa-trash"></i> Delete
                                                                </button></td>
                                                                <td>
                                                                <Link to={`/Updatebooking?id=${e.id}`} className="btn btn-primary">
                                                                    <i className="fa-solid fa-pen-to-square"></i> Update
                                                                </Link></td>
                                                                <td>
                                                                <Link to={`/Viewbooking?id=${e.id}`} className="btn btn-primary">
                                                                    <i className="fa-solid fa-eye"></i> View More
                                                                </Link></td>
                                                                <td>
                                                                <button 
                                                                    className={`btn ${e.status === "Pending" ? "btn-success" : "btn-warning"}`} 
                                                                    onClick={() => handleApprove(e.id, e.status)}
                                                                >
                                                                    <i className="fa-solid fa-check"></i> {e.status === "Pending" ? "Approve" : "Set Pending"}
                                                                </button>
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
    );
}

export default Showdata;