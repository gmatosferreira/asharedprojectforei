import React from "react"

import Slider from "react-slick";

/*
* This class implements a gallery component based on topics
* It uses the component Slider from the external library "react-slick"
*
* @param props.topics           Arrays of objects in the form { 'name': <String>, 'img': <String:url>, 'elements': [ <Element> ] }
*                               <Element> is an object in the form { 'name': <String:url>, 'about':<String:url>, 'img': <String:url> }
*/


export default class TopicGallery extends React.Component {

    constructor() {
        super()
        this.state = {
            topics: [],
            topic: {},
            currentIndex: 0,
        }
        this.topicBtn = this.topicBtn.bind(this)
    }

    // Handles click on button to select topic
    topicBtn(event) {
        if (event.target.getAttribute("data-topic")) {
            this.changeTopic(event.target.getAttribute("data-topic"))
        }
    }

    // Move to next topic
    nextTopic() {
        this.changeTopic(this.state.currentIndex + 1 < this.state.topics.length ? this.state.currentIndex + 1 : 0)
    }

    // Implements topic change
    changeTopic(index) {
        this.setState(prevState => {
            return {
                topic: prevState.topics[index],
                currentIndex: index
            }
        })
        this.slider.slickGoTo(index)
    }

    // Define state on mount and set interval for gallery auto play
    componentDidMount() {
        this.setState({
            topics: this.props.topics,
            topic: this.props.topics[0],
            currentIndex: 0,
        })
        this.interval = setInterval(() => this.nextTopic(), 10000)
    }

    // Remove galley auto play
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    // Render component
    render() {

        // Build choices
        const topics = this.state.topics.map(
            (topic, index) =>
                <img
                    className={`title-4 mx-auto underline underline-primary mb-1 ${this.state.topic && this.state.topic.name === topic.name && "underlined"}`}
                    src={process.env.PUBLIC_URL + topic.img}
                    data-topic={index}
                    onClick={this.topicBtn}
                    alt=""
                />
        )

        // Build slides
        const slides = this.state.topics.map(
            topic =>
                <div>
                    <div className="row mx-0">
                        {topic.elements.map(
                            element =>
                                <div className="col-12 col-md-6 mb-3 col-xl-3 mb-xl-0 mx-auto">
                                    <img src={process.env.PUBLIC_URL + element.img} className="w-100 member" alt="" />
                                    <img src={process.env.PUBLIC_URL + element.name} className="mt-3 mb-1 mx-auto title-4" alt="" />
                                    <img src={process.env.PUBLIC_URL + element.about} className="mx-auto title-5" alt="" />
                                </div>
                        )}
                    </div>
                </div>
        )

        // Slider settings
        const settings = {
            arrows: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true
        };

        return (
            <div className="d-flex flex-column">
                <div className="mx-auto col-12 col-md-11 col-xxl-7 row my-3 mb-5">
                    {topics}
                </div>

                <Slider ref={slider => (this.slider = slider)} {...settings}>
                    {slides}
                </Slider>
            </div>
        );
    }

}