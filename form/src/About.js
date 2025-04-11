import './App.css';
import Footer from './Footer';
import img12 from './image/about-img.png';

const About = () => {
    return (
        <>
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

            <Footer/>
        </>
    )
}

export default About;