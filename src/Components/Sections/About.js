import React from "react"

import aboutData from "../../Data/aboutData"

import VideoGallery from "../Generic/VideoGallery"

function About() {

    return(
        <section id="about">
            <div className="d-flex flex-column col col-md-9 mx-auto py-5">
                <img 
                    className="maxw-100 title mx-auto" 
                    src={process.env.PUBLIC_URL + '/images/titles/title.png'} 
                    alt=""
                />

                <p className="text-center my-5">{aboutData.description}</p>

                <VideoGallery 
                    title="Watch our <span class='bold upper'>videos</span>"
                    videos={aboutData.videos} 
                />
            </div>
        </section>
    )

}

export default About