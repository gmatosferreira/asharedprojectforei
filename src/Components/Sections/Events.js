import React from "react"

import eventsData from "../../Data/eventsData"

import Schedule from "../Generic/Schedule"

function Events() {

    return(
        <section id="schedule">
            <div className="d-flex flex-column col col-md-9 mx-auto py-5">
                <img 
                    className="maxw-100 title mx-auto" 
                    src={process.env.PUBLIC_URL + '/images/titles/title.png'} 
                    alt=""
                />
                <img 
                    className="title-4 mx-auto my-3 mb-5" 
                    src={process.env.PUBLIC_URL + '/images/titles/subtitle.png'} 
                    alt=""
                />

                <Schedule days={eventsData.days} />
            </div>
        </section>
    )

}

export default Events