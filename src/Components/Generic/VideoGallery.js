import React from "react"

import Button from "../Generic/Button"

/*
* This class implements a component for a video gallery
*
* @param props.videos      Arrays of objects in the form { 'name': <String>, 'url': <String> }
* @param props.title       The title of the gallery
*/

export default class VideoGallery extends React.Component {

    constructor() {
        super()
        this.state = {
            videos: [],
            currentVideo: {}
        }
        this.changeVideo = this.changeVideo.bind(this)
    }

    // Find element offset from page top recursively
    cumulativeOffset(element) {
        let top = 0, left = 0;
        do {
            top += element.offsetTop  || 0;
            left += element.offsetLeft || 0;
            element = element.offsetParent;
        } while(element)
    
        return {
            top: top,
            left: left
        }
    }

    // Handles click on button to change video
    changeVideo(event) {
        let btn = event.target;
        // If element inside btn, go up in hierarchy until btn is reached
        while (btn.tagName !== "BUTTON") {
            btn = btn.parentNode
            // Prevent endless cycle
            if (btn.tagName === "BODY")
                return
        }
        // Update state (current video)
        this.setState(prevState => {
            return { currentVideo: prevState.videos[btn.getAttribute("data-costum")] }
        })
        // Scroll to video if video not visible
        const top  = window.scrollY || document.documentElement.scrollY
        const videoHeight = this.cumulativeOffset(document.getElementById("videoGalleryVideo")).top
        if (videoHeight < top) {
            document.getElementById("videoGalleryVideo").scrollIntoView({ behavior: 'smooth' })
        }
    }

    componentDidMount() {
        // Set state
        this.setState({
            videos: this.props.videos,
            currentVideo: this.props.videos[0]
        })
    }

    render() {
        // Build video buttons
        const videoBtns = this.state.videos.map(
            (video, index) => 
            <Button 
                className={`primary-fill-static col text-left text-white mb-1 i-rotate ${this.state.currentVideo===video && 'active'}`}
                val={video.name + "<br><p class='col-12 p-0 m-0 text-right'><i class='fas fa-play'></i></p>"} 
                dataCostum={index}
                action={this.changeVideo}
            />
        )

        // Render
        return(
            <div className="row">

                <div className="order-2 col-12 order-lg-1 col-lg-4">
                    <p 
                        className="text-primary mb-1" 
                        dangerouslySetInnerHTML={{__html: this.props.title}}
                    ></p>
                    {videoBtns}
                </div>

                <div className="order-1 col-12 mb-5 order-lg-1 col-lg-8 mb-lg-0">
                    <iframe 
                        title="Video"
                        width="100%" 
                        height="100%" 
                        src={this.state.currentVideo.url}
                        id="videoGalleryVideo"
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen
                    ></iframe>
                </div>

            </div>
        )
    }

}