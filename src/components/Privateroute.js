import React, { useContext } from "react";
import { route, Redirect } from "react-router-dom";
import { Authcontext } from "./auth";

const privaterout = ({ component: RouteComponent,...rest }) => {
    return (
        <route
        {...rest}
        render={routeprops=> 
            !!currentuser ? (
                <RouteComponent{...routeprops}/>
            ) : (
                <Redirect to={"/login"} />
            )
        }
        />
        );

};


export default privaterout