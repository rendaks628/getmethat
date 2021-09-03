import {Redirect, Route} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../context/AuthContext.js";

const ProtectedRoute = ({component: Component, ...rest}) => {
    const {isAuthentificated} = useContext(AuthContext);
    return isAuthentificated ? <Route {...rest} render={() => <Component/>} /> : <Redirect to="/"/>;
};

export default ProtectedRoute;