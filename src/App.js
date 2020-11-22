import React from "react"

import Header from "./Components/Sections/Header"
import About from "./Components/Sections/About"
import AboutDivider from "./Components/Sections/AboutDivider"
import Team from "./Components/Sections/Team"
import Events from "./Components/Sections/Events"
import EventsDivider from "./Components/Sections/EventsDivider"
import Contacts from "./Components/Sections/Contacts"
import Footer from "./Components/Sections/Footer"
import GoUp from "./Components/Generic/GoUp"

function App() {
    return (
        <div>
            <Header />
            <About />
            <AboutDivider />
            <Team />
            <Events />
            <EventsDivider />
            <Contacts />
            <Footer />
            <GoUp top="header" />
        </div>
    )
}

export default App