import React, { useState } from "react";
import axios from 'axios';

const Item = () => {
    const [getiname, setiname] = useState('');
    const [getdetaile, setdetaile] = useState('');
    const [getprize, setprize] = useState('');
    const [getimage, setimage] = useState(''); // State to hold the selected image file

    const add = (e) => {
        e.preventDefault(); // Prevent the default form submission

        // Check if the required fields are filled
        if (!getiname || !getdetaile || !getprize || !getimage) {
            alert("Please fill all fields including the image!");
            return;
        }

        // Prepare the form data
        const formData = new FormData();
        formData.append('iname', getiname);
        formData.append('detaile', getdetaile);
        formData.append('prize', getprize);
        formData.append('image', getimage); // Append the image file

        // Log the formData to verify if it's correctly populated
        for (const value of formData.entries()) {
            console.log(value);
        }

        // Make the POST request
        axios.post('http://localhost/reacturvish/admin/additem.php', formData, {
            headers: {
                'Content-Type': 'multipart/form-data', // Important for file upload
            }
        })
        .then(function (response) {
            console.log(response.data);   // Log response from the server
            if (response.data.success) {
                alert("Item added successfully!");
                // Optionally clear the form after successful submission
                setiname('');
                setdetaile('');
                setprize('');
                setimage('');
            } else {
                alert("Failed to add item: " + response.data.message);
            }
        })
        .catch(function (error) {
            console.log(error);
            alert("An error occurred. Please try again.");
        });
    };

    const handleImageChange = (e) => {
        setimage(e.target.files[0]);
    };

    return (
        <>
            <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
                <div className="body-wrapper">
                    <div className="container-fluid">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title fw-semibold mb-4">Add Items</h5>
                                <div className="card">
                                    <div className="card-body">
                                    <form onSubmit={add} enctype="multipart/form-data">
                                        <div className="mb-3">
                                            <label htmlFor="itemName" className="form-label">Item Name</label>
                                            <input type="text" className="form-control" id="itemName" value={getiname} onChange={(e) => { setiname(e.target.value) }} />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="details" className="form-label">Details</label>
                                            <input type="text" className="form-control" id="details" value={getdetaile} onChange={(e) => { setdetaile(e.target.value) }} />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="prize" className="form-label">Prize</label>
                                            <input type="text" className="form-control" id="prize" value={getprize} onChange={(e) => { setprize(e.target.value) }} />
                                            <div id="emailHelp" className="form-text">Enter Prize In Dollar Wise.</div>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="image" className="form-label">Image</label>
                                            <input type="file" className="form-control" id="image" onChange={handleImageChange} />
                                        </div>
                                        <button type="submit" className="btn btn-primary">Submit</button>
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

export default Item;