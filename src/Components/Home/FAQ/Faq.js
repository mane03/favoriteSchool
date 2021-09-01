import React, {useState} from 'react';
import {Col, Container, Row} from "reactstrap";
import {Data} from "./Data";
import arrow from "../../../assets/arrow.svg"

const Faq = () => {
    const [clicked, setClicked] = useState(false);


    const toggle = index => {
        if(clicked === index) {
            return setClicked(null)
        }
        setClicked(index)
    }


    return (
        <Container fluid={true} className="faq">
            <Container>
                <Row>
                    <Col xl={{size:6, offset: 3}}>
                        <h2 className="block__title">Hajax Trvox Harcer</h2>
                    </Col>
                    <Col xl={{size:4, offset: 4}}>
                        <h4 className="process__subtitle block__subtitle ">Harcer</h4>
                    </Col>
                </Row>
                <Row>
                    {Data.map((item, index) => {
                        return(
                            <>
                                <Col xl={{size: 8, offset: 2}} className={clicked === index ? "faq__blockOpen" : "faq__block"}>
                                    <div className="faq__close" onClick={() => toggle(index)} key={index}>
                                        <img src={arrow} alt="arrow" className={clicked === index && "arrow__open" }/>
                                        <h4 className="faq__question">{item.question}</h4>
                                    </div>
                                    {clicked === index ? (
                                        <div>
                                            <p className="faq__answer">{item.answer}</p>
                                        </div>
                                    ) : null}
                                </Col>
                            </>
                        )
                    } )}
                </Row>
            </Container>
        </Container>
    );
};

export default Faq;
