import React from "react"

import ScheduleDay from "./ScheduleDay"

/*
* This function renders a schedule component
* Each schedule day is rendered using ScheduleDay component
*
* @param props.days     The days to schedule in the form [ { 'day': <String:dayName>, 'events': [ <Event> ] } ]
*                       For <Event> see ScheduleDay component 
*/

function Schedule(props) {

    // Build schedule
    const schedule = props.days.map(day => <ScheduleDay day={day} />)

    // Render component
    return(
        <div className="row">
            {schedule}
        </div>
    )
}

export default Schedule