import Navbarsec from "./components/navBar/navBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from "./components/landingPage/landingPage";
import { BrowserRouter,Routes,Route,Link,NavLink} from "react-router-dom";
import ListingPage from "./components/listing_page/listingPage";
import LoginPage from "./components/loginpage/loginPage";
import SignUpPage from "./components/signupPage/signUpPage";
import FavoritesPage from "./components/favoritesPage/favoritesPage";
import MyListingPage from "./components/myListings/myListingsPage";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path ="/" element={<LandingPage/>}/>
          <Route path ="listings" element={<ListingPage />}/>
          <Route path ="/register" element={<SignUpPage/>}/>
          <Route path ="/login" element={<LoginPage/>}/>
          <Route path ="/myListings" element={<MyListingPage/>}/>
          <Route path ="/myFavorites" element={<FavoritesPage/>}/>
        </Routes>  
      </div>
    </BrowserRouter>
  );
}

export default App;
