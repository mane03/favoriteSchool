import React from 'react';
import {Col, Container, Row} from "reactstrap";
import downIcon from "../../../assets/down.svg"

const Header = () => {
    return (
        <Container fluid={true} className="home">
            <Container>
                <Row>
                    <Col>
                        <h1 className="home__title">ՔՈ ԱՊԱԳԱՆ ՔՈ ՁԵՌՔԵՐՈՒՄ Է!!!</h1>
                        <span className="homeBtn__outline">
                            <button className="home__btn">Դասընթացներ</button>
                        </span>
                        <a className="home__down" href="#"><img src={downIcon} alt="icon"/></a>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default Header;