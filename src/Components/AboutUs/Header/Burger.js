import React from 'react';
import {withRouter} from "react-router-dom";

const Burger = ({sidebar, showSidebar}) => {

    return (
        <div  className={` burger ${sidebar && "burger__close"} ${window.location.pathname === "/" && "burger__fixed"}`}
              onClick={showSidebar} >
            <div className="burger__item" />
            <div className="burger__item" />
            <div className="burger__item" />
        </div>
    );
};

export default withRouter(Burger);
