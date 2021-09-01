import React, {useState} from 'react';
import {
    Container,
    Row,
    Col,
    CarouselControl,
    CarouselIndicators,
    CarouselItem,
    CarouselCaption,
    Carousel
} from "reactstrap";
import quotes from "../../assets/quotes.svg"

const items = [
    {
        name: 'Name Lastname',
        altText: 'Slide 1',
        caption: 'Slide 1'
    },
    {
        name: 'Name Lastname2',
        altText: 'Slide 2',
        caption: 'Slide 2'
    },
    {
        name: 'Name Lastname3',
        altText: 'Slide 3',
        caption: 'Slide 3'
    }
];

const Blog = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);


    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <Col xl={{size: 6, offset: 3}}>
                    <div className="blog__feedBack feedBach">
                        <div className="feedBach__img"/>
                        <img src={quotes} alt={item.altText} className="feedBach__quotes"/>
                        <p className="feeBach__text">Took a galley of type and scrambled
                            it to make a type specimen bookmake a type specimen book</p>
                        <h3 className="feedBach__name">{item.name}</h3>
                    </div>
            </Col>
            </CarouselItem>
        );
    });



    return (
        <Container>
            <Row>
                <Col xl={{size: 6, offset: 3}}>
                    <h2 className="block__title">Mer usanoxneri ashxatanqnery</h2>
                    <h3 className="block__subtitle">usanoxnri ashxatanq</h3>
                </Col>
            </Row>
            <Row>
                <Col xl="3" lg="3" md={{size: 6}} sm="12">
                    <div className="blog__works"/>
                </Col>
                <Col xl="3" lg="3" md={{size: 6}} sm="12">
                    <div className="blog__works"/>
                </Col>
                <Col xl="3" lg="3" md={{size: 6}} sm="12">
                    <div className="blog__works"/>
                </Col>
                <Col xl="3" lg="3" md={{size: 6}} sm="12">
                    <div className="blog__works"/>
                </Col>
            </Row>
            <Row>
                <Col xl={{size: 4, offset: 4}}>
                    <h2 className="block__title">Video Daser</h2>
                    <h3 className="block__subtitle">Video</h3>
                </Col>
            </Row>
            <Row>
                <Col xl="6" lg="6">
                    <iframe
                        className="blog__video"
                        src={`https://www.youtube.com/embed/rokGy0huYEA`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Embedded youtube"
                    />
                    <a className="blog__videoName" href="https://www.youtube.com/watch?time_continue=1&v=rokGy0huYEA&feature=emb_title">Build and Deploy a Google Maps Travel Companion Application React</a>
                </Col>
                <Col xl="6" lg="6">
                    <iframe
                        className="blog__video"
                        src={`https://www.youtube.com/embed/rokGy0huYEA`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Embedded youtube"
                    />
                    <a className="blog__videoName" href="https://www.youtube.com/watch?time_continue=1&v=rokGy0huYEA&feature=emb_title">Build and Deploy a Google Maps Travel Companion Application</a>
                </Col>
            </Row>
            <Row>


            <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
                >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                    {slides}
                <CarouselControl direction="prev" onClickHandler={previous} />
                <CarouselControl direction="next"  onClickHandler={next} />
        </Carousel>
        </Row>
        </Container>
    );
};

export default Blog;
