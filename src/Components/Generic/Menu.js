import React from "react"


/*
* This class implements a component for a upper menu
*
* @param props.menu         Array of objects with the following structure: { name: <String>, id: <String> }
*/

export default class Menu extends React.Component {

    constructor() {
        super()
        this.state = {
            menu: []
        }
        this.goTo = this.goTo.bind(this)
    }

    goTo(event) {
        // Prevent default behaviour
        event.preventDefault()
        // Smooth scroll
        if (document.getElementById(event.target.href.split("#")[1])) {
            document.getElementById(event.target.href.split("#")[1]).scrollIntoView({ behavior: 'smooth' })
        }
    }

    componentDidMount() {
        this.setState({
            menu: this.props.menu
        })
    }

    render() {
        // Build menu
        const menuElements = this.state.menu.map(
            m => 
            <div className="d-none d-md-block mx-auto px-3">
                <a 
                    href={'#' + m.id} 
                    className="mb-0 underline"
                    onClick={this.goTo}
                >{m.name}</a>
            </div>
        )

        return(
            <div className={this.props.className + " row mx-auto text-white menu"}>
                {menuElements}
            </div>
        )
    }

}