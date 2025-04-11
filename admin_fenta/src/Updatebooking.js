import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

const Updatebooking = () => {
    const navigate = useNavigate();
    const location = useLocation(); 
    const queryParams = new URLSearchParams(location.search);
    const id = queryParams.get("id"); // Get the 'id' query parameter from the URL

    const [name, setname] = useState("");
    const [phone, setphone] = useState("");
    const [email, setemail] = useState("");
    const [person, setperson] = useState("");
    const [date, setdate] = useState("");

    useEffect(() => {
        if (id) {
            axios
                .get(`http://localhost/reacturvish/admin/updatebooking.php?id=${id}`) // Corrected string interpolation
                .then((response) => {
                    console.log(response.data); // Check the response data in the console
                    if (response.data) {
                        // Pre-fill form fields with fetched data
                        setname(response.data.name);
                        setphone(response.data.phone);
                        setemail(response.data.email);
                        setperson(response.data.person);
                        setdate(response.data.date);
                    }
                })
                .catch((error) => {
                    console.error("Error fetching booking details:", error);
                });
        }
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();  // Prevent the default form submission behavior

        const formData = new FormData();
        formData.append("id", id);
        formData.append("name", name);
        formData.append("phone", phone);
        formData.append("email", email);
        formData.append("person", person);
        formData.append("date", date);

        // Post the form data to update the item
        axios.post("http://localhost/reacturvish/admin/updatebooking1.php", formData)
            .then((response) => {
                console.log("Response:", response);  // Log the full response
                if (response.data.success) {
                    alert("booking updated successfully!");
                    navigate("/Showdata");
                } else {
                    alert("Failed to update booking. Error: " + response.data.error || "Unknown error");
                }
            })
            .catch((error) => {
                console.error("Error updating booking:", error);  // Log the error details
                alert("Error updating booking: " + error.message);
            });
    };

    return (
        <>
            <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">

                <div className="body-wrapper">

                    <div class="container-fluid">
                        <div class="container-fluid">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title fw-semibold mb-4">Update Booking</h5>
                                    <div class="card">
                                        <div class="card-body">
                                            <form method="POST">
                                                <div class="mb-3">
                                                    <label class="form-label">Your Name</label>
                                                    <input type="text" class="form-control" id="exampleInputEmail1" value={name} onChange={(e) => { setname(e.target.value) }} />
                                                    {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                                                </div>
                                                <div class="mb-3">
                                                    <label class="form-label">Phone No</label>
                                                    <input type="text" class="form-control" id="exampleInputPassword1" value={phone} onChange={(e) => { setphone(e.target.value) }} />
                                                </div>

                                                <div class="mb-3">
                                                    <label class="form-label">Email</label>
                                                    <input type="text" class="form-control" id="exampleInputPassword1" value={email} onChange={(e) => { setemail(e.target.value) }} />
                                                </div>
                                                <div class="mb-3">
                                                    <label class="form-label">How Many Person</label>
                                                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={person} onChange={(e) => { setperson(e.target.value) }} />
                                                </div>

                                                <div class="mb-3">
                                                    <label class="form-label">Date</label>
                                                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={date} onChange={(e) => { setdate(e.target.value) }} />
                                                </div>
                                                <div class="mb-3 form-check">
                                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                                                </div>
                                                <button type="submit" class="btn btn-primary" onClick={handleSubmit}>Submit</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Updatebooking;