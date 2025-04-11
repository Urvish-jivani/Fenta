import axios from 'axios';
// import { Link } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import img1 from './image/hero-bg.jpg';
import './Viewbooking.css';
// import React from 'react';
import { jsPDF } from 'jspdf';


const Viewbooking = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const id = queryParams.get("id");

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

    const generatePdf = () => {
        const doc = new jsPDF();

        // Add a title to the PDF
        doc.setFontSize(20);
        doc.text("Booking Details", 20, 20);

        // Add booking details to the PDF
        doc.setFontSize(12);
        doc.text(`Name: ${name}`, 20, 30);
        doc.text(`Phone: ${phone}`, 20, 40);
        doc.text(`Email: ${email}`, 20, 50);
        doc.text(`Persons: ${person}`, 20, 60);
        doc.text(`Date: ${date}`, 20, 70);



        // Save the generated PDF
        doc.save("booking-details.pdf");
    };


    return (
        <>
            <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
                <div className="body-wrapper">
                    <div class="container-fluid row">
                        <h1 className="title_viewdata">View Data In Detail</h1>
                        <div class="container-fluid col-6">
                            <div class="card">
                                <div class="card-body">
                                    <form method="POST">

                                        <div class="main_viewdata">
                                            <div className="sub1_viewdata">
                                                <h3>Name:</h3>
                                                <h3>Phone No:</h3>
                                                <h3>Email:</h3>
                                                <h3>Person:</h3>
                                                <h3 id='date'>Date:</h3>
                                                <button className="btn btn-primary" onClick={generatePdf}>Genrate Pdf</button>
                                            </div>
                                            <div className="sub2_viewdata">

                                                <div class="mb-3">
                                                    {/* <label class="form-label">Your Name</label> */}
                                                    <input type="text" id="exampleInputEmail1" value={name} onChange={(e) => { setname(e.target.value) }} />
                                                    {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                                                </div>
                                                <div class="mb-3">
                                                    {/* <label class="form-label">Phone No</label> */}
                                                    <input type="text" id="exampleInputPassword1" value={phone} onChange={(e) => { setphone(e.target.value) }} />
                                                </div>

                                                <div class="mb-3">
                                                    {/* <label class="form-label">Email</label> */}
                                                    <input type="text" id="exampleInputPassword1" value={email} onChange={(e) => { setemail(e.target.value) }} />
                                                </div>
                                                <div class="mb-3">
                                                    {/* <label class="form-label">How Many Person</label> */}
                                                    <input type="text" id="exampleInputEmail1" aria-describedby="emailHelp" value={person} onChange={(e) => { setperson(e.target.value) }} />
                                                </div>

                                                <div class="mb-3">
                                                    {/* <label class="form-label">Date</label> */}
                                                    <input type="text" id="exampleInputEmail1" aria-describedby="emailHelp" value={date} onChange={(e) => { setdate(e.target.value) }} />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="container-fluid col-6">
                            <div class="card">
                                <div class="card-body">
                                    <div class="img_viewdata">
                                        <img src={img1} alt="..." />
                                    </div>
                                    <div class="content_viewdata">
                                        <h6>Welcome to Fenta, where we bring a unique dining experience right to your table. At Fenta, we are passionate about serving freshly prepared, mouthwatering dishes made from the finest ingredients. Our menu is a blend of classic flavors with a modern twist, designed to satisfy all taste preferences. Whether you’re in the mood for a hearty meal or something lighter, we have something for everyone. From our cozy atmosphere to our friendly staff, Fenta is the perfect place to gather with friends and family or enjoy a quiet meal on your own. Visit us today and indulge in a dining experience that you won't forget!
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Viewbooking;