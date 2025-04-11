import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

const Updatesignup = () => {
    const navigate = useNavigate();
    const location = useLocation(); 
    const queryParams = new URLSearchParams(location.search);
    const id = queryParams.get("id"); // Get the 'id' query parameter from the URL

    const [fname, setfname] = useState("");
    const [lname, setlname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [cpassword, setcpassword] = useState("");

    useEffect(() => {
        if (id) {
            axios
                .get(`http://localhost/reacturvish/admin/updatesignup.php?id=${id}`) // Corrected string interpolation
                .then((response) => {
                    console.log(response.data); // Check the response data in the console
                    if (response.data) {
                        // Pre-fill form fields with fetched data
                        setfname(response.data.fname);
                        setlname(response.data.lname);
                        setemail(response.data.email);
                        setpassword(response.data.password);
                        setcpassword(response.data.cpassword);
                    }
                })
                .catch((error) => {
                    console.error("Error fetching record details:", error);
                });
        }
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();  // Prevent the default form submission behavior

        const formData = new FormData();
        formData.append("id", id);
        formData.append("fname", fname);
        formData.append("lname", lname);
        formData.append("email", email);
        formData.append("password", password);
        formData.append("cpassword", cpassword);

        // Post the form data to update the item
        axios.post("http://localhost/reacturvish/admin/updatesignup1.php", formData)
            .then((response) => {
                console.log("Response:", response);  // Log the full response
                if (response.data.success) {
                    alert("record updated successfully!");
                    navigate("/Signup");
                } else {
                    alert("Failed to update record. Error: " + response.data.error || "Unknown error");
                }
            })
            .catch((error) => {
                console.error("Error updating record:", error);  // Log the error details
                alert("Error updating record: " + error.message);
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
                                    <h5 class="card-title fw-semibold mb-4">Update Signup</h5>
                                    <div class="card">
                                        <div class="card-body">
                                            <form method="POST">
                                                <div class="mb-3">
                                                    <label class="form-label">First Name</label>
                                                    <input type="text" class="form-control" id="exampleInputEmail1" value={fname} onChange={(e) => { setfname(e.target.value) }} />
                                                    {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                                                </div>
                                                <div class="mb-3">
                                                    <label class="form-label">Last Name</label>
                                                    <input type="text" class="form-control" id="exampleInputPassword1" value={lname} onChange={(e) => { setlname(e.target.value) }} />
                                                </div>

                                                <div class="mb-3">
                                                    <label class="form-label">Email</label>
                                                    <input type="text" class="form-control" id="exampleInputPassword1" value={email} onChange={(e) => { setemail(e.target.value) }} />
                                                </div>
                                                <div class="mb-3">
                                                    <label class="form-label">Password</label>
                                                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={password} onChange={(e) => { setpassword(e.target.value) }} />
                                                </div>

                                                <div class="mb-3">
                                                    <label class="form-label">Conform Password</label>
                                                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={cpassword} onChange={(e) => { setcpassword(e.target.value) }} />
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

export default Updatesignup;