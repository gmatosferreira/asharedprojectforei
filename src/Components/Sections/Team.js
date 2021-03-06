import React from "react"

import teamData from "../../Data/teamData"

import TopicGallery from "../Generic/TopicGallery"

function Team() {

    return( 
        <section id="team">
            <div className="d-flex flex-column col col-md-9 mx-auto py-5">
                <img 
                    className="maxw-100 title mx-auto" 
                    src={process.env.PUBLIC_URL + '/images/titles/title.png'} 
                    alt=""
                />

                <TopicGallery topics={teamData.teams} />
            </div>
        </section>
    )

}

export default Team