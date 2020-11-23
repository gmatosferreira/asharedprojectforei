import React from "react"
import ReCAPTCHA from "react-google-recaptcha";

import Button from "./Button"

/*
* This class implements a component for a contact form with the fields
* - Email
* - Message
*
* @param props.url          The url to send the form to
*                           It must answer with an object with the attr 'success' or 'error'
* @param props.reCAPTCHA    The reCAPTCHA site key
*/

export default class ContactForm extends React.Component {

    constructor() {
        super()
        this.state = {
            'email': "",
            'message': "",
            formSent: false,
            formError: false,
            passedCAPTCHA: false,
        }
        this.formUpdated = this.formUpdated.bind(this)
        this.submitForm = this.submitForm.bind(this)
        this.passedCAPTCHA = this.passedCAPTCHA.bind(this)
    }

    formUpdated(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    submitForm(event) {
        event.preventDefault()

        if (!this.state.passedCAPTCHA)
            return

        // Send form to API
        const postData = async (url = this.state.url, data = {
            'email': this.state.email,
            'message': this.state.message
        }) => {
            // Build request
            const response = await fetch(this.props.url, {
                method: 'POST',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })

            // Make request, process response and update state
            try {
                const answer = await response.json()
                if (answer['success'] !== undefined && answer['success']) {
                    this.setState({ formSent: true })
                } else {
                    this.setState({ formError: true })
                }
            } catch (error) {
                this.setState({ formError: true })
            }
        }

        // POST form
        postData()
    }

    passedCAPTCHA(value) {
        this.setState({passedCAPTCHA: true})
    }

    render() {
        if (!this.state.formSent) {
            return (
                <div>
                    <form className="needs-validation d-flex flex-column" onSubmit={this.submitForm}>
                        <input
                            type="email"
                            val={this.state.email}
                            name="email"
                            onChange={this.formUpdated}
                            placeholder="What is your email?"
                            className="form-control mb-3"
                            required
                        />

                        <textarea
                            rows="2"
                            val={this.state.message}
                            name="message"
                            onChange={this.formUpdated}
                            placeholder="Please write your message here :)"
                            className="form-control mb-3"
                            required
                        />

                        <ReCAPTCHA
                            sitekey={this.props.reCAPTCHA}
                            onChange={this.passedCAPTCHA}
                            className="mx-auto"
                        />
                        
                        <Button
                            val="Submit"
                            className="primary mt-3"
                        />
                    </form>

                    {
                        this.state.formError &&
                        <p className="mt-3 text-center">An error occured, please try again!</p>
                    }
                </div>
            )
        } else {
            return (
                <div className="d-flex flex-column text-center">
                    <p>Thanks for your message! :)</p>
                </div>
            )
        }
    }

}