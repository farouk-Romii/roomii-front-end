import Navbarsec from "./components/navBar/navBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from "./components/landingPage/landingPage";
import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
import ListingPage from "./components/listing_page/listingPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path ="/" element={<LandingPage/>}/>
        <Route path ="listings" element={<ListingPage />}/>
        <Route path ="/register" element={<LandingPage/>}/>
        <Route path ="/login" element={<LandingPage/>}/>
        <Route path ="/messages" element={<LandingPage/>}/>
        <Route path ="/favorites" element={<LandingPage/>}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
