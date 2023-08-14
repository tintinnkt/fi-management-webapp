import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../App";
import { useNavigate } from "react-router-dom";

const RestrictedPage = ({children}) => {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if(!auth) navigate('/login');
    }, [auth]);

    return (
        <React.Fragment>
            {children}
        </React.Fragment>
    );
};

export default RestrictedPage;