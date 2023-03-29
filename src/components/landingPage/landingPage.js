import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarsec from "../navBar/navBar";
import Carousel from 'react-bootstrap/Carousel';
import "./landingPage.css";
import { Link,useNavigate } from "react-router-dom";
function LandingPage() {
    const navigate = useNavigate()
    return (
        <div>
            <Navbarsec />
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 lpi"
                        src="https://www.carlsonattorneys.com/wp-content/uploads/2022/07/airbnb-blog-scaled.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Find your new home</h3>
                      
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 lpi"
                        src="https://furnishrcdn-134f8.kxcdn.com/wp-content/uploads/white-minimal-bedroom.jpeg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        
                        
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 lpi"
                        src="https://www.quickenloans.com/blog/wp-content/uploads/2017/10/Landlord.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        
                       
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className='container-f'>
                <div class="col-sm-6-landingpage-card-container">
                    <div class="card text-center">
                        <div class="card-body">
                            <h5 class="card-title">Sign up as Tanent</h5>
                            <p class="card-text">Tenants who are looking for a place to live in the New York City area can browse through various rooms available for rent. The process of finding a suitable place can be daunting, but with the help of technology, the search can be made much easier. One such technology is an online platform that allows tenants to browse through rooms from the comfort of their own homes.

</p>
                            <a onClick={()=> navigate('/register')} class="btn btn-primary">signup</a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6-landingpage-card-container">
                    <div class="card text-center">
                        <div class="card-body">
                            <h5 class="card-title">Sign up as landlord</h5>
                            <p class="card-text">Landlords have been granted the permission to perform a range of actions on their rental applications, such as posting them, removing them, or adding new ones. Additionally, these users have the capability to engage in interactions with their tenants. The ability of landlords to manage their rental applications and communicate with their tenants efficiently plays a crucial role in the smooth functioning of the rental industry.</p>
                            <a  onClick={()=> navigate('/register')}class="btn btn-primary">signup</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;