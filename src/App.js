import MyProfile from "./components/MyProfile.js";
import SignIn from "./components/SignIn.js";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import {Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import {Switch, Route} from "react-router-dom";
import ViewAllSearches from "./components/ViewAllSearches.js";
import Banner from "./components/Banner.js";
import SignUp from "./components/SignUp.js";
import Navigation from "./components/Navigation.js"
import Home from "./components/Home.js";
/*import logo from "./logo.jpg"*/
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import CreateAd from "./components/CreateAd.js";
import NotFound from "./components/NotFound.js";
import AuthState from "./context/AuthContext";
/*import ProtectedRoute from "./components/ProtectedRoute";*/

const App = () => {
  const [ads, setAds] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

useEffect(() => {
  const getAds= async () => {
  try{
      setLoading(true);
      const{data} = await axios.get(
          `${process.env.REACT_APP_GETMETHAT_API}/ads`
  );
  console.log(data);
  setAds(data);
  setLoading(false);
  } catch (error) {
      if(error.response) {
      setError(error.response.data.error);
      setTimeout(() => setError(null), 4000);
      setLoading(false);
  } else {
      setError("Network error");
      setTimeout(() => setError(null), 4000);
      setLoading(false);
  }
  }
};
!error && getAds();
},
[error]);

  return (
    <>
    
  <AuthState>
  <Switch>
    <Route exact path="/">
      <Banner/>
      <Navigation/>
       <Home />
       <CreateAd/>
    </Route>
    <Route exact path="/:ViewAllSearches">
       <Banner/>
       <Navigation/>
       <ViewAllSearches />  
    </Route>
    <Route exact path="/auth/signUp">
       <Banner/>
       <Navigation/>
       <SignUp/>
    </Route>
    <Route exact path="/auth/signIn">
      <Banner/>
      <Navigation/>
      <SignIn/>
    </Route>
    <Route exact path="/auth/myProfile">
      <Banner/>
      <Navigation/> 
      <MyProfile/>
    </Route>
    {/*<Route exact path="/"> 
      <Banner/>
      <Navigation/>
    
    </Route>*/}
    <Route path="*">
    <NotFound/>
    </Route>
    {/*<ProtectedRoute path="/new">
    <CreateAd/>
    </ProtectedRoute>*/}
    </Switch>
   </AuthState>
     </>
  )
};
export default App;
