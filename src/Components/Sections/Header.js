import React from "react"

import headerData from "../../Data/headerData"

import Menu from "../Generic/Menu"
import Button from "../Generic/Button"

function Header() {

    const buttons = headerData.btns.map(
        btn =>
        <Button 
            val={btn.val}
            title={btn.title}
            className={btn.costumClass + " white"}
            action={function() {window.open(btn.url, '_blank')}}
        />
    )

    return(
        <section id="header" className="d-flex flex-column">
            <img 
                class="motiveUpLeft" 
                src={process.env.PUBLIC_URL + '/images/motives/leftup.png'} 
                alt="" 
            />
            <img 
                class="motiveUpRight" 
                src={process.env.PUBLIC_URL + '/images/motives/rightup.png'} 
                alt="" 
            />

            <Menu 
                className="my-5"
                menu={headerData.menu} 
            />

            <img 
                className="col-11 col-md-8 col-lg-6 col-xl-4 col-xxl-3 mx-auto" 
                src={process.env.PUBLIC_URL + '/images/header/slogan.png'} 
                alt="A shared project for EI"
            />

            <div className="row mt-5 mx-0">
                {buttons}
            </div>

            <div className="logo d-flex flex-column mt-5 py-5">
                <img 
                    className="col-11 col-md-auto mt-5 mx-auto" 
                    src={process.env.PUBLIC_URL + 'images/logo.png'} 
                    alt="Lista S"
                />
            </div>
        </section>
    )
    
}

export default Header