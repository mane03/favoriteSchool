import React from 'react';
import {Col, Container, Row} from "reactstrap";
import {Link} from "react-router-dom";
import {courses} from "./Data";

const Classes = () => {
    return (
        <Container>
            <Row>
                {courses.map((item, index) => {
                    let {to, className, src, alt, name} = item
                    console.log(src)
                    return (
                        <Col xl="4" md="6">
                            <Link className="link" to={to}>
                                <div key={index} className={className}>
                                    <img className="class__icon" src={src} alt={alt}/>
                                    <h3 className="class__name">{name}</h3>
                                </div>
                            </Link>
                        </Col>
                    )})}
            </Row>
        </Container>
    );
};

export default Classes;
