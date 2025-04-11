import './Registration.css';
import img1 from './image/logo.png';
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import axios from 'axios';

const Registration1 = () => {
    const[getdata,setdata] = useState([]);
    const[getfname,setfname] = useState();
    const[getlname,setlname] = useState();
    const[getemail,setemail] = useState();
    const[getpassword,setpassword] = useState();
    const[getcpassword,setcpassword] = useState();
    // const[getgender,setgender] = useState();

    const reg = () =>{
        axios.post('http://localhost/reacturvish/registration.php',{
            fname:getfname,
            lname:getlname,
            email:getemail,
            password:getpassword,
            cpassword:getcpassword,
            // gender:getgender,
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
            <div class="main1">
                <div class="container form">
                    <h2 class="text-center">Registration Form</h2>
                    <form id="registrationForm" method="post" novalidate>
                        <div class="form-group">
                            <label for="firstName">First Name</label>
                            <input type="text" class="form-control" id="firstName" name="firstName" required value={getfname} onChange={(e)=> { setfname(e.target.value)}} />
                            <div class="invalid-feedback">Please provide your first name.</div>
                        </div>

                        <div class="form-group">
                            <label for="lastName">Last Name</label>
                            <input type="text" class="form-control" id="lastName" name="lastName" required value={getlname} onChange={(e)=> { setlname(e.target.value)}} />
                            <div class="invalid-feedback">Please provide your last name.</div>
                        </div>

                        <div class="form-group">
                            <label for="email">Email address</label>
                            <input type="email" class="form-control" id="email" name="email" requiredvalue={getemail} onChange={(e)=> { setemail(e.target.value)}} />
                            <div class="invalid-feedback">Please provide a valid email address.</div>
                        </div>

                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" class="form-control" id="password" name="password" required minlength="6" value={getpassword} onChange={(e)=> { setpassword(e.target.value)}} />
                            <div class="invalid-feedback">Password must be at least 6 characters long.</div>
                        </div>

                        <div class="form-group">
                            <label for="confirmPassword">Confirm Password</label>
                            <input type="password" class="form-control" id="confirmPassword" name="confirmPassword" required value={getcpassword} onChange={(e)=> { setcpassword(e.target.value)}} />
                            <div class="invalid-feedback">Please confirm your password.</div>
                        </div>

                        {/* <div class="form-group">
                            <label for="gender">Gender</label>
                            <select class="form-control" id="gender" name="gender" required>
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                            <div class="invalid-feedback">Please select your gender.</div>
                        </div> */}
                        <br />
                        <button type="submit" class="btn btn-primary btn" onClick={reg}>Register</button>
                        <button type="submit" class=" btn-success btn"><a href='Login'>Login</a></button>
                    </form>
                </div>
            </div>
            
        </>
    )
}

export default Registration1;