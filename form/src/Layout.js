import { Outlet, Link } from "react-router-dom";
import './Layout.css';
const Layout = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark  mt-3  nav">
                <div class="container-fluid p-2">
                    <a class="navbar-brand  title" href="" disabled>FENTA</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse  justify-content-center" id="navbarNav">
                        <ul class="navbar-nav ">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="Home">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="Menu1">Menu</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="About">About Us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="Book">Book Table</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" id="user" href="Registration1"><i class="fa-solid fa-user"></i></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active"  href=""><i class="fa-solid fa-magnifying-glass"></i></a>
                            </li>
                            <li class="nav-item ms-5 btn">
                                <a href="Menu1" class="nav-link active ur_1">
                                    Order Online
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    )
}
export default Layout;