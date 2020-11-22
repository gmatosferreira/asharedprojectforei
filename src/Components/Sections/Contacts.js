import React from "react"

import contactData from "../../Data/contactData"

import ContactForm from "../Generic/ContactForm"

function Contacts() {

    return(
        <section id="contactos">
            <div className="d-flex flex-column col col-md-9 mx-auto py-5">
                <img 
                    className="maxw-100 title mx-auto" 
                    src={process.env.PUBLIC_URL + '/images/titles/contacts.png'} 
                    alt="Queremos ouvir-te!"
                />

                <div className="col-12 col-lg-6 my-5 mx-auto">
                    <ContactForm 
                        url={contactData.formUrl} 
                        reCAPTCHA={contactData.reCAPTCHA}
                    />
                </div>
            </div>
        </section>
    )

}

export default Contacts