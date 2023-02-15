import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarsec from "../navBar/navBar";
import "./landingPage.css"
function LandingPage() {
    return (
        <div>
            <Navbarsec />
            
                <div className='container-f'>
                    <div class="col-sm-6-landingpage-card-container">
                        <div class="card text-center">
                            <div class="card-body">
                                <h5 class="card-title">Special title treatment</h5>
                                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <a href="#" class="btn btn-primary">signup</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6-landingpage-card-container">
                        <div class="card text-center">
                            <div class="card-body">
                                <h5 class="card-title">Special title treatment</h5>
                                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <a href="#" class="btn btn-primary">signup</a>
                            </div>
                        </div>
                    </div>
                </div>
            
        </div>
    )
}

export default LandingPage;