import React from 'react';
import {Col, Container, Row} from "reactstrap";
import instagram from "../../assets/instagram.svg"
import telegram from "../../assets/telegram.svg"
import linkedin from "../../assets/linkedin.svg"
import facebook from "../../assets/facebook.svg"
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <Container fluid={true} className="footer">
            <Container >
                <Row>
                    <Col lg="2" md="2" sm="4" xs="5">
                        <ul className="footer__nav">
                            <li className="footer__item">
                                <Link to="/" className="link">
                                    <a className="footer__link" href="#">Glxavor ej</a>
                                </Link>
                            </li>
                            <li className="footer__item">
                                <Link to="/aboutUs" className="link">
                                    <a className="footer__link" href="#">Mer masin</a>
                                 </Link>
                            </li>
                            <li className="footer__item">
                                <Link to="/classes" className="link">
                                    <a className="footer__link" href="#">Dasyntacner</a>
                                </Link>
                            </li>
                            <li className="footer__item">
                                <Link to="contacts" className="link">
                                    <a className="footer__link" href="#">Contactner</a>
                                </Link>
                            </li>
                            <li className="footer__item"><a className="footer__link" href="#">Blog</a></li>
                        </ul>
                    </Col>
                    <Col lg={{size:3, offset: 1}} md={{size: 2, offset: 1}} sm={{size: 4, offset: 3}} xs={{size: 5,offset: 0}}>
                        <ul className="footer__nav">
                            <li className="footer__item"><a href="tel:+374(94)854884" className="footer__number footer__link">+374(94)854884</a></li>
                            <li className="footer__item"><a href="tel:+374(94)854884" className="footer__number footer__link">+374(94)854884</a></li>
                            <li className="footer__item"><a href="#" className="footer__address footer__link">Hakob Paroyan 3</a></li>
                        </ul>
                    </Col>
                    <Col lg={{size:2, offset: 4}} md={{size: 4, offset: 3}}>
                        <p className="footer__item footer__sub">Heteveq Mez</p>
                        <ul className="footer__nav footer__media">
                            <li className="footer__item">
                                <a href="#" className="footer__social">
                                    <img src={instagram} alt="insta"/>
                                </a>
                            </li>
                            <li className="footer__item">
                                <a href="#" className="footer__social">
                                    <img src={telegram} alt="telegram"/>
                                </a>
                            </li>
                            <li className="footer__item">
                                <a href="#" className="footer__social">
                                    <img src={facebook} alt="facebook"/>
                                </a>
                            </li>
                            <li className="footer__item">
                                <a href="#" className="footer__social">
                                    <img src={linkedin} alt="linkedin"/>
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default Footer;
