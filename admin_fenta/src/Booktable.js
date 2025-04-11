import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import axios from 'axios';

const Booktable = () => {
    const [getdata, setdata] = useState([]);
    const [getname, setname] = useState();
    const [getphone, setphone] = useState();
    const [getemail, setemail] = useState();
    const [getperson, setperson] = useState();
    const [getdate, setdate] = useState();

    const book = () => {
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

            <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">

                <div className="body-wrapper">

                    <div class="container-fluid">
                        <div class="container-fluid">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title fw-semibold mb-4">Book Table</h5>
                                    <div class="card">
                                        <div class="card-body">
                                            <form method="POST">
                                                <div class="mb-3">
                                                    <label class="form-label">Your Name</label>
                                                    <input type="text" class="form-control" id="exampleInputEmail1"  value={getname} onChange={(e) => { setname(e.target.value)}} />
                                                    {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                                                </div>
                                                <div class="mb-3">
                                                    <label class="form-label">Phone No</label>
                                                    <input type="text" class="form-control" id="exampleInputPassword1" value={getphone} onChange={(e) => { setphone(e.target.value)}} />
                                                </div>

                                                <div class="mb-3">
                                                    <label  class="form-label">Email</label>
                                                    <input type="text" class="form-control" id="exampleInputPassword1" value={getemail} onChange={(e) => { setemail(e.target.value)}} />
                                                </div>
                                                <div class="mb-3">
                                                    <label class="form-label">How Many Person</label>
                                                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={getperson} onChange={(e) => { setperson(e.target.value)}} />
                                                </div>

                                                <div class="mb-3">
                                                    <label class="form-label">Date</label>
                                                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={getdate} onChange={(e) => { setdate(e.target.value)}} />
                                                </div>
                                                <div class="mb-3 form-check">
                                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                                                </div>
                                                <button type="submit" class="btn btn-primary" onClick={book}>Submit</button>
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
    )
}


export default Booktable;