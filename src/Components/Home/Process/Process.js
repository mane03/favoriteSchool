import React from 'react';
import {Col, Container, Row} from "reactstrap";
import audience from "../../../assets/audience.svg"
import desktop from "../../../assets/desktop.svg"
import finale from "../../../assets/finale.svg"
import diploma from "../../../assets/diploma.svg"

const Process = () => {
    return (
        <Container>
            <Row>
                <Col xl={{size: 8, offset: 2}}>
                    <h2 className="block__title">USUMNAKAN GORCYNTAC</h2>
                </Col>
                <Col xl={{size:4, offset: 4}}>
                    <h4 className="process__subtitle block__subtitle ">GORCYNTAC</h4>
                </Col>
            </Row>
            <Row>
                <Col lg="4" className="process">
                    <img className="process__icon" src={audience} alt="icon"/>
                    <h3 className="process__title">Dasaxosutyunner</h3>
                    <p className="process__text">Lorem Ipsum is simply dummy text of the printing
                        and typesetting industry. Lorem Ipsum has been the industry's standard
                        dummy text ever since the.</p>
                </Col>
                <Col lg={{size: 4, offset: 3}} className="process">
                    <img className="process__icon" src={desktop} alt="icon"/>
                    <h3 className="process__title">Dasaxosutyunner</h3>
                    <p className="process__text">Lorem Ipsum is simply dummy text of the printing
                        and typesetting industry. Lorem Ipsum has been the industry's standard
                        dummy text ever since the.  Ipsum has been the industry's st</p>
                </Col>
            </Row>
            <Row>
                <Col lg="4" className="process">
                    <img className="process__icon" src={finale} alt="icon"/>
                    <h3 className="process__title">Dasaxosutyunner</h3>
                    <p className="process__text">Lorem Ipsum is simply dummy text of the printing
                        and typesetting industry. Lorem Ipsum has been the industry's standard  Ipsum has been the industry's st
                        dummy text ever since the.</p>
                </Col>
                <Col lg={{size: 4, offset: 3}} className="process">
                    <img className="process__icon" src={diploma} alt="icon"/>
                    <h3 className="process__title">Dasaxosutyunner</h3>
                    <p className="process__text">Lorem Ipsum is simply dummy text of the printing
                        and typesetting industry. Lorem Ipsum has been the industry's standard
                        dummy text ever since the.</p>
                </Col>
            </Row>
        </Container>
    );
};

export default Process;
