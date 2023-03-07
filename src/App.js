import Navbarsec from "./components/navBar/navBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from "./components/landingPage/landingPage";
import { BrowserRouter,Routes,Route,Link,NavLink} from "react-router-dom";
import ListingPage from "./components/listing_page/listingPage";
import LoginPage from "./components/loginpage/loginPage";
import SignUpPage from "./components/signupPage/signUpPage";
import FavoritesPage from "./components/favoritesPage/favoritesPage";
import MyListingPage from "./components/myListings/myListingsPage";
import RoomDetails from "./components/roomlistingdetails.js/roomListingDetails";
import ChangeListingPage from "./components/editListingPage/editListingPage"
import CreateListingPage from "./components/createListing/createListing"



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path ="/" element={<LandingPage/>}/>
          <Route path ="/listings" element={<ListingPage />}/>
          <Route path ="/register" element={<SignUpPage/>}/>
          <Route path ="/login" element={<LoginPage/>}/>
          <Route path ="/myListings" element={<MyListingPage/>}/>
          <Route path ="/myFavorites" element={<FavoritesPage/>}/>
          <Route path ="/room/:id" element={<RoomDetails/>}/>
          <Route path ="/create" element={<CreateListingPage/>}/>
          <Route path ="/change/:id" element={<ChangeListingPage/>}/>
        </Routes>  
      </div>
    </BrowserRouter>
  );
}

export default App;
