import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

const Updateitem = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const id = queryParams.get("id"); // Get the 'id' query parameter from the URL

    const [iname, setiname] = useState("");
    const [detaile, setdetaile] = useState("");
    const [prize, setprize] = useState("");

    useEffect(() => {
        if (id) {
            axios
                .get(`http://localhost/reacturvish/admin/updateitem.php?id=${id}`) // Corrected string interpolation
                .then((response) => {
                    console.log(response.data); // Check the response data in the console
                    if (response.data) {
                        // Pre-fill form fields with fetched data
                        setiname(response.data.iname);
                        setdetaile(response.data.detaile);
                        setprize(response.data.prize);
                    }
                })
                .catch((error) => {
                    console.error("Error fetching item details:", error);
                });
        }
    }, [id]);
        
    const handleSubmit = (e) => {
        e.preventDefault();  // Prevent the default form submission behavior

        const formData = new FormData();
        formData.append("id", id);
        formData.append("iname", iname);
        formData.append("detaile", detaile);
        formData.append("prize", prize);

        // Post the form data to update the item
        axios.post("http://localhost/reacturvish/admin/updateitem1.php", formData)
            .then((response) => {
                console.log("Response:", response);  // Log the full response
                if (response.data.success) {
                    alert("Item updated successfully!");
                    navigate("/Showitem");
                } else {
                    alert("Failed to update item. Error: " + response.data.error || "Unknown error");
                }
            })
            .catch((error) => {
                console.error("Error updating item:", error);  // Log the error details
                alert("Error updating item: " + error.message);
            });
    };

    return (
        <>
            <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
                <div className="body-wrapper">
                    <div className="container-fluid">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title fw-semibold mb-4">Update Item</h5>
                                <div className="card">
                                    <div className="card-body">
                                        <form method="post">
                                            <div className="mb-3">
                                                <label htmlFor="iname" className="form-label">Item Name</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="iname"
                                                    value={iname}
                                                    onChange={(e) => setiname(e.target.value)}
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="detaile" className="form-label">Details</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="detaile"
                                                    value={detaile}
                                                    onChange={(e) => setdetaile(e.target.value)}
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="prize" className="form-label">Price</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="prize"
                                                    value={prize}
                                                    onChange={(e) => setprize(e.target.value)}
                                                />
                                                <div id="prizeHelp" className="form-text">Enter Price in Dollar.</div>
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="image" className="form-label">Add Image</label>
                                                <input
                                                    type="file"
                                                    className="form-control"
                                                    id="image"
                                                />
                                            </div>
                                            <div className="mb-3 form-check">
                                                <input
                                                    type="checkbox"
                                                    className="form-check-input"
                                                    id="exampleCheck1"
                                                />
                                                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                            </div>
                                            <button
                                                type="submit"
                                                className="btn btn-primary"
                                                onClick={handleSubmit}
                                            >
                                                Submit
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Updateitem;
