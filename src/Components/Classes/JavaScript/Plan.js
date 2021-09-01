import React from 'react';
import {Col, Container, Row} from "reactstrap";
import arrowDown from "../../../assets/classes/down-arrow.svg"

const Plan = () => {
    return (
        <Container>
            <Row>
                <Col xl={{size: 8, offset: 2}}>
                    <h3 className="plan__title">Ուսումնական պլան</h3>
                    <input type="checkbox" id="checkbox1" className="plan__input"/>
                    <div className="plan">
                        <h4 className="plan__subtitle">Ալգորիթմների տեսություն</h4>
                        <ol className="plan__list">
                            <li className="plan__item">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                            <li className="plan__item">Architecto atque culpa debitis, deleniti deserunt ducimus eveniet exercitationem impedit ipsa </li>
                            <li className="plan__item">ipsum iusto magnam maiores minima modi possimus reiciendis, tempora ut voluptate.</li>
                            <li className="plan__item">Architecto atque culpa debitis, deleniti deserunt ducimus eveniet exercitationem impedit ipsa</li>
                            <li className="plan__item">Architecto atque culpa debitis, deleniti deserunt ducimus eveniet exercitationem impedit ipsa</li>
                            <li className="plan__item">Architecto atque culpa debitis, deleniti deserunt ducimus eveniet exercitationem impedit ipsa</li>
                            <li className="plan__item">Architecto atque culpa debitis, deleniti deserunt ducimus eveniet exercitationem impedit ipsa</li>
                            <li className="plan__item">ipsum iusto magnam maiores minima modi possimus reiciendis, tempora ut voluptate.</li>
                            <li className="plan__item">ipsum iusto magnam maiores minima modi possimus reiciendis, tempora ut voluptate.</li>
                            <li className="plan__item">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                            <li className="plan__item">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                            <li className="plan__item">psum iusto magnam maiores minima modi possimus reiciendis, tempora ut voluptate</li>
                        </ol>
                    </div>
                    <label htmlFor="checkbox1" className="plan__btn">
                        <img src={arrowDown} alt="arrow" className="plan__arrow"/>
                    </label>
                </Col>
            </Row>
        </Container>
    );
};

export default Plan;
