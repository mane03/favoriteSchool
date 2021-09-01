import React from 'react';
import {Col, Container, Row} from "reactstrap";
import team from "../../../assets/team.png"

const Team = () => {
    return (
        <Container>
            <Row>
                <Col xl={{size: 4, offset:4}} >
                    <h2 className="block__title">HEROES OF OUR PROJECT</h2>
                </Col>
                <Col lg={{size: 4, offset: 4}}>
                    <h4 className="block__subtitle">our heroes</h4>
                </Col>
            </Row>
            <Row>
                <Col xl={{size: 3, offset: 2}} lg={{size: 4, offset:0}} md={{size: 6, offset: 3}} sm={{size: 8, offset: 1}} xs={{size: 10, offset: 1}}>
                    <div className="team__member">
                        <img src={team} alt="img" className="team__img"/>
                        <div className="team__info">
                            <h4 className="team__name">Jhon <br/>Doe</h4>
                            <p className="team__profession">graphic designer</p>
                        </div>
                    </div>
                </Col>
                <Col xl={{size: 3, offset: 2}} lg={{size: 4, offset: 2}} md={{size: 6, offset: 3}} sm={{size: 8, offset: 1}} xs={{size: 10, offset: 1}}>
                    <div className="team__member">
                        <img src={team} alt="img" className="team__img"/>
                        <div className="team__info">
                            <h4 className="team__name">Jhon <br/>Doe</h4>
                            <p className="team__profession">graphic designer</p>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xl={{size: 3, offset: 2}} lg={{size: 4, offset: 0}} md={{size: 6, offset: 3}} sm={{size: 8, offset: 1}} xs={{size: 10, offset: 1}}>
                    <div className="team__member">
                        <img src={team} alt="img" className="team__img"/>
                        <div className="team__info">
                            <h4 className="team__name">Jhon <br/> Doe</h4>
                            <p className="team__profession">graphic designer</p>
                        </div>
                    </div>
                </Col>
                <Col xl={{size: 3, offset: 2}} lg={{size: 4, offset:2}} md={{size: 6, offset: 3}} sm={{size: 8, offset: 1}} xs={{size: 10, offset: 1}}>
                    <div className="team__member">
                        <img src={team} alt="img" className="team__img"/>
                        <div className="team__info">
                            <h4 className="team__name">Jhon <br/>Doe</h4>
                            <p className="team__profession">graphic designer</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Team;
