import React from 'react';
import {Col, Container, Row} from "reactstrap";
import rect from "../../../assets/rectangle.png"

const ChooseUs = () => {
    return (
        <Container fluid={true} className="chooseUs">
            <Container>
                <Row>
                    <Col xl={{size:4, offset:4}} >
                        <h2 className="block__title">WHY YOU SHOULD CHOOSE US</h2>
                        <span className="block__subtitle">WHY CHOOSE US</span>
                    </Col>
                </Row>
                <Row>
                    <Col xl="4" lg="4" className="chooseUs__div">
                        <div className="chooseUs__block">
                            <h2 className="chooseUs__num">01</h2>
                            <h4 className="chooseUs__blockName">CROSS-INDUSTRY EXPERTISE</h4>
                            <p className="chooseUs__text">Lorem Ipsum is simply dummy text of the
                                printing and typesetting industry. Lorem Ipsum has been the industry's
                                standard dummy text ever since the.</p>
                        </div>
                    </Col>
                    <Col xl="4" lg="4" className="chooseUs__div">
                        <div className="chooseUs__block">
                            <h2 className="chooseUs__num">02</h2>
                            <h4 className="chooseUs__blockName">CROSS-INDUSTRY EXPERTISE</h4>
                            <p className="chooseUs__text">Lorem Ipsum is simply dummy text of the
                                printing and typesetting industry. Lorem Ipsum has been the industry's
                                standard dummy text ever since the.typesetting industry. Lorem Ipsum has been the industry's
                                standard dummy text ever since the.</p>
                        </div>
                    </Col>
                    <Col xl="4" lg="4" className="chooseUs__div">
                        <div className="chooseUs__block">
                            <h2 className="chooseUs__num">03</h2>
                            <h4 className="chooseUs__blockName">CROSS-INDUSTRY EXPERTISE</h4>
                            <p className="chooseUs__text">Lorem Ipsum is simply dummy text of the
                                printing and typesetting industry. Lorem Ipsum has been the industry's
                                standard dummy text ever since the.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default ChooseUs;
