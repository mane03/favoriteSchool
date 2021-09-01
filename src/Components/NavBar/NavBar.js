import React, {useState} from 'react';
import logo from "../../assets/logo_faveSchool.svg"
import {Col, Container, Row} from "reactstrap";
import {Link, withRouter} from "react-router-dom";
import Burger from "../AboutUs/Header/Burger";
import Menu from "./Menu";


const NavBar = () => {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => {
        setSidebar(!sidebar)
    };

    const closeSidebar = () => {
        setSidebar(false)
    }


    return (
        <Container fluid={true}>
            <Row  className={window.location.pathname === "/" ? "navBar navBar__fixed" : "navBar"}>
                <Col md="2" sm={{size: 2}} xs={{size: 2}}>
                    <Link to="/" className="link">
                        <a href="#">
                            <img className="navBar__logo" src={logo} alt="logo"/>
                        </a>
                    </Link>
                </Col>
                <Col lg={{size: 6, offset: 1}} md={{size: 7, offset: 1}} className="d-none d-md-block">
                    <Menu />
                </Col>
                <Col sm={{size: 1, offset: 5}} xs={{size: 1, offset: 8}} className="d-block d-md-none">
                    <Burger sidebar={sidebar}
                            showSidebar={showSidebar} />
                    <Menu sidebar={sidebar}
                          close={closeSidebar}  />
                </Col>
                <Col lg={{size: 2, offset: 1}} md={{size: 2, offset: 0}} className="d-none d-sm-block d-md-block" sm={{size: 2, offset: 1}}>
                    <span className="btn__outline">
                        <button className="navBar__btn">Դիմել</button>
                    </span>
                </Col>
            </Row>
        </Container>
    );
};

export default withRouter(NavBar);
