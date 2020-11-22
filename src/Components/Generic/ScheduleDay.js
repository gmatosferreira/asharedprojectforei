import React from "react"

/*
* This function implements a component for a schedule day
*
* @param props.day          The day to schedule in the form { 'day': <String:url>, 'events': [ <Event> ] }
*                           <Event> is in the form { 'name': <String>, 'schedule': <String:hours>, 'location': <String> }
*/

function ScheduleDay(props) {

    // Build events
    const events = props.day.events.map(
        event =>
        <div>
            <p className="bold upper mb-0">{event.name}</p>
            <p className="mb-0">{event.schedule}</p>
            <p>{event.location}</p>
        </div>
    )

    return (
        <div className="col-12 col-lg-6 col-xl-4 row">
            <div className="col-3 col-sm-4 ml-auto">
                <img 
                    src={process.env.PUBLIC_URL + props.day.day} 
                    className="w-100 h-auto" 
                    alt=""
                />
            </div>
            <div className="col-7 col-lg-8 mr-auto">
                {events}
            </div>
        </div>
    )

}

export default ScheduleDay