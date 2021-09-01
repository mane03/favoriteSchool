import React, {useState} from 'react';
import GoogleMapReact from 'google-map-react';
import {Col, Container, Row} from "reactstrap";
import {input} from "./Data";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Contacts = () => {

    const [sendData, setSendData] = useState({
        name: "",
        eMail: "",
        phone: ""
    });
    
    const handleChange = (e) => {
      e.preventDefault()
        setSendData({
          ...sendData,
            [e.target.value] : e.target.value
        })
    }

    const defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };


    return (
        <Container className="contacts">
            <Row >
                <Col xl="7" lg="7" md="12" className={"order-xl-1 order-lg-1 order-md-2 order-sm-2 order-2"}>
                    <div style={{ height: '600px', width: '100%' }} className="contacts__map">
                        <GoogleMapReact
                            bootstrapURLKeys={{ key: "AIzaSyDwTBkW1L2PY2BHMW3kzZYCt92srjwX2NE" }}
                            defaultCenter={defaultProps.center}
                            defaultZoom={defaultProps.zoom}
                        >
                            <AnyReactComponent
                                lat={59.955413}
                                lng={30.337844}
                            />
                        </GoogleMapReact>
                    </div>
                </Col>
                <Col xl={{size: 4, offset: 1}} lg={{size: 5, offset: 0}} md="12" className={"order-xl-2 order-lg-2 order-md-1 order-sm-1 order-1"}>
                    <h2 className="contacts__title">Հետադարձ կապ</h2>
                    <form action="#" className="contacts__form">
                        <div className="contacts__inputs">
                            {
                                input.map((item, index) => {
                                    let {id, type, placeholder, name} = item
                                    return (
                                        <input
                                            id={id}
                                            type={type}
                                            placeholder={placeholder}
                                            name={name}
                                            className="contacts__input"
                                            onChange={handleChange}/>
                                    )
                                })
                            }
                        </div>
                        <span className="contactsBtn__outline">
                            <button className="contacts__btn">Send Now</button>
                        </span>
                    </form>
                </Col>
            </Row>
        </Container>
    );
}


export default Contacts;