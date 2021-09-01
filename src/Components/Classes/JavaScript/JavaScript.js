import React from 'react';
import {Col, Container, Row} from "reactstrap";
import javaScript from "../../../assets/classes/js.png"
import calendar from "../../../assets/classes/calendar.svg"
import online from "../../../assets/classes/online.svg"
import offline from "../../../assets/classes/offline.svg"
import paid from "../../../assets/classes/paid.svg"
import team from "../../../assets/team.png"
import Plan from "./Plan";

const JavaScript = () => {
    return (
        <>
        <Container fluid={true} className="javaScript__bg">
            <Container>
                <Row>
                    <Col xl="6" lg="8" md="8" sm="9" xs="9">
                        <p className="javaScript__text">
                            Lorem Ipsum is simply dummy text of the
                            printing and typesetting industry. Lorem
                            Ipsum has been the industry's standard dummy
                            text ever since the 1500s, when an unknown
                            printer took a galley of type and scrambled
                            it to make a type specimen book.
                        </p>
                    </Col>
                    <Col xl={{size: 2, offset: 4}} lg={{size: 2, offset: 2}} md={{size: 3, offset: 1}} sm={{size: 3, offset: 0}}  xs={{size: 3, offset: 0}}>
                        <img src={javaScript} className="javaScript__img" alt="icon"/>
                    </Col>
                </Row>
                <Row>
                    <Col xl="3">
                        <a href="#" target="_blank" className="javaScript__btn">Grancvel</a>
                    </Col>
                </Row>
            </Container>
        </Container>
        <Container>
           <Row>
               <Col xl={{size: 8, offset: 2}} lg={{size: 10, offset: 1}} md={{size: 12, offset: 0}} sm={{size: 6, offset: 3}} xs={{size: 10, offset: 1}}>
                    <div className="javaScript__info">
                        <div className="javaScript__item">
                            <img src={calendar} alt="calendar" className="javaScript__icon"/>
                            <span className="javaScript__desc">Տևողություն՝ 1 ամիս</span>
                        </div>
                        <div className="javaScript__item">
                            <img src={offline} alt="offline" className="javaScript__icon"/>
                            <span className="javaScript__desc">Տեսակը՝ Offline</span>
                        </div>
                        <div className="javaScript__item">
                            <img src={paid} alt="paid" className="javaScript__icon"/>
                            <span className="javaScript__desc">Արժեք՝ 35.000 դրամ</span>
                        </div>
                    </div>
               </Col>
           </Row>
        </Container>
        <Container>
            <Row>
                <Col className="javaScript__teachers teachers">
                    <h2 className="teachers__title">Դասավանդող մասնագետ</h2>
                </Col>
            </Row>
            <Row>
                <Col >
                    <img src={team} alt="team" className="teachers__img"/>
                    <h3 className="teachers__name">Aram Hakobyan</h3>
                    <p className="teachers__profession">Front End developer</p>
                </Col>
            </Row>
        </Container>
        <Plan/>
        </>
    );
};

export default JavaScript;
