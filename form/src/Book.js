import './App.css';
import img13 from './image/map.avif';
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import axios from 'axios';


const Book = () => {
     const [getdata, setdata] = useState([]);
        const [getname, setname] = useState();
        const [getphone, setphone] = useState();
        const [getemail, setemail] = useState();
        const [getperson, setperson] = useState();
        const [getdate, setdate] = useState();

        const boo = () =>{
            axios.post('http://localhost/reacturvish/admin/booktable.php',{
                name:getname,
                phone:getphone,
                email:getemail,
                person:getperson,
                date:getdate,
                // action:'add'
            })
                .then(function (response) {
                    // handle success
                    console.log(response);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .finally(function () {
                    // always executed
                });
    
        }
    return (
        <>
           <div class="main_contact">
                <div class="container mt-5 form1">
                    <h2>Book A Table</h2>
                    <form id="myForm" novalidate method='post'>
                        <div class="mb-3">
                            <label for="name" class="form-label"></label>
                            <input type="text" class="form-control" id="name" name="name" placeholder='Your Name' required  value={getname} onChange={(e) => { setname(e.target.value)}} />
                            <div class="invalid-feedback">
                                Please provide your name.
                            </div>
                        </div>

                        <div class="mb-3">
                            <label for="phone" class="form-label"></label>
                            <input type="tel" class="form-control" id="phone" name="phone" pattern="^\d{10}$" placeholder='Phone Number' required value={getphone} onChange={(e) => { setphone(e.target.value)}} />
                            <div class="invalid-feedback">
                                Please provide a valid phone number (10 digits).
                            </div>
                        </div>

                        <div class="mb-3">
                            <label for="email" class="form-label"></label>
                            <input type="email" class="form-control" id="email" name="email" placeholder='Your Email' required value={getemail} onChange={(e) => { setemail(e.target.value)}} />
                            <div class="invalid-feedback">
                                Please provide a valid email address.
                            </div>
                        </div>

                        <div class="mb-3">
                            <label for="select" class="form-label"></label>
                              <input type="text" class="form-control" id="person" name="person" placeholder='How Many Person' required  value={getperson} onChange={(e) => { setperson(e.target.value)}} />
                            <div class="invalid-feedback">
                                Please select an option.
                            </div>
                        </div>

                        <div class="mb-3">
                            <label for="date" class="form-label"></label>
                            <input type="date" class="form-control" id="date" name="date" required value={getdate} onChange={(e) => { setdate(e.target.value)}} />
                            <div class="invalid-feedback">
                                Please provide a valid date.
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary" onClick={boo}>Book Now</button>
                    </form>
                </div>
                <div class="col-md-6 map">
                    <img src={img13} alt="" />
                </div>
            </div>


            <footer>
                <div class="footer_section">
                    <div class='sub_section1'>
                        <h3>Contact Us</h3><br />
                        <p><i class="fa-solid fa-location-dot"></i> Location</p>
                        <p><i class="fa-solid fa-phone"></i> Call +01 12345343</p>
                        <p><i class="fa-solid fa-envelope"></i> demo@gmail.com</p>
                    </div>
                    <div class='sub_section2'>
                        <h2>Fenta</h2><br />
                        <p>Necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with</p>
                        <a href=""><i class="fa-brands fa-facebook"></i></a><a href=""><i class="fa-brands fa-twitter"></i></a><a href=""><i class="fa-brands fa-square-instagram"></i></a><a href=""><i class="fa-regular fa-envelope"></i></a><br /><br /><br /><br />
                        <p>© 2024 All Rights Reserved By Free Html Templates
                        </p>
                        <p class="titl">© Distributed By Urvish Jivani</p>
                    </div>
                    <div class='sub_section3'>
                        <h3>Opning Hours</h3><br />
                        <p class="every">Everyday</p>
                        <p>10.00Am - 10.00Pm</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Book;