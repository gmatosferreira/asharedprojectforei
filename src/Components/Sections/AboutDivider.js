import React from "react"

import Button from "../Generic/Button"

import aboutData from "../../Data/aboutData"

function AboutDivider() {
    return(
        <div id="aboutDivider" className="row mx-0">
            <img 
                className="col-6 col-md-7 col-lg-3 col-xxl-auto p-0 mr-auto" 
                src={process.env.PUBLIC_URL + '/images/motives/aboutleft.png'} 
                alt="" 
            />
            
            <Button
                val="This is a button for a <span class='bold'>file</span> <i class='fas fa-file-alt'></i>"
                className="col-11 my-3 col-sm-auto mx-auto my-lg-auto primary-fill upper"
                action={function() {window.open(aboutData.doc, '_blank')}}
            />

            <img 
                className="col-6 col-md-7 col-lg-3 col-xxl-auto p-0 ml-auto" 
                src={process.env.PUBLIC_URL + '/images/motives/aboutright.png'} 
                alt="" 
            />
        </div>
    )
}

export default AboutDivider