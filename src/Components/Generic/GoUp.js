import React from "react"

import Button from "./Button"

/*
* This component implements a component for a go up button
*
* @param props.top          Top element id to scroll to when clicked
*/

export default class GoUp extends React.Component {

    constructor() {
        super()
        this.goup = this.goup.bind(this)
        this.state = {
            'top': null,
            'show': false,
        }
    }

    // Scroll up when clicked
    goup(event) {
        // Prevent default behaviour
        event.preventDefault()
        // Smooth scroll
        if (document.getElementById(this.state.top)) {
            document.getElementById(this.state.top).scrollIntoView({ behavior: 'smooth' })
        }
    }

    componentDidMount() {
        this.setState({
            'top': this.props.top
        })

        // Create event listener for scroll
        if (typeof window !== "undefined" && window.innerHeight>0) {
            window.onscroll = () => {
                let currentScrollPos = window.pageYOffset;
                let maxScroll = window.innerHeight*1;
                if (currentScrollPos < maxScroll) {
                    this.setState({ show: false })
                    // console.log(currentScrollPos)
                } else {
                    this.setState({ show: true })
                }
            }
        }
    }

    render() {

        return (
            <section id="goup">
                <Button
                    className="primary goup bg-white"
                    style={{ 'opacity': this.state.show ? 1 : 0 }}
                    val="<i class='fas fa-chevron-up'></i>"
                    action={this.goup}
                    title="Voltar ao topo"
                />
            </section>
        )
    }
}

