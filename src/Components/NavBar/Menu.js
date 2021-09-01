import React, {useState} from 'react';
import {Link} from "react-router-dom";

const Menu = ({sidebar, close}) => {


    return (
        <ul className={`navBar__list  ${sidebar ? " navBar__open" : "navBar__close"}`}>
            <li className="navBar__item" >
                <Link to="/" className="link navBar__link" onClick={close}>
                    Գլխավոր
                </Link>
            </li>
            <li className="navBar__item">
                <Link to="/aboutUs" className="link navBar__link" onClick={close}>
                    Մեր մասին
                </Link>
            </li>
            <li className="navBar__item">
                <Link to="/classes" className="link navBar__link" onClick={close}>
                    Դասընթացներ
                </Link>
            </li>
            <li className="navBar__item">
                <Link to="/contacts" className="link navBar__link" onClick={close}>
                    Կոնտակտներ
                </Link>
            </li>
            <li className="navBar__item">
                <Link to="/blog" className="link navBar__link" onClick={close}>
                    Բլոգ
                </Link>
            </li>
        </ul>
    );
};

export default Menu;
