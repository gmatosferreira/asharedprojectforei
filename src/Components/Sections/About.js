import React from "react"

import aboutData from "../../Data/aboutData"

import VideoGallery from "../Generic/VideoGallery"

function About() {

    return(
        <section id="programa">
            <div className="d-flex flex-column col col-md-9 mx-auto py-5">
                <img 
                    className="maxw-100 title mx-auto" 
                    src={process.env.PUBLIC_URL + '/images/titles/about.png'} 
                    alt="O que queremos?"
                />

                <p className="text-center my-5">{aboutData.description}</p>

                <VideoGallery 
                    title="Conhece as nossas <span class='bold upper'>Secções</span>"
                    videos={aboutData.videos} 
                />
            </div>
        </section>
    )

}

export default About