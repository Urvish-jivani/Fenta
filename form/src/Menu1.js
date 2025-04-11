import './App.css';
import Footer from './Footer';
import axios from 'axios';
import { useState, useEffect } from "react";

// import img1 from './image/o1.jpg';
// import img2 from './image/o2.jpg';
// import img3 from './image/f1.png';
// import img4 from './image/f2.png';
// import img5 from './image/f3.png';
// import img6 from './image/f4.png';
// import img7 from './image/f5.png';
// import img8 from './image/f6.png';
// import img9 from './image/f7.png';
// import img10 from './image/f8.png';
// import img11 from './image/f9.png';
// import img12 from './image/about-img.png';
// import img13 from './image/map.avif';

const Menu1 = () => {
    const [post, setpost] = useState([]);
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
    return (
        <>
        <br /><br /><br /><br />
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
                     </div><br></br><br></br><br></br>
                     {/* <center><div class="view1">
                         <a href="http://">View More</a>
                     </div></center> */}
                    <Footer/>
        </>
    )

}

export default Menu1;