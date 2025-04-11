import './App.css';
import axios from 'axios';
import { useState, useEffect } from "react";
import img1 from './image/o1.jpg';
import img2 from './image/o2.jpg';
// import img3 from './image/f1.png';
// import img4 from './image/f2.png';
// import img5 from './image/f3.png';
// import img6 from './image/f4.png';
// import img7 from './image/f5.png';
// import img8 from './image/f6.png';
// import img9 from './image/f7.png';
// import img10 from './image/f8.png';
// import img11 from './image/f9.png';
import img12 from './image/about-img.png';
import img13 from './image/map.avif';
import Footer from './Footer';
const Home = () => {
    const [post, setpost] = useState([]);
            const [getname, setname] = useState();
            const [getphone, setphone] = useState();
            const [getemail, setemail] = useState();
            const [getperson, setperson] = useState();
            const [getdate, setdate] = useState();
    useEffect(() => {
        axios.get('http://localhost/reacturvish/showitem.php')
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
    })

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
            <div class="header">
                <div class="container-fluid liti">
                    <h1>
                        Fast Food Restaurant
                    </h1>
                    <p>
                        Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam
                        quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos
                        nihil ducimus libero ipsam.
                    </p>
                </div>
                <div class="btn1">
                    <a href="Menu1">Order Now</a>
                </div>
            </div>
            <div class="main">
                <div class="container-fluid add">
                    <div class="img1">
                        <img src={img1} alt="" />
                    </div>
                    <div class="container-fluid item">
                        <p>Tasty Thursdays</p>
                        <h1>20%  <sub>off</sub></h1>
                        <div class="link">
                            <a href="http://">Order Now</a>
                        </div>
                    </div>

                </div>
                <div class="container-fluid add">
                    <div class="img1">
                        <img src={img2} alt="" />
                    </div>
                    <div class="container-fluid item">
                        <p>Pizza Days</p>
                        <h1>15%  <sub>off</sub></h1>
                        <div class="link">
                            <a href="http://">Order Now</a>
                        </div>
                    </div>
                </div>
            </div>

            <center><h1>Our Menu</h1></center>
            <ul class="filter_menu">
                <li class="active">All</li>
                <li>Burger</li>
                <li>Pizza</li>
                <li>Pasta</li>
                <li>Fries</li>
            </ul>
            <div class="main_card">
                {
                    post.map((e) =>{
                        return(
                            <>
                <div class="card" >
                    <img
                src={`http://localhost/reacturvish/admin/${e.image_im}`} // Corrected image path
                className="card-img-top"
                alt={e.image_im} // use item name for alt text.
                />
                    <div class="card-body card_body">
                        <h3>{e.iname}</h3>
                        <p class="card-text">{e.detaile}</p><br />
                        <span>{e.prize}</span><i class="fa-solid fa-cart-shopping"></i>
                    </div>
                </div>
                </>
                        )
                    })
                }
                {/* <div class="card" >
                    <img src={img4} class="card-img-top" alt="..." />
                    <div class="card-body card_body">
                        <h3>Delicious Burger</h3>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p><br />
                        <span>$11</span><i class="fa-solid fa-cart-shopping"></i>
                    </div>
                </div>
                <div class="card" >
                    <img src={img5} class="card-img-top" alt="..." />
                    <div class="card-body card_body">
                        <h3>Delicious Pizza</h3>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p><br />
                        <span>$22</span><i class="fa-solid fa-cart-shopping"></i>
                    </div>
                </div>
                
            </div>

            <div class="main_card">
                <div class="card" >
                    <img src={img6} class="card-img-top" alt="..." />
                    <div class="card-body card_body">
                        <h3>Delicious Pasta</h3>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p><br />
                        <span>$14</span><i class="fa-solid fa-cart-shopping"></i>
                    </div>
                </div>
                <div class="card" >
                    <img src={img7} class="card-img-top" alt="..." />
                    <div class="card-body card_body">
                        <h3>French Fries</h3>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p><br />
                        <span>$9</span><i class="fa-solid fa-cart-shopping"></i>
                    </div>
                </div>
                <div class="card" >
                    <img src={img8} class="card-img-top" alt="..." />
                    <div class="card-body card_body">
                        <h3>Delicious Pizza</h3>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p><br />
                        <span>$18</span><i class="fa-solid fa-cart-shopping"></i>
                    </div>
                </div>
            </div>

            <div class="main_card">
                <div class="card" >
                    <img src={img9} class="card-img-top" alt="..." />
                    <div class="card-body card_body">
                        <h3>Tasty Burger</h3>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p><br />
                        <span>$15</span><i class="fa-solid fa-cart-shopping"></i>
                    </div>
                </div>
                <div class="card" >
                    <img src={img10} class="card-img-top" alt="..." />
                    <div class="card-body card_body">
                        <h3>Tasty Burger
                        </h3>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p><br />
                        <span>$10</span><i class="fa-solid fa-cart-shopping"></i>
                    </div>
                </div>
                <div class="card" >
                    <img src={img11} class="card-img-top" alt="..." />
                    <div class="card-body card_body">
                        <h3>Delicious Pasta</h3>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p><br />
                        <span>$13</span><i class="fa-solid fa-cart-shopping"><a href=""></a></i>
                    </div>
                </div> */}
            </div>
            <center><div class="view1">
                <a href="Menu1">View More</a>
            </div></center>


            <div class="container-fluid">
                <div class="details">
                    <div class="details_img">
                        <img src={img12} alt="" />
                    </div>
                    <div class="details_liti">
                        <h2>We Are Fenta</h2>
                        <p>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
                            in some form, by injected humour, or randomised words which don't look even slightly believable. If you
                            are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in
                            the middle of text. All
                        </p>
                    </div>
                </div>
            </div>

            <div class="main_contact">
                <div class="container mt-5 form1">
                    <h2>Book A Table</h2>
                    <form id="myForm" novalidate method='post'>
                        <div class="mb-3">
                            <label for="name" class="form-label"></label>
                            <input type="text" class="form-control" id="name" name="name" placeholder='Your Name' value={getname} onChange={(e) => { setname(e.target.value)}} required />
                            <div class="invalid-feedback">
                                Please provide your name.
                            </div>
                        </div>

                        <div class="mb-3">
                            <label for="phone" class="form-label"></label>
                            <input type="tel" class="form-control" id="phone" name="phone" pattern="^\d{10}$" placeholder='Phone Number' value={getphone} onChange={(e) => { setphone(e.target.value)}}required />
                            <div class="invalid-feedback">
                                Please provide a valid phone number (10 digits).
                            </div>
                        </div>

                        <div class="mb-3">
                            <label for="email" class="form-label"></label>
                            <input type="email" class="form-control" id="email" name="email" placeholder='Your Email' value={getemail} onChange={(e) => { setemail(e.target.value)}} required />
                            <div class="invalid-feedback">
                                Please provide a valid email address.
                            </div>
                        </div>

                        <div class="mb-3">
                            <label for="select" class="form-label"></label>
                            <input type="text" class="form-control" id="person" name="person" placeholder='How Many Person' value={getperson} onChange={(e) => { setperson(e.target.value)}} required />
                            <div class="invalid-feedback">
                                Please select an option.
                            </div>
                        </div>

                        <div class="mb-3">
                            <label for="date" class="form-label"></label>
                            <input type="date" class="form-control" id="date" name="date" value={getdate} onChange={(e) => { setdate(e.target.value)}} required />
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
                <center><h1 class="what">What Says Our Customers</h1></center>
            <div class="main">
                <div class="container-fluid add2">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit voluptatibus obcaecati deleniti maiores numquam reprehenderit. Esse saepe molestiae dolorem corrupti architecto placeat voluptatem earum ex debitis, consequuntur possimus, quas vero?</p>
                    <br /><h2>Michal hug</h2>
                </div>
                <div class="container-fluid add2">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio architecto aliquid sunt doloremque ut fuga debitis facere porro id in quas fugiat nesciunt, magni, dolore dolor cupiditate. Voluptates, similique exercitationem.</p>
                    <br /><h2>Rohit Sharma</h2>
                </div>
            </div>

          <Footer/>

        </>
    )
}
export default Home;